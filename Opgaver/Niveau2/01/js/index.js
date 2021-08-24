document.addEventListener("DOMContentLoaded", () => {
  // node list af knapperne
  const btnNodelist = document.querySelectorAll("#buttons button");
  // const btnArray = Array.from(btnNodelist);

  // function der tager fat i nodelist og 
  // ved hjaelp af foreach loekke. Giver
  // hvert nodelist item et klik event.
  // klikeventet starter en for loekke,
  // som giver nodelist itemene en graa farve,
  // Udenfor for loekke men inden i klik-eventet.
  // Aendrer vi knap farve til groen. 

  // function radioBtn() {
  //   btnNodelist.forEach((btn) => {
  //     btn.addEventListener("click", () => {
  //       for (let index = 0; index < btnNodelist.length; index++) {
  //         let btnReset = btnNodelist[index];
  //         btnReset.style.background = "#eee";
  //       }
  //       btn.style.background = "yellow";
  //     });
  //   });
  // }
  // radioBtn();

  let btnContainer = document.querySelector("#buttons");
  let btnReset = document.querySelectorAll("button")

  btnContainer.addEventListener("click", (e)=> {
    if(e.target.localName === "button"){
      btnReset.forEach(button => button.removeAttribute("style"));
      e.target.style.background = "yellow";
    }
  })
});
