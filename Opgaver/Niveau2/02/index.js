// "DOMContentLoaded" event'en sørger for, at Javascriptet først kører når hele HTML dokumentet er indlæst
document.addEventListener("DOMContentLoaded", () => {

  const articleNodelist = document.querySelectorAll(".card");
  const articleArray = Array.from(articleNodelist);
  let textCountElement = document.querySelector(".card__counter");
  let plusButton = document.querySelector(".btn-count-increase");
  let minusButton = document.querySelector(".btn-count-decrease");
  let startNumber = 0;
  let number = startNumber;
  let minimum = 0;
  let maximum = 15;

  function articleIndicator(event) {

    articleArray.forEach((item) => {
      item.addEventListener("click", () => {



        // const btnNodelist = document.querySelectorAll("button");
        // const btnArray = Array.from(btnNodelist);
        // btnArray.forEach((itemBtn) => {
        //   itemBtn.addEventListener("click", () => {
        //     function updateNumber() {
        //       textCountElement.textContent = number;
        //     }
        //     updateNumber();

            function updateNumber() {
              textCountElement.textContent = number;
            }
            updateNumber();

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
            plusButton.addEventListener("click", (event) => calcNumber("inc"));

            minusButton.addEventListener("click", (event) => calcNumber("dec"));
          // });
        // });
      });
    });
  }
  articleIndicator();

}); // Afslutter: DOMContentLoaded
