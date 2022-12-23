const input = document.querySelector('#input');
const btn = document.querySelector('#btn');
const result = document.querySelector('#result');
const total = document.querySelector('#total');

btn.addEventListener('click', (e) => {
    if (input.value === '') return
    createDeleteElements(input.value);
    input.value = '';
})

// create an delete todo
function createDeleteElements(value) {
    const li = document.createElement('li');
    const btn = document.createElement('button');
    let todos;
    li.className ='li';
    li.textContent = value;


    btn.className ='btn-rem';
    btn.textContent = 'delete';
    li.appendChild(btn);
    toLocal();

    // remove todo
    btn.addEventListener('click', (e) => {
        result.removeChild(li);
        toLocal();
    })

    // toggle class active
    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
        toLocal();
    })

    result.appendChild(li);    
}

function toLocal(){
    todos = result.innerHTML;
    localStorage.setItem("todos", todos);
}

if (localStorage.getItem("todos")) {
    result.innerHTML = localStorage.getItem('todos');
}


