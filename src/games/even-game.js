import toGame from '../index.js';

const isEven = (number) => number % 2 === 0;

const getQuestion = () => Math.round(Math.random() * 100);
const getCorrectAnswer = (num) => {
  let correctAnswer;
  if (isEven(num)) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  return correctAnswer;
};

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const toGameEven = () => {
  toGame(rules, getQuestion, getCorrectAnswer);
};

export default toGameEven;
