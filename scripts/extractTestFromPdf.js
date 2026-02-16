/**
 * Скрипт извлечения вопросов теста из .docx или .txt файла.
 *
 * Использование:
 *   node scripts/extractTestFromPdf.js              — читает Тест-2025.docx или Тест-2025.txt
 *   node scripts/checkParsers.js                    — извлекает все 430 вопросов из txt (рекомендуется)
 *
 * Результат: src/data/testQuestions.json, src/data/testQuestions.js
 * correctIndex: 0 — при необходимости уточните по ключу.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import mammoth from 'mammoth';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

function getDefaultInputPath() {
  const docxPath = path.join(projectRoot, 'Тест-2025.docx');
  const txtPath = path.join(projectRoot, 'Тест-2025.txt');
  if (fs.existsSync(docxPath)) return docxPath;
  return txtPath;
}

/** Извлечь 430 вопросов из txt (как в checkParsers, с поддержкой U+F0B7) */
function extractFromTxtFull(text) {
  const norm = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\f/g, '\n').replace(/(\d)\n(?=\d[\.\)]\s)/g, '$1');
  return parseRegexBlocks(norm);
}

const inputPath = process.argv[2] || getDefaultInputPath();
const outputPath = path.join(projectRoot, 'src', 'data', 'testQuestions.json');
const outputJsPath = path.join(projectRoot, 'src', 'data', 'testQuestions.generated.js');
const mainJsPath = path.join(projectRoot, 'src', 'data', 'testQuestions.js');

const bulletChars = /^[\s]*[•\u2022\u00B7\u25CF\u2023\u2043\uF0B7]\s*/;
const bulletSplit = /[•\u2022\u00B7\u25CF\u2023\u2043\uF0B7]/;

/** Парсер для построчного текста (txt, PDF-экспорт) */
function parseTextLines(text) {
  const lines = text.split(/\r?\n/).map((l) => l.trimEnd());
  const questions = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const qMatch = line.match(/^\s*(\d+)[\.\)]\s*(.*)$/);
    if (qMatch) {
      const id = parseInt(qMatch[1], 10);
      const parts = [qMatch[2]];
      i++;
      while (i < lines.length && !lines[i].match(/^\s*\d+[\.\)]/) && !lines[i].match(/^--\s*\d+\s+of\s+\d+\s*--/)) {
        const ln = lines[i];
        const isBullet = bulletChars.test(ln);
        const qEnded = parts.some((p) => /[?:]/.test(p) || p.trim().length > 50);
        const isOptionStart = !isBullet && qEnded && ln.trim().length > 20 && !/^\s{2,}/.test(ln);
        if (isBullet || isOptionStart) break;
        parts.push(ln);
        i++;
      }
      const questionText = parts.join(' ').trim();

      const options = [];
      while (i < lines.length && options.length < 3) {
        const optLine = lines[i];
        if (optLine.match(/^\s*\d+[\.\)]/) || optLine.match(/^--\s*\d+\s+of\s+\d+\s*--/)) break;
        const hasBullet = bulletChars.test(optLine);
        const looksLikeOption = optLine.trim().length > 10 && !optLine.match(/^\s*\d+[\.\)]/);
        if (hasBullet || (options.length < 3 && looksLikeOption)) {
          const optText = (hasBullet ? optLine.replace(bulletChars, '') : optLine).trim();
          const optParts = [optText];
          i++;
          while (i < lines.length && !lines[i].match(/^\s*\d+[\.\)]/) && !bulletChars.test(lines[i]) && !lines[i].match(/^--\s*\d+\s+of\s+\d+\s*--/)) {
            const next = lines[i];
            if (next.trim() && !next.match(/^\s{2,}/) && optParts.length > 0 && next.trim().length > 20) break;
            optParts.push(next);
            i++;
          }
          options.push(optParts.join(' ').trim());
        } else {
          i++;
        }
      }

      if (questionText && options.length === 3) {
        questions.push({ id, text: questionText, options, correctIndex: 0 });
      }
    } else {
      i++;
    }
  }

  return questions;
}

/** Обрезать текст до следующего номера вопроса (только с новой строки, чтобы не трогать "В 11.00") */
function trimToNextQuestion(s) {
  const parts = s.split(/\n\s*\d+[\.\)]\s/);
  return (parts[0] || s).trim();
}

/** Регекс-парсер: извлекает блоки "N) текст...•опция1•опция2•опция3" до следующего номера */
function parseRegexBlocks(text) {
  const questions = [];
  const blockRe = /(\d+)[\.\)]\s*([\s\S]*?)(?=\n\s*\d+[\.\)]\s|$)/g;
  const bulletRe = /[\n\s]*[•\u2022\u00B7\u25CF\u2023\u2043\uF0B7]\s*/;
  let m;
  while ((m = blockRe.exec(text)) !== null) {
    const id = parseInt(m[1], 10);
    const body = m[2].trim();
    if (!body || id < 1 || id > 500) continue;
    let parts = body.split(bulletRe).map((p) => p.replace(/\s+/g, ' ').trim()).filter(Boolean);
    if (parts.length < 4) {
      const paras = body.split(/\n\n+/).map((p) => p.replace(/\s+/g, ' ').trim()).filter((p) => p.length > 5);
      if (paras.length >= 4) parts = paras;
    }
    if (parts.length < 4) {
      const lineGroups = [];
      let current = [];
      const bulletStart = /^\s*[•\u2022\u00B7\u25CF\u2023\u2043\uF0B7]/;
      for (const ln of body.split('\n')) {
        const trimmed = ln.trim();
        if (!trimmed) continue;
        const isBulletLine = bulletStart.test(ln);
        const isContinuation = ln.match(/^\s{2,}/) && current.length > 0 && !bulletStart.test(ln);
        if (isContinuation) {
          current.push(trimmed);
        } else {
          if (current.length) lineGroups.push(current.join(' '));
          current = [trimmed.replace(bulletStart, '').trim()];
        }
      }
      if (current.length) lineGroups.push(current.join(' '));
      if (lineGroups.length >= 4) parts = lineGroups;
    }
    if (parts.length >= 4) {
      const questionText = trimToNextQuestion(parts[0]);
      const options = parts.slice(1, 4).map((p) => trimToNextQuestion(p)).filter(Boolean);
      if (questionText && options.length === 3) {
        questions.push({ id, text: questionText, options, correctIndex: 0 });
      }
    }
  }
  return questions;
}

