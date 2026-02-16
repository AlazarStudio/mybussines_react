import React, { useState, useEffect } from 'react';
import classes from './TestPage.module.css';
import CenterBlock from '../../Standart/CenterBlock/CenterBlock';
import WidthBlock from '../../Standart/WidthBlock/WidthBlock';
import testQuestions from '../../../data/testQuestions';
import { useLocation } from 'react-router-dom';

const QUESTIONS_COUNT = 43;
const MIN_CORRECT_PERCENT = 50;

function shuffleArray(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function TestPage() {
  const location = useLocation();
  const [phase, setPhase] = useState('intro');
  const [selectedQuestions, setSelectedQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleStart = () => {
    const count = Math.min(QUESTIONS_COUNT, testQuestions.length);
    setSelectedQuestions(shuffleArray(testQuestions).slice(0, count));
    setAnswers({});
    setCurrentIndex(0);
    setPhase('test');
  };

  const handleAnswer = (optIndex) => {
    const q = selectedQuestions[currentIndex];
    if (!q) return;
    setAnswers((prev) => ({ ...prev, [q.id]: optIndex }));
  };

  const handleNext = () => {
    if (currentIndex < selectedQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setPhase('result');
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  const handleRestart = () => {
    setPhase('intro');
    setSelectedQuestions([]);
    setAnswers({});
    setCurrentIndex(0);
  };

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (phase === 'intro') {
    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1 className={classes.title}>Тест предпринимательских компетенций</h1>
            <p className={classes.intro}>
              Тест поможет определить ваш уровень предпринимательских компетенций.
              Вам будет предложено {QUESTIONS_COUNT} вопросов с тремя вариантами ответа.
              Для успешного прохождения необходимо правильно ответить минимум на {MIN_CORRECT_PERCENT}% вопросов.
            </p>
            <button type="button" className={classes.startBtn} onClick={handleStart}>
              Начать тест
            </button>
          </div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  if (phase === 'result') {
    const correct = selectedQuestions.filter((q) => answers[q.id] === q.correctIndex).length;
    const total = selectedQuestions.length;
    const percent = total ? Math.round((correct / total) * 100) : 0;
    const passed = percent >= MIN_CORRECT_PERCENT;

    return (
      <CenterBlock>
        <WidthBlock>
          <div className={classes.container}>
            <h1 className={passed ? classes.resultPass : classes.resultFail}>
              {passed ? 'Тест пройден!' : 'Тест не пройден'}
            </h1>
            <p className={classes.score}>
              Правильных ответов: {correct} из {total} ({percent}%)
            </p>
            <p className={classes.hint}>
              {passed
                ? 'Поздравляем! Вы продемонстрировали достаточный уровень предпринимательских компетенций.'
                : `Для прохождения необходимо набрать минимум ${MIN_CORRECT_PERCENT}% правильных ответов. Попробуйте пройти тест ещё раз.`}
            </p>
            <button type="button" className={classes.startBtn} onClick={handleRestart}>
              Пройти снова
            </button>
          </div>
        </WidthBlock>
      </CenterBlock>
    );
  }

  const q = selectedQuestions[currentIndex];
  if (!q) return null;

  const progress = ((currentIndex + 1) / selectedQuestions.length) * 100;
  const canNext = answers[q.id] !== undefined;

  return (
    <CenterBlock>
      <WidthBlock>
        <div className={classes.container}>
          <div className={classes.progressBar}>
            <div className={classes.progressFill} style={{ width: `${progress}%` }} />
          </div>
          <div className={classes.counter}>
            Вопрос {currentIndex + 1} из {selectedQuestions.length}
          </div>
          <p className={classes.question}>{q.text}</p>
          <div className={classes.options}>
            {q.options.map((opt, i) => (
              <label
                key={i}
                className={classes.option}
              >
                <input
                  type="radio"
                  name={`q-${q.id}`}
                  checked={answers[q.id] === i}
                  onChange={() => handleAnswer(i)}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
          <div className={classes.nav}>
            <button
              type="button"
              className={classes.navBtn}
              onClick={handleBack}
              disabled={currentIndex === 0}
            >
              Назад
            </button>
            <button
              type="button"
              className={classes.navBtn}
              onClick={handleNext}
              disabled={!canNext}
            >
              {currentIndex < selectedQuestions.length - 1 ? 'Далее' : 'Завершить'}
            </button>
          </div>
        </div>
      </WidthBlock>
    </CenterBlock>
  );
}

export default TestPage;
