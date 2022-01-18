import greeting from '../cli.js';
import toGame from '../index.js';

const name = greeting();

const getQuestion = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const question = `${num1} ${num2}`;
  return question;
};

const getCorrectAnswer = (str) => {
  const array = str.split(' ');
  array.sort((a, b) => a - b);
  let correctAnswer;
  const num1 = array[0];
  const num2 = array[1];
  if (num1 === 1) {
    correctAnswer = '1';
  }
  if (num2 % num1 === 0) {
    correctAnswer = `${num1}`;
  } else if (num1 % 2 === 0) {
    for (let i = num1 / 2; i >= 1; i -= 1) {
      if (num2 % i === 0 && num1 % i === 0) {
        correctAnswer = `${i}`;
        break;
      }
    }
  } else {
    for (let i = num1; i >= 1; i -= 1) {
      if (num2 % i === 0 && num1 % i === 0) {
        correctAnswer = `${i}`;
        break;
      }
    }
  }
  return correctAnswer;
};

const toGameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  toGame(name, getQuestion, getCorrectAnswer);
};

export default toGameGcd;
