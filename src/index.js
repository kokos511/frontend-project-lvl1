import readlineSync from 'readline-sync';
import greeting from './cli.js';

const toGame = (rules, getQuestion, getCorrectAnswer) => {
  const name = greeting();
  console.log(rules);
  let count = 0;
  while (count < 3) {
    const question = getQuestion();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');
    const correctAnswer = getCorrectAnswer(question);
    if (answer !== correctAnswer) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${correctAnswer}".\nLet's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    count += 1;
  }
  console.log(`Congratulations, ${name}!`);
};

export default toGame;
