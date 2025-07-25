import readlineSync from 'readline-sync'

let globalName

export const greetings = () => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log('Hello, ' + userName + '!')
  globalName = userName
  return globalName
}
