document.addEventListener('DOMContentLoaded', ()=>{
    var list = document.querySelectorAll('li');

    list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'li') {
        ev.target.classList.toggle('checked');
    }
}, false);
})