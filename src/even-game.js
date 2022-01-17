import readlineSync from 'readline-sync';
import greeting from './cli.js';

const name = greeting();

const isEven = (number) => number % 2 === 0;

const toGameEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count < 3) {
    const number = Math.round(Math.random() * 100);
    console.log(`Question: ${number}`);

    let correctAnswer = '';
    if (isEven(number)) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }

    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  console.log(`Congratulations, ${name}`);
};

export default toGameEven;
