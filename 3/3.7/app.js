let title = document.querySelector("h1");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .then((data) => {
      title.innerText = data.id;
    })
    .catch((err) => console.log(err));
});
