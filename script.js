let colorChooser = 'blank'
const blockSelected = []

const redBlock = document.querySelectorAll('.red')
const blueBlock = document.querySelectorAll('.blue')
const greenBlock = document.querySelectorAll('.green')
const yellowBlock = document.querySelectorAll('.yellow')
const orangeBlock = document.querySelectorAll('.orange')
const tiles = document.querySelectorAll('.block')

const redTiles = [
  tiles[5].classList.contains('red'),
  tiles[10].classList.contains('red'),
  tiles[15].classList.contains('red'),
  tiles[20].classList.contains('red')
]

const redTilesMatch = []
const winningCondition = () => {
  if (redTilesMatch.length === 4) {
    console.log('red complete')
  }
}

console.log(redTiles)

redTiles.forEach((el) => {})

// redTiles.forEach((el) => {
//   if (redTiles[el].classList.obtains('red')) {
//     redTilesMatch.push(1)
//   }
// })

for (i = 0; i < redTiles.length; i++) {
  if (redTiles[i] === true) {
    redTilesMatch.push(1)
    console.log(redTilesMatch)
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
      for (i = 0; i < redTiles.length; i++) {
        if (redTiles[i] === true) {
          redTilesMatch.push(1)
          console.log(redTilesMatch)
        }
      }
      winningCondition()
    })
}

for (i = 0; i < redBlock.length; i++) {
  redBlock[i].addEventListener('click', () => {
    colorChooser = 'red'
    console.log(colorChooser)
    gamePlay()
  })
}

blueBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'blue'
    console.log(colorChooser)
    gamePlay()
  })
})

greenBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'green'
    console.log(colorChooser)
    gamePlay()
  })
})
yellowBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'yellow'
    console.log(colorChooser)
    gamePlay()
  })
})
orangeBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'orange'
    console.log(colorChooser)
    gamePlay()
  })
})
