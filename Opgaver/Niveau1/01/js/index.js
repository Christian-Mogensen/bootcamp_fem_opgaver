document.addEventListener("DOMContentLoaded", () => {
  let btn = document.querySelector("#my-button");
  let color = ["#7f7", "#eee"];
  let colorCount = 0;
  btn.addEventListener("click", () =>{
    colorCount++;
    if(colorCount ===  color.length){
        colorCount = 0;
    }
    btn.style.background = color[colorCount];
  });

});
