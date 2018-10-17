// Gleichheit

console.log(3 == '3');
console.log(3 === '3');

// Arrays

a = [1, 2, 'drei'];
console.log(a[2]);

a.push(4);
a.pop();

// Objekt

const todo = {
  title: 'shopping',
  completed: false,
  id: 1
};

console.log(todo.title);
console.log(todo['title']);

// Beispiel: Todos

const todos = [
  { title: 'shopping', completed: false, id: 1 },
  { title: 'taxes', completed: true, id: 2 },
  { title: 'cleaning', completed: false, id: 3 }
];

// element suchen

function findTodo(todoTitle) {
  return todos.find(todo => {
    return todo.title == todoTitle;
  });
}

console.log(findTodo('taxes'));

// .map

// erstelle ein Array mit allen Titeln, groß geschrieben
// ['SHOPPING', 'TAXES', 'CLEANING']

const modifiedTodos = todos.map(todo => todo.title.toUpperCase());

console.log(modifiedTodos);

// .filter

// erstelle ein Array mit unerledigten todos

const incompleteTodos = todos.filter(todo => !todo.completed);

console.log(incompleteTodos);

// Funktionsdeklaration

function multiply1(a, b) {
  return a * b;
}

const multiply2 = function(a, b) {
  return a * b;
};

const multiply3 = (a, b) => a * b;

const multiply4 = (a, b) => {
  const result = a * b;
  return result;
};

console.log(multiply1(2, 3));
console.log(multiply2(2, 3));
console.log(multiply3(2, 3));
console.log(multiply4(2, 3));
