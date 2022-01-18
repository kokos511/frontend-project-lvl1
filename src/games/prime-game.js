import greeting from '../cli.js';
import toGame from '../index.js';

const name = greeting();

const getQuestion = () => Math.round(Math.random() * 100);

const getCorrectAnswer = (num) => {
  if (num <= 1) {
    return 'no';
  }
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return 'yes';
};

const toGamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  toGame(name, getQuestion, getCorrectAnswer);
};

export default toGamePrime;
