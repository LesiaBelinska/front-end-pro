"use strict";

const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", function () {
    const taskInput = document.querySelector("#new-task");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newTask = document.createElement("li");
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        newTask.textContent = taskText;
        newTask.appendChild(deleteButton);
        document.querySelector("#task-list").appendChild(newTask);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-button")) {
        event.target.parentElement.remove();
    }
});
