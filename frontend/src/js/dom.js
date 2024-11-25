"use strict";

const taskList = document.querySelector("#task-list");

const renderTasks = (tasks) => {
  taskList.innerHTML = "";

  tasks.forEach((task) => {
    const newTask = `
      <li data-id=${task.id} class=${task.status ? "done" : ""}>
        <label>
          <input type="checkbox" class="task-input" ${task.status ? "checked" : ""
      } />
          ${task.text}
        </label>
        <button class="delete-button">Delete</button>
      </li>
      `;
    taskList.insertAdjacentHTML("beforeend", newTask);
  });
};

const notification = document.querySelector("#notification");

const showNotification = (message) => {
  notification.textContent = message;
  notification.classList.add("visible");

  clearTimeout(window.notificationTimeout);

  window.notificationTimeout = setTimeout(() => {
    notification.classList.remove("visible");
  }, 2000);
};

export { taskList, renderTasks, showNotification };
