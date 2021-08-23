document.addEventListener("DOMContentLoaded", () => {
    
  let resultat = document.querySelector("#result");
  let resultatTwo = document.querySelector("#resultTwo");

  function beregnForhold(a, b) {
    resultat.textContent = a / b;
  }
  beregnForhold(4, 3);
  console.log(resultat);

  function beregnForhold2(a, b) {
    if (b != 0) {
      return (resultatTwo.textContent = a / b);
    }
    if (b === 0) {
      return (resultatTwo.textContent = "null");
    }
  }
  beregnForhold2(4, 0);
  console.log(resultatTwo);
});
