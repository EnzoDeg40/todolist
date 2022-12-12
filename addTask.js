function updateCheckEventListener() {
    console.log("test1");
    let list = document.querySelectorAll('.todo-list-item');
    console.log(list)
    list.forEach(e => {
        // // Remove event listener to prevent multiple event listeners
        // e.removeEventListener('click', ()=>{});
        e.addEventListener('click', () => {
            console.log("test2");

            if (e.classList.contains("checked")){
                    e.classList.remove('checked');
                    let todos = JSON.parse(localStorage.getItem('todos'));
                    const index = Array.from(
                        e.parentElement.children
                      ).indexOf(e);
                    todos[index].active = true;
                    localStorage.setItem('todos', JSON.stringify(todos))
                } else {
                    e.classList.add('checked');
                    let todos = JSON.parse(localStorage.getItem('todos'));
                    const index = Array.from(
                        e.parentElement.children
                      ).indexOf(e);
                    todos[index].active = false;
                    localStorage.setItem('todos', JSON.stringify(todos))
            }
        })
    });
}

window.addEventListener('load', () => {
    displayTasks();
    updateAddListener();
})

function addTask(taskName){
    let task = {
        name: taskName,
        active: true
    }
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

    updateCheckEventListener()
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
    taskItem.innerHTML = task.name;
    taskItem.className = "todo-list-item"
    if (!task.active) {
        taskItem.className += " checked"
    }
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


