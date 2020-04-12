const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
const btnStart = document.querySelector('#btnStart')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSquare() {
    square.forEach(className => {
        className.classList.remove('mole')
    })

    let randomPostion = square[Math.floor(Math.random() * 9)]
    randomPostion.classList.add('mole')

    // assign the id of the randomPosition to hitPosition for us to use later
    hitPosition = randomPostion.id
}

square.forEach(id => {
    id.addEventListener('mouseup', () => {
        if (id.id === hitPosition) {
            result = result + 1
            score.textContent = result
        }
    })
})

let moleTimerId = null
function moveMole() {
    moleTimerId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown() {
    currentTime--
    timeLeft.textContent = currentTime

    if (currentTime === 0) {
        clearInterval(timerId)
        clearInterval(moleTimerId)
        alert('GAME OVER! Your final score is ' + result)
    }
}

let timerId = setInterval(countDown, 1000)

