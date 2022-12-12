window.addEventListener('load', () => {
    displayTasks();
    updateAddListener();
})

function addTask(task){
    let tasks = getLocalStorageTasks();
    let taskList = document.querySelector('.todo-list');

    displayOneTask(taskList, task)

    if (tasks === null) {
        data = [];
        data.push(task);
        localStorage.setItem('todos', JSON.stringify(data))
    } else {
       tasks = [...tasks, task]
       localStorage.setItem('todos', JSON.stringify(tasks))
    }

    document.querySelector('.new-todo').value = "";
}

function displayTasks() {
    let tasks = getLocalStorageTasks();

    if (tasks !== null) {
        let taskList = document.querySelector('.todo-list');
        for(let a = 0; tasks.length > a; a++) {
            displayOneTask(taskList, tasks[a])
        }
    }
}

function displayOneTask(taskList, task) {
    let taskItem = document.createElement("li");
            taskItem.innerHTML = task;
            taskItem.className = "todo-list-item"
            taskList.appendChild(taskItem);
}

function getLocalStorageTasks() {
    return JSON.parse(localStorage.getItem('todos'))
}


document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementsByClassName('new-todo')[0];

    input.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
        
            let task = input.value;

            if(task){
                addTask(task);
            }
        }
    });
});


