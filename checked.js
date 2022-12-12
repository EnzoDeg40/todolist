function updateAddListener(){
    let list = document.querySelectorAll('.todo-list-item');
    list.forEach(e => {
        // Remove event listener to prevent multiple event listeners
        e.removeEventListener('click', ()=>{});

        e.addEventListener('click', () => {
            e.classList.toggle('checked');
        });

        e.addEventListener('dblclick', () => {
            e.innerHTML = `<input class="tempInput" type="text" value="${e.innerHTML}">`;
            let edit = document.querySelector('.tempInput');
            let tasks = getLocalStorageTasks();
            let index = tasks.findIndex(task => task === edit.value);
            e.addEventListener('keypress', function(el) {
                if(el.keyCode === 13){
                    tasks[index] = edit.value;
                    localStorage.setItem('todos', JSON.stringify(tasks));
                    location.reload();
                }
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', ()=>{
    let input = document.querySelector('.new-todo');
    
    input.addEventListener('keypress', function(e) {
        if(e.keyCode === 13){
            updateAddListener();
        }
    });
})