document.addEventListener('DOMContentLoaded', ()=>{
    var input = document.querySelector('.new-todo');
    
    document.addEventListener('keypress', function(e) {
        if(e.keyCode === 13){
            var list = document.querySelectorAll('.todo-list-item');
            
            list.forEach(e => {
                e.addEventListener('click', ()=>{
                    e.classList.toggle('checked');
                })
            });
        }
    }) 
})