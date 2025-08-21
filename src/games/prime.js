import readlineSync from 'readline-sync'
import { getRandomNumber } from '../random-number.js'

export const showConditions = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".')
}

let randomNumber
export const askQuestion = () => {
  randomNumber = getRandomNumber()
  console.log('Question: ' + randomNumber)
  const answer = readlineSync.question('Your answer: ')
  return answer
}

const isPrime = (num) => {
  if (num <= 1) {
    return false
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false
    }
  }
  return true
}

export const checkAnswer = (answer) => {
  const correctAnswer = isPrime(randomNumber)
  if (correctAnswer === true && answer === 'yes') {
    console.log('Correct!')
    return true
  }
  else if (correctAnswer === false && answer === 'no') {
    console.log('Correct!')
    return true
  }
  else if (correctAnswer === true && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`)
    return false
  }
  else if (correctAnswer === false && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`)
    return false
  }
}
