document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".box").forEach((item) => {
    item.addEventListener("click", (cssSelector) => {
      item.style.display = "none";
    });
  });
  
});
