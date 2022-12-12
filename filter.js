document.addEventListener('DOMContentLoaded', ()=>{
    const activeButton = document.querySelector('.activeButton');
    const completedButton = document.querySelector('.completedButton');
    const allButton = document.querySelector('.allButton');

    activeButton.addEventListener('click', ()=>{
        activeButton.classList.add('selected');
        completedButton.classList.remove('selected');
        allButton.classList.remove('selected');
        let list = document.querySelectorAll('.todo-list-item');
        list.forEach(e => {
            if(e.classList.contains('checked')){
                e.style.display = "none";
            }
        })
    })
    completedButton.addEventListener('click', ()=>{
        activeButton.classList.remove('selected');
        completedButton.classList.add('selected');
        allButton.classList.remove('selected');
        let list = document.querySelectorAll('.todo-list-item');
        list.forEach(e => {
            if(!e.classList.contains('checked')){
                e.style.display = "none";
            }
        })
    })
    allButton.addEventListener('click', ()=>{
        activeButton.classList.remove('selected');
        completedButton.classList.remove('selected');
        allButton.classList.add('selected');
        let list = document.querySelectorAll('.todo-list-item');
        list.forEach(e => {
            e.style.display = "block";
        })
    })
})