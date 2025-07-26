import { greetings } from './cli.js'
import { showConditions, askQuestion, checkAnswer } from './even.js'

export const game = () => {
  const userName = greetings()
  showConditions()
  let i = 0
  while (i < 3) {
    const result = askQuestion()
    if (checkAnswer(result) === true) {
      i += 1
    }
    else {
      i = 0
      console.log(`Let's try again, ${userName}!`)
      break
    }
  }
  if (i === 3) {
    console.log(`Congratulations, ${userName}!`)
  }
}
