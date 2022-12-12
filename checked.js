function updateAddListener(){
    let list = document.querySelectorAll('.todo-list-item');
    list.forEach(e => {
        // Remove event listener to prevent multiple event listeners
        e.removeEventListener('click', ()=>{});

        e.addEventListener('click', () => {
            e.classList.toggle('checked');
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
