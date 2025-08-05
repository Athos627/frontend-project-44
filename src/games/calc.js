import readlineSync from 'readline-sync'

export const showConditions = () => {
  console.log('What is the result of the expression?')
}

let randomOperator
const getRandomOperator = () => {
  const operators = ['+', '-', '*']
  const randomIndex = Math.floor(Math.random() * operators.length)
  return operators[randomIndex]
}

let randomNumber1
let randomNumber2
export const askQuestion = () => {
  randomNumber1 = Math.ceil(Math.random() * 100)
  randomNumber2 = Math.ceil(Math.random() * 10)
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
