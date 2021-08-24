document.addEventListener("DOMContentLoaded", () => {

/* Den foerste linje laver en nodelist af alle elementer med class .box. 
derefter er der en foreach loekke, som tilfoejer eventlistener
til hver enkelte item.
Eventlisteneren er et click event, som starter en funktion der giver
elementet style.display = 'none' */

// oprindelig kode
  // document.querySelectorAll(".box").forEach((item) => {
  //   item.addEventListener("click", cssSelector = () => {
  //     item.style.display = "none";
  //   });
  // });
  function skjulElementViaCssSelector(cssSelector){
    let element = document.querySelector(cssSelector);
    if(element){
      element.style.display = "none";
    }
    console.log(cssSelector);
  }
  // skjulElementViaCssSelector("#news")
  skjulElementViaCssSelector(".container, .article, .MAIN")
  // skjulElementViaCssSelector("p")

});
