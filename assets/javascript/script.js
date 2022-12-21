// Vincular uma função ao evento de submissão do formulário. A função vinculada deverá pegar o valor informado nos campos nome e data de nascimento e imprimi-lo.

let namePlace = window.document.getElementById('name')
let birthDate = window.document.getElementById('birth-date')

function calc() { 
   document.getElementById('show').innerHTML = `${namePlace.value} e ${birthDate.value}`
}
// namePlace.focus()
