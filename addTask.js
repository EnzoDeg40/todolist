function addTask(task){
    var taskList = document.querySelector('.todo-list');
    var taskItem = document.createElement("li");
    taskItem.innerHTML = task;
    taskItem.className = "todo-list-item"
    taskList.appendChild(taskItem);

    // Vide le champ de saisie
    document.querySelector('.new-todo').value = "";
}


document.addEventListener("DOMContentLoaded", () => {
    let input = document.getElementsByClassName('new-todo')[0];

    input.addEventListener('keypress', function (e) {
        if (e.keyCode === 13) {
            console.log('Enter was pressed');
        
            let task = input.value;

            if(task){
                addTask(task);
            }
        }
    });
});


