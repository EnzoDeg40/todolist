function modifyItem(){
    let list = document.querySelectorAll('.todo-list-item');
    list.forEach(e => {
        e.addEventListener('dblclick', () => {
            e.innerHTML = `<input type="text" value="${e.innerHTML}">`;
            let input = document.querySelector('input');
            input.addEventListener('keypress', function(e) {
                if(e.keyCode === 13){
                    e.target.parentNode.innerHTML = input.value;
                    modifyItem();
                }
            });
        });
    });
}