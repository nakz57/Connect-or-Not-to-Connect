let colorChooser = 'blank'
const blockSelected = []

const redBlock = document.querySelectorAll('.main-red')
const aquaBlock = document.querySelectorAll('.main-aqua')
const greenBlock = document.querySelectorAll('.main-green')
const yellowBlock = document.querySelectorAll('.main-yellow')
const orangeBlock = document.querySelectorAll('.main-orange')
const magentaBlock = document.querySelectorAll('.main-magenta')
const colorSelected = document.querySelector('.color-selected')

const tiles = document.querySelectorAll('.block')
const button = document.querySelector('button')
const a = document.querySelectorAll('a')

let redTilesMatch = []
let aquaTilesMatch = []
let greenTilesMatch = []
let yellowTilesMatch = []
let orangeTilesMatch = []
let magentaTilesMatch = []

const winCondition = () => {
  //console.log(magentaTilesMatch.length)
  // console.log(magentaTilesMatch)
  if (
    redTilesMatch.length === 5 &&
    aquaTilesMatch.length === 11 &&
    yellowTilesMatch.length === 1 &&
    orangeTilesMatch.length === 1 &&
    greenTilesMatch.length === 1 &&
    magentaTilesMatch.length === 5
  ) {
    alert('you have won')
    a[2].setAttribute('href', 'ConnectedLevel3.html')
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

      e.target.classList.add(`${colorChooser}`)

      if (e.target.classList.contains('red')) {
        redTilesMatch.push(1)
        console.log(redTilesMatch)
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
    console.log(colorChooser)
    gamePlay()
  })
})

greenBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'green'
    colorSelected.classList.add(`${colorChooser}`)
    console.log(colorChooser)
    gamePlay()
  })
})
yellowBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'yellow'
    colorSelected.classList.add(`${colorChooser}`)
    console.log(colorChooser)
    gamePlay()
  })
})
orangeBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'orange'
    colorSelected.classList.add(`${colorChooser}`)
    console.log(colorChooser)
    gamePlay()
  })
})
magentaBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'magenta'
    colorSelected.classList.add(`${colorChooser}`)
    console.log(colorChooser)
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
  })
})

button.addEventListener('click', () => {
  console.log('hello')
  redTilesMatch = []
  blueTilesMatch = []
  greenTilesMatch = []
  yellowTilesMatch = []
  orangeTilesMatch = []
  magentaTilesMatch = []
  console.log(redTilesMatch.length)
  colorSelected.classList.remove(`${colorChooser}`)
})
