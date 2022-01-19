import toGame from '../index.js';

const getRundomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

let correctAnswer;

const getQuestion = () => {
  const firstNumber = getRundomNum(1, 10);
  const step = getRundomNum(1, 5);
  const length = getRundomNum(5, 10);
  const question = [firstNumber];
  let num = firstNumber + step;
  for (let i = 1; i <= length; i += 1) {
    question.push(num);
    num += step;
  }
  const hide = getRundomNum(0, length - 1);
  correctAnswer = `${question[hide]}`;
  question[hide] = '..';
  let result = `${question[0]}`;
  for (let j = 1; j < question.length; j += 1) {
    result = `${result} ${question[j]}`;
  }
  return result;
};

const getCorrectAnswer = () => correctAnswer;

const rules = 'What number is missing in the progression?';

const toGameProgression = () => {
  toGame(rules, getQuestion, getCorrectAnswer);
};

export default toGameProgression;
