import readlineSync from 'readline-sync'

export const showConditions = () => {
  console.log('Find the greatest common divisor of given numbers.')
}

let randomNumber1
let randomNumber2

export const askQuestion = () => {
  randomNumber1 = Math.ceil(Math.random() * 100)
  randomNumber2 = Math.ceil(Math.random() * 100)
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
