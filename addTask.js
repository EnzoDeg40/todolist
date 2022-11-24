function getTasks() {
  const taskListStorage = JSON.parse(localStorage.getItem("tasks"));
}
function addTask(task) {
  // création d'une div
  var taskList = document.querySelector(".todo-list");
  var defineDiv = document.createElement("div");
  defineDiv.classList.add("divTask");
  taskList.appendChild(defineDiv);
  //création li
  var taskItem = document.createElement("li");
  taskItem.classList.add("taskItem");
  console.log(taskItem);
  taskItem.innerHTML = task.name;
  defineDiv.appendChild(taskItem);

  // création bouton tâche en cours
  var progressTask = document.createElement("button");
  progressTask.classList.add("btn-progress");
  progressTask.innerHTML = "<i class='bi bi-tools'></i>";
  defineDiv.appendChild(progressTask);

  // création bouton fin de tâche
  var completedTask = document.createElement("button");
  completedTask.classList.add("btn-completed");
  completedTask.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>';
  defineDiv.appendChild(completedTask);

  saveLocalStorage(task);
  

  // Vide le champ de saisie
  document.querySelector(".new-todo").value = "";
}

function saveLocalStorage(todo) {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); // erreur valeur = 1 si je ne parse pas
  }
  todos.push(todo);
  localStorage.setItem("todos", JSON.stringify(todos));
}
function showTasksLocalstorage() {
  let todos;
  if (localStorage.getItem("todos") == null) {
    todos = [];
  } else {
    todos = JSON.parse(localStorage.getItem("todos")); // erreur valeur = 1 si je ne parse pas
  }
  todos.map((todo)=>{

      // création d'une div
      var taskList = document.querySelector(".todo-list");
      var defineDiv = document.createElement("div");
      defineDiv.classList.add("divTask");
      taskList.appendChild(defineDiv);
      //création li
      var taskItem = document.createElement("li");
      taskItem.classList.add("taskItem");
      console.log(taskItem);
      taskItem.innerHTML = todo.name;
      defineDiv.appendChild(taskItem);
    
      // création bouton tâche en cours
      var progressTask = document.createElement("button");
      progressTask.classList.add("btn-progress");
      progressTask.innerHTML = "<i class='bi bi-tools'></i>";
      defineDiv.appendChild(progressTask);
    
      // création bouton fin de tâche
      var completedTask = document.createElement("button");
      completedTask.classList.add("btn-completed");
      completedTask.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>';
      defineDiv.appendChild(completedTask);
    
      document.querySelector(".new-todo").value = "";
  })
}
document.addEventListener("DOMContentLoaded",showTasksLocalstorage())
document.addEventListener("DOMContentLoaded", () => {
  let input = document.getElementsByClassName("new-todo")[0];

  input.addEventListener("keypress", function (e) {
    if (e.keyCode === 13) {
      console.log("Enter was pressed");

      let task = input.value;
      const taskObject = {
          name:task,
          id:Date.now()
      }
      // const tasks = []
      // const newList=tasks.push(taskObject)
      // console.log(newList)
      // const taskObjectLocalStorage = localStorage.setItem("tasks",JSON.stringify(newList))
      // const tasksLocal= JSON.parse(localStorage.getItem("tasks"))

      // console.log(tasksLocal)

      addTask(taskObject);

      // const taskList = JSON.stringify(task)
      // if(localStorage == null){
      //     localStorage.setItem("task", taskList)
      //     addTask(taskList);

      // }else{
      //     const value =JSON.parse(localStorage.getItem("task"))
      //     console.log(value)
      //     addTask(value);
      // }
    }
  });
});
