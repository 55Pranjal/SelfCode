const title = document.querySelector("#title");
const button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())

    .then((data) => {
      title.innerText = data.title;
    });
});
