document.getElementById("task-form").addEventListener("submit", function(event) {
    event.preventDefault();
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value;
    if (taskText !== "") {
      addTask(taskText);
      taskInput.value = "";
    }
  });
  
  function addTask(taskText) {
    var taskList = document.getElementById("task-list");
    var newTask = document.createElement("li");
    newTask.innerText = taskText;
    newTask.addEventListener("click", function() {
      this.classList.toggle("completed");
    });
    taskList.appendChild(newTask);
  }
  