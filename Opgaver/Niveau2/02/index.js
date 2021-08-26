// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {


  const articleNodelist = document.querySelectorAll(".card");
  const articleArray = Array.from(articleNodelist);
  let textCountElement = document.querySelector(".card__counter");
  let textCountElement2 = document.querySelector(".card__counter2");
  let textCountElement3 = document.querySelector(".card__counter3");
  let plusButton = document.querySelector(".btn-count-increase");
  let minusButton = document.querySelector(".btn-count-decrease");
  let plusButton2 = document.querySelector(".btn-count-increase2");
  let minusButton2 = document.querySelector(".btn-count-decrease2");
  let plusButton3 = document.querySelector(".btn-count-increase3");
  let minusButton3 = document.querySelector(".btn-count-decrease3");
  let startNumber = 0;
  let number = startNumber;
  let minimum = 0;
  let maximum = 15;




            function updateNumber() {
              textCountElement.textContent = number;
            }
            updateNumber();

            function updateNumber2() {
              textCountElement2.textContent = number;
            }
            updateNumber2();

            function updateNumber3() {
              textCountElement3.textContent = number;
            }
            updateNumber3();

            function calcNumber(direction) {
              if (direction === "inc" && number < maximum) {
                number++;
                updateNumber();
              }
              if (direction === "dec" && number > minimum) {
                number--;
                updateNumber();
              }
            }
            function calcNumber2(direction) {
              if (direction === "inc" && number < maximum) {
                number++;
                updateNumber2();
              }
              if (direction === "dec" && number > minimum) {
                number--;
                updateNumber2();
              }
            }
            function calcNumber3(direction) {
              if (direction === "inc" && number < maximum) {
                number++;
                updateNumber3();
              }
              if (direction === "dec" && number > minimum) {
                number--;
                updateNumber3();
              }
            }
            plusButton.addEventListener("click", (event) => calcNumber("inc"));

            minusButton.addEventListener("click", (event) => calcNumber("dec"));

            plusButton2.addEventListener("click", (event) => calcNumber2("inc"));

            minusButton2.addEventListener("click", (event) => calcNumber2("dec"));

            plusButton3.addEventListener("click", (event) => calcNumber3("inc"));

            minusButton3.addEventListener("click", (event) => calcNumber3("dec"));




}); // Afslutter: DOMContentLoaded
