const searchBar = document.getElementById('search_Bar');
const addTodo = document.getElementById('addTodo');
const ulTodoContainer = document.getElementById('todoContainer');

const todos = [];
let inputTodotext = '';

const searchBarTextFn = (e) => {
    inputTodotext = e.target.value;
    submitTodo(inputTodotext);
    e.target.value = '';
}




const submitTodo = (data) => {

    if (data.length < 1) {
        alert('Please enter some Todo');
        return false;
    }
    else {

        const li = document.createElement('li')

        li.classList.add('todo');
        todos.push(data);
        localStorage.setItem('todos', todos)

        console.log(localStorage.getItem('todos'), "HHH")
        todos.forEach((todo) => {
            li.innerHTML = localStorage.getItem('todos');
        })

        ulTodoContainer.appendChild(li);
    }


}

searchBar.addEventListener('change', searchBarTextFn)

addTodo.addEventListener('submit', submitTodo)