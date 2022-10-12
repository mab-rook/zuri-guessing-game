// guessing game 
const username = prompt('username ')
function guessingNumber(startRange, stopRange) {
  const random = Math.floor(Math.random() * 2) + 1
  var num = parseInt(prompt('guess a number from 1 to 2:'))
  while (num !== random) {
    console.log('oh! sorry')
    break
  }

  if (num === random) {
    console.log('congratulations!!! one point for you')
    const random2 = Math.floor(Math.random() * 3) + 1
    num1 = parseInt(prompt('Guess a number from 1 to 3: '))
    if (num1 !== random2) {
      console.log('Game over')
    } else {
      console.log('move to stage 2')
      console.log('congratulations!!! extra point for you again')
    }
  } else {
    console.log('try again')
  }
}
guessingNumber(1, 2)

