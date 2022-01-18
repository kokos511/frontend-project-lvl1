import greeting from './cli.js';
import toGame from './game-engine.js';

const name = greeting();

const getQuestion = () => {
  const random = Math.floor(Math.random() * 3);
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  let question;
  switch (random) {
    case 0:
      question = `${num1} + ${num2}`;
      break;
    case 1:
      question = `${num1} - ${num2}`;
      break;
    case 2:
      question = `${num1} * ${num2}`;
      break;
    default:
  }
  return question;
}
const getCorrectAnswer = (str) => {
  const array = str.split(' ');
  let correctAnswer;
  if (array[1] === '+') {
    correctAnswer = Number(array[0]) + Number(array[2]);
  } else if (array[1] === '-') {
    correctAnswer = Number(array[0]) + Number(array[2]);
  } else if (array[1] === '*') {
    correctAnswer = Number(array[0]) * Number(array[2]);
  }
  return correctAnswer;
};

const toGameCalc = () => {
    console.log('What is the result of the expression?');
    toGame(name, getQuestion, getCorrectAnswer);
};

export default toGameCalc;
