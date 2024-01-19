let colorChooser = 'blank'
const blockSelected = []

const redBlock = document.querySelectorAll('.red')
const blueBlock = document.querySelectorAll('.blue')
const tiles = document.querySelectorAll('.block')

for (i = 0; i < 9; i++) {
  blockSelected.push(1)
} // add the number of blocks to the array

const gamePlay = () => {
  for (i = 0; i < tiles.length; i++)
    tiles[i].addEventListener('click', (e) => {
      if (e.target.classList.contains('red')) return
      else if (e.target.classList.contains('blue')) return
      e.target.classList.add(`${colorChooser}`)
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

// const T2 = document.querySelector('#T2')
// const T3 = document.querySelector('#T3')
// const T4 = document.querySelector('#T4')
// const T5 = document.querySelector('#T5')
// const T6 = document.querySelector('#T6')

//   T3.addEventListener('click', () => {
//     if (blockSelected[2] === 0) return
//     T3.classList.add(`${colorChooser}`)
//     blockSelected[2] = 0
//   })
//   T5.addEventListener('click', () => {
//     if (blockSelected[4] === 0) return
//     T5.classList.add(`${colorChooser}`)
//     blockSelected[4] = 0
//   })
//
