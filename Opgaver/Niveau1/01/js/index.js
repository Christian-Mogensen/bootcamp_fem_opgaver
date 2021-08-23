document.addEventListener("DOMContentLoaded", () => {
// variable der tager fat i knappen i DOM'en
  let btn = document.querySelector("#my-button");
// array hvor hex-koderne er gemt
  let color = ["#7f7", "#eee"];
// index nulstilles
  let colorCount = 0;

// vi tilfoejer en eventlistener, som er et click-event, som kalder en anonym function
  btn.addEventListener("click", () => {
// index bliver opdateret med 1
    colorCount++;
// betingelse, som kigger index og om hvorvidt det er 0 eller 1
    if (colorCount === color.length) {
// hvis index er mere end 0, nulstil den
      colorCount = 0;
    }
// Vi opdatere baggrundsfarven, og goer den til array placeringens hex-kode
    btn.style.background = color[colorCount];
  });
});
