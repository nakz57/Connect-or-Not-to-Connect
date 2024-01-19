let colorChooser = 'blank'
const blockSelected = []

const redBlock = document.querySelectorAll('.red')
const blueBlock = document.querySelectorAll('.blue')
const greenBlock = document.querySelectorAll('.green')
const yellowBlock = document.querySelectorAll('.yellow')
const orangeBlock = document.querySelectorAll('.orange')
const tiles = document.querySelectorAll('.block')

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
    colorChooser = 'red'
    console.log(colorChooser)
    gamePlay()
    //winCondition()
  })
}

blueBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'blue'
    console.log(colorChooser)
    gamePlay()
    //winCondition()
  })
})

greenBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'green'
    console.log(colorChooser)
    gamePlay()
    //winCondition()
  })
})
yellowBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'yellow'
    console.log(colorChooser)
    gamePlay()
    //winCondition()
  })
})
orangeBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'orange'
    console.log(colorChooser)
    gamePlay()
    //winCondition()
  })
})
// redTiles.forEach((el) => {
//   if (redTiles[el].classList.obtains('red')) {
//     redTilesMatch.push(1)
//   }
// })

// for (i = 0; i < redTiles.length; i++) {
//   if (redTiles[i] === true) {
//     redTilesMatch.push(1)
//     console.log(redTilesMatch)
//   }
// }
