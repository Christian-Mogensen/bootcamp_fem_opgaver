document.addEventListener("DOMContentLoaded", () => {
// Variabler, der tager fat i dom-element, hvor resulterne skal printes ud.
// opg1 variable
  let resultat = document.querySelector("#result");
// opg2 variable
  let resultatTwo = document.querySelector("#resultTwo");

// function t. opg1
  function beregnForhold(a, b) {
// parameter a bliver divideret med b og printet ud i dom'en med textcontent
    resultat.textContent = a / b;
  }
// functionen bliver kaldt med argumenterne 4, 3
  beregnForhold(4, 3);
// resultatet bliver vist i konsollen
  console.log(resultat);

// opg2 - function t. opgave, kopiering af foregaaende opg
  function beregnForhold2(a, b) {
// betingelse, som siger at b ikke er 0
    if (b != 0) {
// resultatet skal printes ud
      return (resultatTwo.textContent = a / b);
    }
// betingelse, som tjekker om argumentet er 0
    if (b === 0) {
// resultatet printes ud med strengen "null", som fejlmeddelse
      return (resultatTwo.textContent = "null");
    }
  }
// functionen bliver kaldt med argumenterne 4, 0.
  beregnForhold2(4, 0);
// Resultat bliver vist i konsolen
  console.log(resultatTwo);
});
