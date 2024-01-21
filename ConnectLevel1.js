let colorChooser = 'red'
const blockSelected = []

const colorSelected = document.querySelector('.color-selected')

const redBlock = document.querySelectorAll('.red')
const blueBlock = document.querySelectorAll('.blue')
const greenBlock = document.querySelectorAll('.green')
const yellowBlock = document.querySelectorAll('.yellow')
const orangeBlock = document.querySelectorAll('.orange')
const tiles = document.querySelectorAll('.block')
const button = document.querySelector('button')

const redTilesMatch = []
const blueTilesMatch = []
const greenTilesMatch = []
const yellowTilesMatch = []
const orangeTilesMatch = []

const winCondition = () => {
  if (
    redTilesMatch.length === 4 &&
    blueTilesMatch.length === 3 &&
    yellowTilesMatch.length === 2 &&
    orangeTilesMatch.length === 3 &&
    greenTilesMatch.length === 3
  ) {
    alert('you have won')
  }
}

const gamePlay = () => {
  for (i = 0; i < tiles.length; i++)
    tiles[i].addEventListener('click', (e) => {
      if (e.target.classList.contains('red')) return
      else if (e.target.classList.contains('blue')) return
      else if (e.target.classList.contains('green')) return
      else if (e.target.classList.contains('yellow')) return
      else if (e.target.classList.contains('orange')) return

      e.target.classList.add(`${colorChooser}`)

      if (e.target.classList.contains('red')) {
        redTilesMatch.push(1)
        console.log(redTilesMatch)
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
    console.log(colorChooser)
    gamePlay()
  })
}

blueBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorSelected.classList.remove(`${colorChooser}`)
    colorChooser = 'blue'
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
button.addEventListener('click', () => {
  redBlock[1].classList.remove('red')
})
