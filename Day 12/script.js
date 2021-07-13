const input = document.querySelector('input')
const btn = document.querySelector('button')
const todolist = document.querySelector('.todolist')

const todos = [
    {
        title:"Entering your Daily Tasks",
        done: false
    },
    {
        title:"Don't Forget to achieve it!!!",
        done: false
    }
]

function loadTodo(){
    todos.map(todo =>{
        const newTodo = document.createElement('li');
        newTodo.innerHTML= todo.title;
        todolist.appendChild(newTodo)
    })
}

btn.addEventListener('click', () =>{
    const newTodo = document.createElement('li');
    newTodo.innerHTML= input.value;
    todolist.appendChild(newTodo)
    input.value = " "
})

const newTodo = localStorage.getItem("todos")
console.log(newTodo);