/** Парсер по блокам и маркерам • — для txt с переносами внутри вариантов */
function parseTextBlockByBullet(text) {
  const questions = [];
  const blocks = text.split(/(?=\s*\d+[\.\)]\s*)/);
  const bulletRe = /[•\u2022\u00B7\u25CF\uF0B7]/;
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;
    const numMatch = block.match(/^\s*(\d+)[\.\)]\s*(.*)/s);
    if (!numMatch) continue;
    const id = parseInt(numMatch[1], 10);
    const body = numMatch[2].trim();
    const parts = body.split(bulletRe);
    if (parts.length < 4) continue;
    const questionText = trimToNextQuestion(parts[0]).replace(/\s+/g, ' ').trim();
    if (!questionText) continue;
    const options = parts.slice(1, 4).map((p) => trimToNextQuestion(p).replace(/\s+/g, ' ').trim()).filter(Boolean);
    if (options.length === 3) {
      questions.push({ id, text: questionText, options, correctIndex: 0 });
    }
  }
  return questions;
}

/** Парсер для docx (mammoth): вопросы и варианты разделены двойными переносами */
function parseTextBlock(text) {
  const questions = [];
  const blocks = text.split(/(?=\d+[\.\)]\s*)/);
  for (let i = 0; i < blocks.length; i++) {
    const block = blocks[i].trim();
    if (!block) continue;

    let id;
    let body;

    if (i === 0) {
      id = 1;
      const paras = block.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
      const qIdx = paras.findIndex((p) => p.includes('?'));
      if (qIdx < 0 || paras.length < qIdx + 4) continue;
      body = paras.slice(qIdx, qIdx + 4).join('\n\n');
    } else {
      const numMatch = block.match(/^(\d+)[\.\)]\s*(.*)/s);
      if (!numMatch) continue;
      id = parseInt(numMatch[1], 10);
      body = numMatch[2].trim();
    }

    const parts = body.split(/\n\n+/).map((s) => s.trim()).filter(Boolean);
    if (parts.length >= 4) {
      const questionText = parts[0];
      const options = parts.slice(1, 4);
      questions.push({ id, text: questionText, options, correctIndex: 0 });
    }
  }
  return questions;
}

function parseText(text) {
  const normalized = text
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n')
    .replace(/\f/g, '\n')
    .replace(/(\d)\n(?=\d[\.\)]\s)/g, '$1');
  let questions = parseRegexBlocks(normalized);
  const linesRes = parseTextLines(normalized);
  if (linesRes.length > questions.length) {
    questions = linesRes;
  }
  const bulletRes = parseTextBlockByBullet(normalized);
  if (bulletRes.length > questions.length) questions = bulletRes;
  return questions;
}

async function extractTextFromDocx(filePath) {
  const result = await mammoth.extractRawText({ path: filePath });
  return result.value;
}

(async () => {
  try {
    let text;
    const ext = path.extname(inputPath).toLowerCase();
    if (ext === '.docx') {
      text = await extractTextFromDocx(inputPath);
    } else {
      text = fs.readFileSync(inputPath, 'utf8');
    }
    let questions;
    if (ext === '.txt') {
      const { extractQuestions } = await import('./checkParsers.js', { assert: { type: 'module' } });
      const fullQuestions = extractQuestions(text);
      questions = fullQuestions.length >= 400 ? fullQuestions : extractFromTxtFull(text);
    } else if (ext === '.docx') {
      const norm = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\f/g, '\n').replace(/(\d)\n(?=\d[\.\)]\s)/g, '$1');
      questions = parseRegexBlocks(norm);
      const linesRes = parseTextLines(norm);
      if (linesRes.length > questions.length) questions = linesRes;
      const bulletRes = parseTextBlockByBullet(norm);
      if (bulletRes.length > questions.length) questions = bulletRes;
    }
    if (questions.length === 0) {
      const debugPath = path.join(projectRoot, 'scripts', 'debug-extract.txt');
      fs.writeFileSync(debugPath, text.slice(0, 5000), 'utf8');
      console.warn('ВНИМАНИЕ: Извлечено 0 вопросов. Сырой текст (первые 5000 символов) сохранён в scripts/debug-extract.txt');
    }
    fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf8');
    const jsContent = `/** Автоматически сгенерировано: node scripts/extractTestFromPdf.js */\nexport default ${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(outputJsPath, jsContent, 'utf8');
    const mainHeader = `/**
 * Вопросы теста предпринимательских компетенций.
 * ${questions.length} вопросов. Извлечено из Тест-2025.txt. correctIndex: 0 — при необходимости уточните по ключу.
 */
`;
    const mainJsContent = mainHeader + `export default ${JSON.stringify(questions, null, 2)};\n`;
    fs.writeFileSync(mainJsPath, mainJsContent, 'utf8');
    console.log(`Извлечено ${questions.length} вопросов.`);
    console.log(`Сохранено: ${outputPath}, ${outputJsPath}, ${mainJsPath}`);
  } catch (e) {
    console.error('Ошибка:', e.message);
    process.exit(1);
  }
})();
