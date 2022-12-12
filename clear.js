document.addEventListener('DOMContentLoaded', ()=>{
    const clear = document.querySelector('.clear-completed');
    
    clear.addEventListener('click', ()=>{
        let listUnchecked = document.querySelector('.todo-list').querySelectorAll(':not(.checked)');
        //supprimer le localstorage
        localStorage.removeItem('todos');
        listUnchecked.forEach(e => {
            refreshTask(e.innerHTML);
        })
        //recharger la page
        location.reload();
    })
})

function refreshTask(task){
    let tasks = getLocalStorageTasks();

    if (tasks === null) {
        data = [];
        data.push(task);
        localStorage.setItem('todos', JSON.stringify(data))
    } else {
       tasks = [...tasks, task]
       localStorage.setItem('todos', JSON.stringify(tasks))
    }
}