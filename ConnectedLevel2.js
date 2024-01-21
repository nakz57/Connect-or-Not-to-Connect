let colorChooser = 'blank'
const blockSelected = []

const redBlock = document.querySelectorAll('.red')
const aquaBlock = document.querySelectorAll('.aqua')
const greenBlock = document.querySelectorAll('.green')
const yellowBlock = document.querySelectorAll('.yellow')
const orangeBlock = document.querySelectorAll('.orange')
const magentaBlock = document.querySelectorAll('.magenta')
const tiles = document.querySelectorAll('.block')
const button = document.querySelector('button')

const redTilesMatch = []
const aquaTilesMatch = []
const greenTilesMatch = []
const yellowTilesMatch = []
const orangeTilesMatch = []
const magentaTilesMatch = []

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
  }
}

const gamePlay = () => {
  for (i = 0; i < tiles.length; i++)
    tiles[i].addEventListener('click', (e) => {
      if (e.target.classList.contains('red')) return
      else if (e.target.classList.contains('aqua')) return
      else if (e.target.classList.contains('green')) return
      else if (e.target.classList.contains('yellow')) return
      else if (e.target.classList.contains('orange')) return
      else if (e.target.classList.contains('magenta')) return

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
    colorChooser = 'red'
    console.log(colorChooser)
    gamePlay()
  })
}

aquaBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'aqua'
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
magentaBlock.forEach((el) => {
  el.addEventListener('click', () => {
    colorChooser = 'magenta'
    console.log(colorChooser)
    gamePlay()
  })
})
button.addEventListener('click', () => {
  location.reload()
})
