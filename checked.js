window.addEventListener('load', () => {
    let list = document.querySelectorAll('.todo-list-item');
    list.forEach(e => {
        // Remove event listener to prevent multiple event listeners
        e.removeEventListener('click', ()=>{});

        e.addEventListener('click', () => {
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
  
});

