import greeting from '../cli.js';
import toGame from '../index.js';

const getQuestion = () => {
  const num1 = Math.round(Math.random() * 100);
  const num2 = Math.round(Math.random() * 100);
  const question = `${num1} ${num2}`;
  return question;
};

const getCorrectAnswer = (str) => {
  const array = str.split(' ');
  let num1 = array[0];
  let num2 = array[1];
  while (num1 !== 0 && num2 !== 0) {
    if (num1 > num2) {
      num1 = num1 % num2;
    } else {
      num2 = num2 % num1;
    }
  }
  const correctAnswer = (num1 + num2).toString();
  return correctAnswer;
};

const toGameGcd = () => {
  const name = greeting();
  console.log('Find the greatest common divisor of given numbers.');
  toGame(name, getQuestion, getCorrectAnswer);
};

export default toGameGcd;
