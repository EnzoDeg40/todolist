function addTask(task){

    

    // création d'une div
    var taskList = document.querySelector('.todo-list');
    var defineDiv = document.createElement ("div")
    defineDiv.classList.add("divTask")
    taskList.appendChild(defineDiv)
    //création li
    var taskItem = document.createElement("li");
    taskItem.classList.add("taskItem")
    console.log( taskItem)
    taskItem.innerHTML = task;
    defineDiv.appendChild(taskItem);
    
    // création bouton tâche en cours
    var progressTask = document.createElement('button')
    progressTask.classList.add("btn-progress")
    progressTask.innerHTML = "<i class='bi bi-tools'></i>";
    defineDiv.appendChild(progressTask)
    
    // création bouton fin de tâche
    var completedTask = document.createElement('button')
    completedTask.classList.add("btn-completed")
    completedTask.innerHTML = '<i class="bi bi-hand-thumbs-up"></i>';
    defineDiv.appendChild(completedTask)

    // //création bouton supprimé une tâche
    // var deleteTask = document.createElement("button")
    // deleteTask.classList.add("btn-trash")
    // deleteTask.innerHTML='<i class="bi bi-trash"></i>'
    // defineDiv.appendChild(deleteTask)

    
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
