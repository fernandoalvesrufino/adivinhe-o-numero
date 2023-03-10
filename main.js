const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
let randomNumber = Math.round(Math.random() * 10)

let xAttempts = 1

// Callback functions
function handleTryClick(event) {
  event.preventDefault() // don't make the pattern, don't send the form

  const inputNumber = document.querySelector('#inputNumber')
  
  if (Number(inputNumber.value) === randomNumber) {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
    randomNumber = Math.round(Math.random() * 10)
  }
  
  document.querySelector(".screen2 h2").innerText = `Acertou em ${xAttempts} tentativas!`
  
  inputNumber.value = ""
  xAttempts ++
}


// Events
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")


btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', function() {
  // window.location.reload()
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  xAttempts = 1
})