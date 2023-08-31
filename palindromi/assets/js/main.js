/* 
    Palidroma
        Chiedere all’utente di inserire una parola Creare una funzione per capire se la parola inserita è palindroma
*/


/**
 * ###isPalindroma
 * > This function verify if a word is palindrome
 * @param {string} parola Stringa
 * @returns {boolean} It Returns a boolean value
 */
function isPalindroma(parola) {
    let reverseParola = '';
    let palindroma = false;

    for (let i = parola.length - 1; i >= 0; i--) {
        reverseParola += parola[i];
    }

    if (parola === reverseParola) {
        palindroma = true;
    }

    return palindroma;
}

//Definisco i valori di cui ho bisogno
const bodyElement = document.querySelector('body');
const userChoiseElement = document.createElement('div');
const userInput = prompt('Inserisci una parola');
let palindroma;

//Eseguo i calcoli
if (userInput !== null) {

    palindroma = isPalindroma(userInput);

    //Mostro in pagina il risultato
    bodyElement.append(userChoiseElement);
    userChoiseElement.append(`La parola inserita e' ${userInput} e`);

    if (palindroma) {
        userChoiseElement.append(`d e' palindroma!`);
    } else {
        userChoiseElement.append(` non e' palindroma!`);
    }

} else {
    userChoiseElement.innerHTML = 'Dato non inserito correttamente!';
}

