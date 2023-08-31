/*
    Pari e Dispari
    L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
    Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). 
    Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.
*/


//Definisco le funzioni di cui ho bisogno
/**
 * ### randomNumberGenerator
 * @returns {number} This function returns a random value from 1 to 5;
 */
function randomNumberGenerator() {
    return Math.floor(Math.random() * 5) + 1;
}

/**
 * ### sumCalcolator
 * @param {number} num1 First Number
 * @param {number} num2 Second Number
 * @returns {number} Returns the sum of two numbers
 */
function sumCalcolator(num1, num2) {
    return num1 + num2;
}

/**
 * 
 * @param {number} number Number to be checked
 * @returns {boolean} Returns a boolean value: true if is even, false if is odd
 */
function isEven (number) {
    let result;

    if (number % 2 === 0) {
        result = true;
    } else {
        result = false;
    }

    return result
}

//Definisco i valori di cui ho bisogno
const bodyElement = document.querySelector('body');
const userChoiseElement = document.createElement('div');
const userNumberElement = document.createElement('div');
const computerNumberElement = document.createElement('div');
const resultElement = document.createElement('div');
let userChoise;
let userNumber;
let computerNumber;
let sum = 0;

//Richiedo all'utente un valore tra pari e dispari, continuo a chiederlielo finche' non viene inserito correttamente.
do {
    userChoise = prompt ('Scegli: pari o dispari?');
} while (userChoise.toLowerCase() !== 'pari' && userChoise.toLowerCase() !== 'dispari');

//Richiedo all'utente un valore tra 1 e 5, continuo a chiederlielo finche' non viene inserito correttamente.
do {
    userNumber = Number(prompt('Scegli un numero tra 1 e 5'));
} while (userNumber < 1 || userNumber > 5 || isNaN(userNumber));

//Eseguo i calcoli necessari
computerNumber = randomNumberGenerator();
sum = sumCalcolator(userNumber, computerNumber);

//Mostro il risultato sul DOM
bodyElement.append(userChoiseElement);
bodyElement.append(userNumberElement);
bodyElement.append(computerNumberElement);
bodyElement.append(resultElement);

userChoiseElement.append(`La scelta del giocatore e' stata: ${userChoise}`);
userNumberElement.append(`Il numero scelto dal giocatore e' stato: ${userNumber}`);
computerNumberElement.append(`Il numero scelto dal computer e' stato: ${computerNumber}`);

if (userChoise.toLowerCase() === 'pari') {
    if (isEven(sum)) {
        resultElement.append(`Ha vinto il giocatore!`);
    } else {
        resultElement.append(`Ha vinto il computer!`);
    }
} else {
    if (!isEven(sum)) {
        resultElement.append(`Ha vinto il giocatore!`);
    } else {
        resultElement.append(`Ha vinto il computer!`);
    }
}