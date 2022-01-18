import greeting from '../cli.js';
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

const toGameEven = () => {
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  toGame(name, getQuestion, getCorrectAnswer);
};

export default toGameEven;
