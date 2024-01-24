let colorChooser = 'blank'
const blockSelected = []

const redBlock = document.querySelectorAll('.main-red')
const blueBlock = document.querySelectorAll('.main-blue')
const aquaBlock = document.querySelectorAll('.main-aqua')
const greenBlock = document.querySelectorAll('.main-green')
const yellowBlock = document.querySelectorAll('.main-yellow')
const orangeBlock = document.querySelectorAll('.main-orange')
const magentaBlock = document.querySelectorAll('.main-magenta')
const colorSelected = document.querySelector('.color-selected')

const tiles = document.querySelectorAll('.block')
const button = document.querySelector('button')
const a = document.querySelectorAll('a')
const li = document.querySelectorAll('li')
const ul = document.querySelector('ul')

let redTilesMatch = []
let aquaTilesMatch = []
let greenTilesMatch = []
let yellowTilesMatch = []
let orangeTilesMatch = []
let magentaTilesMatch = []
let blueTilesMatch = []

const winCondition = () => {
  if (
    redTilesMatch.length === 1 && // 1 25 3 12 20 2 4
    aquaTilesMatch.length === 1 &&
    yellowTilesMatch.length === 1 &&
    orangeTilesMatch.length === 1 &&
    greenTilesMatch.length === 1 &&
    magentaTilesMatch.length === 1 &&
    blueTilesMatch.length === 1
  ) {
    alert('you have won')
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
        e.target.classList.contains('aqua') ||
        e.target.classList.contains('main-aqua')
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
      else if (
        e.target.classList.contains('magenta') ||
        e.target.classList.contains('main-magenta')
      )
        return
      else if (
        e.target.classList.contains('blue') ||
        e.target.classList.contains('main-blue')
      )
        return
      e.target.classList.add(`${colorChooser}`)

      if (e.target.classList.contains('red')) {
        redTilesMatch.push(1)
        winCondition()
      } else if (e.target.classList.contains('aqua')) {
        aquaTilesMatch.push(1)
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
      } else if (e.target.classList.contains('magenta')) {
        magentaTilesMatch.push(1)
        winCondition()
      } else if (e.target.classList.contains('blue')) {
        blueTilesMatch.push(1)
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

aquaBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'aqua'
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
magentaBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'magenta'
    colorSelected.classList.add(`${colorChooser}`)
    gamePlay()
  })
})

blueBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'blue'
    colorSelected.classList.add(`${colorChooser}`)
    gamePlay()
  })
})

tiles.forEach((el) => {
  button.addEventListener('click', () => {
    el.classList.remove('aqua')
    el.classList.remove('red')
    el.classList.remove('green')
    el.classList.remove('orange')
    el.classList.remove('yellow')
    el.classList.remove('magenta')
    el.classList.remove('blue')
  })
})

button.addEventListener('click', () => {
  console.log('hello')
  redTilesMatch = []
  aquaTilesMatch = []
  greenTilesMatch = []
  yellowTilesMatch = []
  orangeTilesMatch = []
  magentaTilesMatch = []
  blueTilesMatch = []
  colorSelected.classList.remove(`${colorChooser}`)
})
