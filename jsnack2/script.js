/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const primaParola = prompt('insirisci la prima parola');
const secondaParola = prompt('inserisci la seconda parola');
const output = document.querySelector('h1');

if (primaParola.length > secondaParola.length){
  output.innerHTML=`${primaParola} è più lunga di ${secondaParola}`;
} else if(primaParola.length < secondaParola.length){
  output.innerHTML=`${secondaParola} è più lunga di ${primaParola}`;
} else{
  output.innerHTML=`${primaParola} e ${secondaParola} sono lunghe uguali`;
}