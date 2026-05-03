let title = document.querySelector("h1");
let button = document.querySelector("button");

title.innerText = "Hello World";

button.addEventListener("click", function () {
  title.innerText = "Button Clicked";
  title.classList.toggle("red");
});
