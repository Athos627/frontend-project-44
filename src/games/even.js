import readlineSync from 'readline-sync'

export const showConditions = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')
}

let randomNumber
export const askQuestion = () => {
  randomNumber = Math.ceil(Math.random() * 100)
  console.log('Question: ' + randomNumber)
  const answer = readlineSync.question('Your answer: ')
  return answer
}

export const checkAnswer = (answer) => {
  const isEven = randomNumber % 2 === 0
  if (isEven === true && answer === 'yes') {
    console.log('Correct!')
    return true
  }
  else if (isEven === false && answer === 'no') {
    console.log('Correct!')
    return true
  }
  else if (isEven === true && answer !== 'yes') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'yes'.`)
    return false
  }
  else if (isEven === false && answer !== 'no') {
    console.log(`'${answer}' is wrong answer ;(. Correct answer was 'no'.`)
    return false
  }
}
