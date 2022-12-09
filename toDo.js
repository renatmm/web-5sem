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

    li.className ='li';
    li.textContent = value;


    btn.className ='btn-rem';
    btn.textContent = 'delete';
    li.appendChild(btn);

    // remove todo
    btn.addEventListener('click', (e) => {
        result.removeChild(li);
    })

    // toggle class active
    li.addEventListener('click', (e) => {
        li.classList.toggle('li-active')
    })

    result.appendChild(li);
}