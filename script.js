// Operation functions
function add(leftNumber, rightNumber) {
  return leftNumber + rightNumber
}
function sub(leftNumber, rightNumber) {
  return leftNumber - rightNumber;
}
function mult(leftNumber, rightNumber) {
  return leftNumber*rightNumber;
}
function div(leftNumber, rightNumber) {
  return leftNumber / rightNumber;

const buttons = document.getElementsByClassName('button')
const newInputBuffer = []
}

const buttons = document.getElementsByClassName('button')
let buttonClass = []
let newInputBuffer = []
let numberBuffer = []
let number


for (const button of buttons) {
  button.addEventListener('click', function() {
    buttonClass = button.classList
    console.log(buttonClass)
  })
}

switch (true) {
  case buttonClass.contains('number'):
    newInputBuffer.push(button.innerHTML)
    numberBuffer = newInputBuffer.join('')
    number = parseFloat(numberBuffer)
    console.log(number)
    break
  case buttonClass.contains('operator'):
    operator = button.innerHTML
    console.log(operator)
    break
  case buttonClass.contains('clear'):
    resetData
    console.log(number)
    break
}


