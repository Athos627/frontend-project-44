import readlineSync from 'readline-sync'
import { getRandomNumber } from '../random-number.js'

export const showConditions = () => {
  console.log('What is the result of the expression?')
}

let randomOperator
const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = getRandomNumber(0, operators.length - 1)
  return operators[randomIndex]
}

let randomNumber1
let randomNumber2
export const askQuestion = () => {
  randomNumber1 = getRandomNumber()
  randomNumber2 = getRandomNumber(0, 10)
  randomOperator = getRandomOperator()
  console.log(`Question: ${randomNumber1} ${randomOperator} ${randomNumber2}`)
  const answer = readlineSync.question('Your answer: ')
  return answer
}

export const checkAnswer = (answer) => {
  const correctAnswer = eval(randomNumber1 + randomOperator + randomNumber2)
  if (answer == correctAnswer) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
    return false
  }
}
