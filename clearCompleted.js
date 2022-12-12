window.addEventListener('load', () => {
    let clearCompletedBtn = document.querySelector('.clear-completed');
    let todoList = document.querySelector('.todo-list');
    
    clearCompletedBtn.addEventListener('click', () => {
        let todos = JSON.parse(localStorage.getItem('todos'));
        for (let a = 0; todos.length > a; a++) {
            if (!todos[a].active) {
                todos.splice(a, 1);
            }
        }
        localStorage.setItem('todos', JSON.stringify(todos))

        todoList.textContent = '';
        displayTasks();

    })
});