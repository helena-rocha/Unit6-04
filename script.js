let a = 0
let b = 0
let c = 0
let button = 0
document.getElementById('button').addEventListener('click', formula)

function formula () {
  a = document.getElementById('base-a').value
  b = document.getElementById('base-b').value
  c = document.getElementById('height').value

  a = parseInt(a)
  b = parseInt(b)
  c = parseInt(c)

  button = (a + b) / 2 * c

  alert(button)
}
