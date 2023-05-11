// Function with switch case to push inputs to buffer. Doesn't currently work.
function pushToInputBuffers() {
  const buttons = document.getElementsByClassName('button')
  const newInputBuffer = []
  for (const button of buttons) {
    button.addEventListener('click', function() {
      const buttonClass = button.classList
      let numberBuffer = []
      let number
      let operator

      switch (true) {
        case buttonClass.contains('number'):
          newInputBuffer.push(button.innerHTML)
          numberBuffer = newInputBuffer.join('')
          number = parseFloat(numberBuffer)
          console.log(number)
          return number
        case buttonClass.contains('operator'):
          operator = button.innerHTML
          console.log(operator)
          return operator
      }
    }
    )
  }
}
pushToInputBuffers()