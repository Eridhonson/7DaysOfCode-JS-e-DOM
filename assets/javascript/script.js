let nameId = window.document.getElementById('name')
let birthDate = window.document.getElementById('birth-date')

function calc() {
   document.getElementById('show').innerText = `${nameId.value} e ${birthDate.value}`
}
