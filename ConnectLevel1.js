let colorChooser = 'red'
const blockSelected = []

const colorSelected = document.querySelector('.color-selected')

const redBlock = document.querySelectorAll('.main-red')
const blueBlock = document.querySelectorAll('.main-blue')
const greenBlock = document.querySelectorAll('.main-green')
const yellowBlock = document.querySelectorAll('.main-yellow')
const orangeBlock = document.querySelectorAll('.main-orange')
const tiles = document.querySelectorAll('.block')
const button = document.querySelector('button')
const a = document.querySelectorAll('a')

let redTilesMatch = []
let blueTilesMatch = []
let greenTilesMatch = []
let yellowTilesMatch = []
let orangeTilesMatch = []

const winCondition = () => {
  if (
    redTilesMatch.length === 4 &&
    blueTilesMatch.length === 3 &&
    yellowTilesMatch.length === 2 &&
    orangeTilesMatch.length === 3 &&
    greenTilesMatch.length === 3
  ) {
    alert('you have won')
    a[1].setAttribute('href', 'ConnectedLevel2.html')
  }
}

const gamePlay = () => {
  for (i = 0; i < tiles.length; i++)
    tiles[i].addEventListener('click', (e) => {
      if (
        e.target.classList.contains('red') ||
        e.target.classList.contains('main-red')
      )
        return
      else if (
        e.target.classList.contains('blue') ||
        e.target.classList.contains('main-blue')
      )
        return
      else if (
        e.target.classList.contains('green') ||
        e.target.classList.contains('main-green')
      )
        return
      else if (
        e.target.classList.contains('yellow') ||
        e.target.classList.contains('main-yellow')
      )
        return
      else if (
        e.target.classList.contains('orange') ||
        e.target.classList.contains('main-orange')
      )
        return

      e.target.classList.add(`${colorChooser}`)

      if (e.target.classList.contains('red')) {
        redTilesMatch.push(1)
        winCondition()
      } else if (e.target.classList.contains('blue')) {
        blueTilesMatch.push(1)
        winCondition()
      } else if (e.target.classList.contains('green')) {
        greenTilesMatch.push(1)
        winCondition()
      } else if (e.target.classList.contains('yellow')) {
        yellowTilesMatch.push(1)
        winCondition()
      } else if (e.target.classList.contains('orange')) {
        orangeTilesMatch.push(1)
        winCondition()
      }
    })
}
for (i = 0; i < redBlock.length; i++) {
  redBlock[i].addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'red'
    colorSelected.classList.add(`${colorChooser}`)
    gamePlay()
  })
}

blueBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'blue'
    colorSelected.classList.add(`${colorChooser}`)
    gamePlay()
  })
})

greenBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'green'
    colorSelected.classList.add(`${colorChooser}`)
    gamePlay()
  })
})
yellowBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'yellow'
    colorSelected.classList.add(`${colorChooser}`)
    gamePlay()
  })
})
orangeBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'orange'
    colorSelected.classList.add(`${colorChooser}`)
    gamePlay()
  })
})

tiles.forEach((el) => {
  button.addEventListener('click', () => {
    el.classList.remove('blue')
    el.classList.remove('red')
    el.classList.remove('green')
    el.classList.remove('orange')
    el.classList.remove('yellow')
  })
})

button.addEventListener('click', () => {
  redTilesMatch = []
  blueTilesMatch = []
  greenTilesMatch = []
  yellowTilesMatch = []
  colorSelected.classList.remove(`${colorChooser}`)
})
