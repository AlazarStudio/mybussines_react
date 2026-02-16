/**
 * Извлечение всех 430 вопросов (парсер с U+F0B7)
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');

export function extractQuestions(text) {
  const normalized = text.replace(/\r\n/g, '\n').replace(/\r/g, '\n').replace(/\f/g, '\n').replace(/(\d)\n(?=\d[\.\)]\s)/g, '$1');
  const questions = [];
  const blockRe = /(\d+)[\.\)]\s*([\s\S]*?)(?=\n\s*\d+[\.\)]\s|$)/g;
  const bulletRe = /[\n\s]*[•\u2022\u00B7\u25CF\u2023\u2043\uF0B7]\s*/;
  const bulletStart = /^\s*[•\u2022\u00B7\u25CF\u2023\u2043\uF0B7]/;

  function trimToNextQuestion(s) {
    return (s.split(/\n\s*\d+[\.\)]\s/)[0] || s).trim();
  }

  let m;
  while ((m = blockRe.exec(normalized)) !== null) {
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
      for (const ln of body.split('\n')) {
        const trimmed = ln.trim();
        if (!trimmed) continue;
        const isContinuation = ln.match(/^\s{2,}/) && current.length > 0 && !bulletStart.test(ln);
        if (isContinuation) current.push(trimmed);
        else {
          if (current.length) lineGroups.push(current.join(' '));
          current = [trimmed.replace(bulletStart, '').trim()];
        }
      }
      if (current.length) lineGroups.push(current.join(' '));
      if (lineGroups.length >= 4) parts = lineGroups;
    }
    if (parts.length >= 4) {
      const questionText = trimToNextQuestion(parts[0]).replace(/\s+/g, ' ').trim();
      const options = parts.slice(1, 4).map((p) => trimToNextQuestion(p).replace(/\s+/g, ' ').trim()).filter(Boolean);
      if (questionText && options.length === 3) {
        questions.push({ id, text: questionText, options, correctIndex: 0 });
      }
    }
  }
  return questions;
}

const inputPath = path.join(root, 'Тест-2025.txt');
const outputPath = path.join(root, 'src', 'data', 'testQuestions.json');
const mainJsPath = path.join(root, 'src', 'data', 'testQuestions.js');

const text = fs.readFileSync(inputPath, 'utf8');
const questions = extractQuestions(text);
console.log('Всего вопросов:', questions.length);

if (questions.length > 400) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, JSON.stringify(questions, null, 2), 'utf8');
  const jsContent = `/**
 * Вопросы теста на соцконтракт 2025. ${questions.length} вопросов.
 * correctIndex: 0 — при необходимости уточните по ключу.
 */
export default ${JSON.stringify(questions, null, 2)};
`;
  fs.writeFileSync(mainJsPath, jsContent, 'utf8');
  console.log('Сохранено:', outputPath, mainJsPath);
}
