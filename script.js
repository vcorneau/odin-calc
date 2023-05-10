let buttons = document.getElementsByClassName('button')

function pushToInputBuffers() {
  const newInputBuffer = []
  let numberBuffer = []
  let number
  let operator

  switch (EventTarget.class) {
    case 'number':
      newInputBuffer.push(Element.innerHTML)
      numberBuffer = newInputBuffer.join('')
      number = parseFloat(numberBuffer)
      console.log(number)
      return number
    case 'operator':
      operator = Element.innerHTML
      console.log(operator)
      return operator
  }
}

for (let button of buttons) {
  button.addEventListener('click', pushToInputBuffers)
}
