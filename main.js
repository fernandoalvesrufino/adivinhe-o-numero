const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// Events
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', resetWithEnter)

// Functions
function handleTryClick(event) {
  event.preventDefault() // don't make the pattern, don't send the form

  const inputNumber = document.querySelector('#inputNumber')
  
  if (Number(inputNumber.value) === randomNumber) {
    toggleScreen()
    screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas!`
  } else if (inputNumber.value == "" || Number(inputNumber.value) < 0 || Number(inputNumber.value) > 10) {
    screen1.querySelector("p").innerText = `Valor inválido! Informe um número entre 0 e 10`
    screen1.querySelector("p").classList.add('red')
    inputNumber.value = ""
  } else {
    inputNumber.value = ""
    xAttempts ++
    screen1.querySelector("p").innerText = `Adivinhe um número entre 0 e 10`
    screen1.querySelector("p").classList.remove('red')
  }
}

function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  randomNumber = Math.round(Math.random() * 10)
  inputNumber.value = ""
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function resetWithEnter(e) {
  if(e.key == 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}