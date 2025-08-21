import readlineSync from 'readline-sync'
import { getRandomNumber } from '../random-number.js'

export const showConditions = () => {
  console.log('What number is missing in the progression?')
}

let start
let step
let index

export const askQuestion = () => {
  const startArr = []
  start = getRandomNumber(0, 20)
  step = getRandomNumber(1, 10)
  index = getRandomNumber(1, 10)
  for (let i = 0; i < step * 10; i += step) {
    startArr.push(start + i)
  }
  const shownArr = startArr
  shownArr[index] = '..'
  const questionString = (shownArr) => {
    let result = ''
    for (const num of shownArr) {
      result = `${result} ${num}`
    }
    return result
  }
  console.log(`Question:${questionString(shownArr)}`)
  const answer = readlineSync.question('Your answer: ')
  return answer
}

export const checkAnswer = (answer) => {
  const currentElement = start + index * step
  if (answer == currentElement) {
    console.log('Correct!')
    return true
  }
  else {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was '${currentElement}'.`)
    return false
  }
}
