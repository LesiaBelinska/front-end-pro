import { getTodos, createTodo, updateTodo, deleteTodo } from "./api.js";
import { renderTasks, showNotification } from "./dom.js";

let tasks = [];

const loadAndRenderTasks = async () => {
  tasks = await getTodos();
  renderTasks(tasks);
};

const addTask = async (taskInput) => {
  const taskText = taskInput.value.trim();

  if (taskText !== "") {
    const newTask = await createTodo({ text: taskText, status: false });
    tasks.push(newTask);
    renderTasks(tasks);
    taskInput.value = "";
  }
};

const toggleTaskDone = async (event) => {
  if (event.target.classList.contains("task-input")) {
    const taskElement = event.target.closest("li");
    const taskId = +taskElement.dataset.id;

    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }

    const updatedStatus = !task.status;

    try {
      await updateTodo(taskId, { status: updatedStatus }); 
      task.status = updatedStatus;
      renderTasks(tasks);
      showNotification(
        `Task "${task.text}" marked as ${updatedStatus ? "done" : "not done"}.`
      );
    } catch (error) {
      console.error("Failed to update task status", error);
      showNotification("Failed to update task status. Please try again.");
    }
  }
};

const deleteTaskHandler = async (event) => {
  if (event.target.classList.contains("delete-button")) {
    const taskElement = event.target.closest("li");
    const taskId = +taskElement.dataset.id;

    const task = tasks.find((t) => t.id === taskId);
    if (!task) {
      console.error(`Task with ID ${taskId} not found.`);
      return;
    }

    try {
      await deleteTodo(taskId);
      tasks = tasks.filter((t) => t.id !== taskId);
      renderTasks(tasks);
      showNotification(`Task "${task.text}" deleted.`);
    } catch (error) {
      console.error("Failed to delete task", error);
      showNotification("Failed to delete task. Please try again.");
    }
  }
};

export { loadAndRenderTasks, addTask, toggleTaskDone, deleteTaskHandler };
