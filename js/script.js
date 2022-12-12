const formInput = document.querySelector('.new-todo');
const todoSection = document.querySelector('.todos');

window.addEventListener('load', () => {
    displayTodos()
    
})

formInput.addEventListener('keypress', (e) => {
    if (e.key === "Enter") {
        let todos;
        if(JSON.parse(localStorage.getItem('todos')) !== null) {
            todos = JSON.parse(localStorage.getItem('todos'));
            todos = [...todos, formInput.value];
        } else {
            todos = [formInput.value];
        }
        localStorage.setItem('todos', JSON.stringify(todos))
        displayTodos()

        formInput.value = ''
        
        // console.log(JSON.parse(localStorage.getItem('todos')));
        // localStorage.clear();
    }
})



function displayTodos() {
    if (JSON.parse(localStorage.getItem('todos')) !== null) {
        
        removeAllChildNodes(todoSection)
        
        const todos = JSON.parse(localStorage.getItem('todos'))
        
        for (let i = 0; todos.length > i; i++) {
            // console.log('test');
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo-ctn')
            todoDiv.innerHTML = todos[i];
            const deleteBtn = document.createElement('div')
            deleteBtn.classList.add('delete-btn')
            deleteBtn.innerHTML = 'X'
            deleteBtn.dataset.index = i;
            todoDiv.appendChild(deleteBtn);
            todoSection.appendChild(todoDiv);
        }


        // console.log(todoSection);
        // console.log(todos);
    }

    const deleteBtn = document.querySelectorAll('.delete-btn')
    // console.log(deleteBtn);
    deleteBtn.forEach((item) => {
           item.addEventListener('click', (e) => {
            const todos = JSON.parse(localStorage.getItem('todos'));
            console.log(todos);
            todoIndex = e.target.dataset.index
            todos.splice(todoIndex, 1);
            console.log(todos);
            localStorage.setItem('todos', JSON.stringify(todos))
            displayTodos()
        })
    })
}

function removeTodo() {
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
