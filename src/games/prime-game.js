import toGame from '../index.js';

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

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const toGamePrime = () => {
  toGame(rules, getQuestion, getCorrectAnswer);
};

export default toGamePrime;
