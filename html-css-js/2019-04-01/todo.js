let todoData = [
  {
    id: 1,
    title: 'groceries',
    completed: false
  },
  {
    id: 2,
    title: "wake up",
    completed: true
  },
  {
    id: 3,
    title: "eat lunch",
    completed: false
  }
];

const todolist = document.getElementById('todolist');
const fetchbtn = document.getElementById('fetchbtn');
const newTodoInput = document.getElementById('new-todo-input');
const newTodoBtn = document.getElementById('new-todo-btn');
const saveTodosBtn = document.getElementById('savebtn');
const loadTodosBtn = document.getElementById('loadbtn');

// befülle #todolist mit obigen einträgen

function updateView() {
  // liste leeren
  todolist.innerHTML = '';
  for (let todo of todoData) {
    const todoElement = document.createElement('div');

    todoElement.addEventListener('click', () => {
      toggleTodo(todo.id);
    })

    todoElement.classList.add('todo');
    if (todo.completed) {
      todoElement.classList.add('completed')
    }
    if (todo.completed) {
      todoElement.innerHTML = 'DONE: ' + todo.title;
    } else {
      todoElement.innerHTML = 'TODO: ' + todo.title;
    }
    todolist.appendChild(todoElement)
  }
}
updateView()

function toggleTodo(id) {
  // umschalten eines Todos anhand eienr id
  const todoIndex = todoData.findIndex(
    todo => {
      return id === todo.id;
    }
  )

  // umschalten der daten und des UI

  const todo = todoData[todoIndex];
  todo.completed = !todo.completed;

  // passendes HTML-Element abfragen
  const todoElement = todolist.children[todoIndex];

  todoElement.classList.toggle('completed')
  if (todo.completed) {
    todoElement.innerHTML = 'DONE: ' + todo.title;
  } else {
    todoElement.innerHTML = 'TODO: ' + todo.title;
  }

}

function fetchTodos() {
  const url = 'https://jsonplaceholder.typicode.com/todos';
  fetch(url)
    // warten auf netzwerkantwort, beginnen, die antwort zu parsen
    .then((response) => { return response.json() })
    // warten auf geparstes ergebnis
    .then((data) => {
      todoData = data;
      updateView();
    })
}

fetchbtn.addEventListener('click', fetchTodos);

function onAddTodoClick(event) {
  // Inhalt des Input-Elements als neues Todo
  // hinzufügen
  event.preventDefault();
  const newTodoTitle = newTodoInput.value;
  addTodo(newTodoTitle);
  newTodoInput.value = '';
}

function addTodo(newTodoTitle) {
  // Daten aktualisieren
  todoData.push({
    id: todoData.length + 1,
    title: newTodoTitle,
    completed: false
  })

  // Ansicht aktualisieren
  const todoElement = document.createElement('div');

  // Kopie des Längenwertes
  const newTodoId = todoData.length;
  todoElement.addEventListener('click', () => {
    toggleTodo(newTodoId);
  })

  todoElement.classList.add('todo');
  todoElement.innerHTML = 'TODO: ' + newTodoTitle;
  todolist.appendChild(todoElement)
}

newTodoBtn.addEventListener('click', onAddTodoClick)

function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todoData))
}

saveTodosBtn.addEventListener('click', saveTodos);

function loadTodos() {
  const todoString = localStorage.getItem('todos');
  if (todoString !== null) {
    todoData = JSON.parse(todoString);
    updateView();
  }
}

loadTodosBtn.addEventListener('click', loadTodos);

loadTodos();

navigator.serviceWorker.register('todo-sw.js');
