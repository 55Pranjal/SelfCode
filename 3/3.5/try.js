let title = document.querySelector("h1");
let button = document.querySelector("button");
let input = document.querySelector("input");
let button2 = document.querySelector("#button2");
let title2 = document.querySelector(".h2");
let list = document.querySelector("ul");
let paragraph = document.querySelector("p");

button.addEventListener("click", function () {
  title.innerText = "Button Clicked";
});

input.addEventListener("input", function (e) {
  title.innerText = e.target.value;
});

button2.addEventListener("click", function (e) {
  title2.innerText = "Form Submitted";
  e.preventDefault();
});

list.addEventListener("click", function (e) {
  paragraph.innerText = e.target.innerText;
});
