'use strict'

let score = 20
let randomNumber = Math.trunc(Math.random() * 20) + 1

let highscore = Number(document.querySelector('.highscore').textContent)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value)
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!'
  } else if (guess === randomNumber) {
    console.log(highscore, score)
    if (score > highscore) {
      highscore = score
    }
    document.querySelector('.message').textContent = '🎁 You Won!'
    document.querySelector('body').style.backgroundColor = '#900079'
    document.querySelector('.number').style.width = '30rem'
    document.querySelector('.highscore').textContent = highscore
    document.querySelector('.number').textContent = randomNumber
  } else {
    if (score == 0) {
      document.querySelector('.message').textContent = '😐 You lost!'
      document.querySelector('.score').textContent = 0
    } else {
      document.querySelector('.message').textContent =
        randomNumber > guess ? 'Too low' : 'Too high'
      score--
      document.querySelector('.score').textContent = score
    }
  }
})

document.querySelector('.again').addEventListener('click', function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1
  score = 20
  document.querySelector('.guess').value = ''
  document.querySelector('.number').textContent = '?'
  document.querySelector('.score').textContent = score
  document.querySelector('.highscore').textContent = highscore
  document.querySelector('body').style.backgroundColor = '#222'
  document.querySelector('.number').style.width = '15rem'
})
