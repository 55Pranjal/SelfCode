const input = document.querySelector("#taskInput");
const addBtn = document.querySelector("#addBtn");
const taskList = document.querySelector("#taskList");

let tasks = [];

const savedTasks = JSON.parse(localStorage.getItem("tasks"));

if (savedTasks) {
  tasks = savedTasks;
  renderTasks();
}

addBtn.addEventListener("click", () => {
  const task = input.value;
  tasks.push(task);

  saveTasks();
  renderTasks();
  input.value = "";
});

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function renderTasks() {
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerText = task;

    taskList.appendChild(li);

    const deleteBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });
    li.appendChild(deleteBtn);

    li.addEventListener("click", () => {
      li.classList.toggle("completed");
      saveTasks();
    });
  });
}
