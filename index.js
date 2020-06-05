let ul = document.createElement('ul');
let input = document.createElement("input");
let addButton = document.createElement("button");
addButton.innerHTML = "Add";

let items = [];

if (localStorage.getItem('tasks')){
    items = JSON.parse(localStorage.getItem('tasks'));
    for (let i in items) {
       ul.insertAdjacentHTML('beforeend', `<li>${items[i]}</li>`);
    }
}

window.addEventListener('load', function() {
    document.body.appendChild(input);
    document.body.appendChild(document.createElement("br"));

    document.body.appendChild(addButton);
    document.body.appendChild(document.createElement("br"));

    document.getElementById('container').appendChild(ul);
});

addButton.addEventListener('click', function() {
    if (input.value.toString().length !== 0) {
        items.push(input.value);
        items.sort();

        localStorage.setItem('tasks', JSON.stringify(items));

        document.querySelectorAll('li').forEach((element) => { element.remove() });
        
        for (let i in items) {
            let list = document.createElement('li');
            list.innerHTML = items[i];
            document.querySelector('ul').appendChild(list);
        }

        input.value = '';
    }
});

input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        addButton.click();
    }
});