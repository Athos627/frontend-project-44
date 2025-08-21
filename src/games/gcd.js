import readlineSync from 'readline-sync'
import { getRandomNumber } from '../random-number.js'

export const showConditions = () => {
  console.log('Find the greatest common divisor of given numbers.')
}

let randomNumber1
let randomNumber2

export const askQuestion = () => {
  randomNumber1 = getRandomNumber()
  randomNumber2 = getRandomNumber()
  console.log(`Question: ${randomNumber1} ${randomNumber2}`)
  const answer = readlineSync.question('Your answer: ')
  return answer
}

const greatestCommonDivisor = (a, b) => {
  if (b === 0) {
    return a
  }
  let result = b
  b = a % b
  return greatestCommonDivisor(result, b)
}

export const checkAnswer = (answer) => {
  const correctAnswer = greatestCommonDivisor(randomNumber1, randomNumber2)
  if (answer == correctAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    return false
  }
}
