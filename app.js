// Selectors
const todoInput = document.querySelector('.todo__input')
const todoButton = document.querySelector('.todo__button')
const todoList = document.querySelector('.todo__list')
const filterOption = document.querySelector('.filter-todo')

// Event Listeners

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodos)

// Functions

function addTodo(event) {
        event.preventDefault();
    //todo div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo")
    //create li
    const todoLi = document.createElement('li');
    todoLi.innerText = todoInput.value
    todoDiv.classList.add("todo__list-item")
    todoDiv.appendChild(todoLi)
    // checkmark button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn")
    todoDiv.appendChild(completedButton)
    // trash button
    const trashdButton = document.createElement('button');
    trashdButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashdButton.classList.add("trash-btn")
    todoDiv.appendChild(trashdButton)
    // append to list
    todoList.appendChild(todoDiv);
    // clear input value
    todoInput.value = ""
}

function deleteCheck(e) {
    const item = e.target
    //delete
    if(item.classList[0] === "trash-btn") {
        const todo = item.parentElement
        //animation
        todo.classList.add('fall')
        todo.addEventListener('transitionend', function() {
            todo.remove()
        });
    }

    //completed
    if(item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle('completed')
    }
}

function filterTodos(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch(e.target.value){
            case "all":
                todo.style.display = 'flex'
                break;
            case "completed":
                if(todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = "none"
                }
                break;
            case "uncompleted":
                if(!todo.classList.contains('completed')) {
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = "none"
                }
                break;
        }
    })
}