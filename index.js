"use strict";

const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");
const taskInput = document.querySelector("#new-task");

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

const renderTasks = () => {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        const newTask = `
      <li class="${task.done ? "done" : ""}">
        <label>
          <input type="checkbox" class="task-input" ${task.done ? "checked" : ""
            } />
          ${task.text}
        </label>
        <button class="delete-button">Delete</button>
      </li>
    `;

        taskList.insertAdjacentHTML("beforeend", newTask);
    });
};

const addTask = () => {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        tasks.push({ text: taskText, done: false });
        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
        taskInput.value = "";
    }
};

const toggleTaskDone = (event) => {
    if (event.target.classList.contains("task-input")) {
        const taskIndex = Array.from(taskList.children).indexOf(
            event.target.closest("li")
        );

        tasks[taskIndex].done = !tasks[taskIndex].done;
        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
    }
};

const deleteTask = (event) => {
    if (event.target.classList.contains("delete-button")) {
        const taskItem = event.target.parentElement;
        const taskIndex = Array.from(taskList.children).indexOf(taskItem);

        tasks.splice(taskIndex, 1);
        localStorage.setItem("tasks", JSON.stringify(tasks));

        renderTasks();
    }
};

renderTasks();

addTaskButton.addEventListener("click", addTask);
taskList.addEventListener("change", toggleTaskDone);
taskList.addEventListener("click", deleteTask);
