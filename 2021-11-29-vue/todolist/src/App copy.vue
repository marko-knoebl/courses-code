<!--

TASKS (Grundfunktionalität):
+ Auflisten der TODOS mit Titel und Status
+ Button / Checkbox zum Umschalten eines Todos
+ Formular zum Hinzufügen eines Todos
+ Button zum Löschen eines Todos

Tasks (weitere):
- Vuex
- Styling
- Anzeigen der Anzahl an erledigten und
  nicht-erledigten Todos
- Filtermöglichkeiten (z.B. nach Status / oder nach Titel)
- Editiermöglichkeit für Titel
-->

<template>
  <v-app>
    <v-app-bar app>
      <v-toolbar-title>Todo</v-toolbar-title>
    </v-app-bar>
    <v-main>
      <v-container>
        <add-todo @addTodo="addTodo($event)" />
        <div>active todos: {{ numActive }}</div>
        <ul>
          <todo-item
            v-for="todo in todos"
            :key="todo.id"
            :todo="todo"
            @toggle="toggleTodo($event)"
            @delete="deleteTodo($event)"
          />
        </ul>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoItem from "./components/TodoItem.vue";
export default {
  components: { TodoItem, AddTodo },
  name: "TodoApp",
  data: function () {
    return {
      todos: [
        { id: 1, title: "foo", completed: false },
        { id: 2, title: "bar", completed: true },
      ],
    };
  },
  methods: {
    toggleTodo: function (id) {
      for (let todo of this.todos) {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
      }
    },
    deleteTodo: function (id) {
      const index = this.todos.findIndex(
        // "Detektorfunktion" - gibt true zurück,
        // wenn der entsprechende Eintrag gefunden wurde
        (todo) => todo.id === id
      );
      this.todos.splice(index, 1);
    },
    addTodo: function (newTitle) {
      let maxId = 0;
      for (let todo of this.todos) {
        maxId = Math.max(maxId, todo.id);
      }
      const newTodo = { id: maxId + 1, title: newTitle, completed: false };
      this.todos.push(newTodo);
    },
  },
  computed: {
    numActive: function () {
      let numActive = 0;
      for (let todo of this.todos) {
        if (!todo.completed) {
          numActive++;
        }
      }
      return numActive;
    },
  },
  async created() {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const todos = await res.json();
    this.todos = todos;
  },
};
</script>
