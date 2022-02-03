// input variabili
const userName = prompt("Qual è il tuo nome?")
console.log(userName)
const userSurname = prompt("Qual è il tuo cognome?")
console.log(userSurname)
const userColor = prompt("Qual è il tuo colore preferito?")
console.log(userColor)

// generazione psw
const psw = userName + userSurname + userColor + '21'

// const psw = `${userName}${userSurname}${userColor}21`

// generazione output
salut = document.getElementById("message").innerHTML
document.getElementById("message").innerHTML = salut + ' ' + userName + ', la tua password è: ' + psw

// document.getElementById("message").innerHTML += ` ${userName}, la tua password è: ${psw}`