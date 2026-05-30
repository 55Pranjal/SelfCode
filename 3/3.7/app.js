let title = document.querySelector("h1");
let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
      title.innerText = data.title;
    })
    .catch((err) => {
      console.log(err);
    });
});
