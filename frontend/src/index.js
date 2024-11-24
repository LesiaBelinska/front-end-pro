"use strict";
import {
  loadAndRenderTasks,
  addTask,
  toggleTaskDone,
  deleteTaskHandler,
} from "./js/main.js";
import { taskList } from "./js/dom.js";

const addTaskButton = document.querySelector("#add-task");
const taskInput = document.querySelector("#new-task");

loadAndRenderTasks();

addTaskButton.addEventListener("click", () => addTask(taskInput));
taskList.addEventListener("change", toggleTaskDone);
taskList.addEventListener("click", deleteTaskHandler);
