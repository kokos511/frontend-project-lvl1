import toGame from '../index.js';

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
};

const getCorrectAnswer = (str) => {
  const array = str.split(' ');
  let correctAnswer;
  if (array[1] === '+') {
    correctAnswer = Number(array[0]) + Number(array[2]);
  } else if (array[1] === '-') {
    correctAnswer = Number(array[0]) - Number(array[2]);
  } else if (array[1] === '*') {
    correctAnswer = Number(array[0]) * Number(array[2]);
  }
  return correctAnswer.toString();
};

const rules = 'What is the result of the expression?';

const toGameCalc = () => {
  toGame(rules, getQuestion, getCorrectAnswer);
};

export default toGameCalc;
