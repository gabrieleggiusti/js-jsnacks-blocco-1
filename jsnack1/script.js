// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore

const primoNumero = prompt('insirisci il primo numero');
const secondoNumero = prompt('inserisci il secondo numero');
const output = document.querySelector('h1');

if (primoNumero > secondoNumero){
  output.innerHTML='Il primo numero è più grande';
} else if(primoNumero < secondoNumero){
  output.innerHTML='Il secondo numero è più grande';
} else{
  output.innerHTML='I due numeri sono uguali';
}
