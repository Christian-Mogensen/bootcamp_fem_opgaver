document.addEventListener("DOMContentLoaded", () => {
  // node list der bliver konverteret til array
  const btnNodelist = document.querySelectorAll("#buttons button");
  const btnArray = Array.from(btnNodelist);

  // function der tager fat i array og 
  // ved hjaelp af foreach loekke. Giver
  // hvert array item et klik event.
  // klikeventet starter en for loekke,
  // som giver array itemene en graa farve,
  // Udenfor for loekke men inden i klik-eventet.
  // Aendrer vi knap farve til groen. 
  function radioBtn() {
    btnArray.forEach((item) => {
      item.addEventListener("click", () => {
        for (let index = 0; index < btnArray.length; index++) {
          let btnReset = btnArray[index];
          btnReset.style.background = "#eee";
        }
        item.style.background = "green";
      });
    });
  }
  radioBtn();
});
