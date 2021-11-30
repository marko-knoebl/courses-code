<!--

Tasks (Grundfunktionalität):
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
        <div>incomplete todos: {{ $store.getters.numIncomplete }}</div>
        <ul>
          <todo-item
            v-for="todo in $store.state.todos"
            :key="todo.id"
            :todo="todo"
            @toggle="$store.commit('toggleTodo', { id: todo.id })"
            @delete="deleteTodo($event)"
          />
        </ul>
        <stats />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AddTodo from "./components/AddTodo.vue";
import TodoItem from "./components/TodoItem.vue";
import Stats from "./components/Stats.vue";
export default {
  components: { TodoItem, AddTodo, Stats },
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
      this.$store.commit("toggleTodo", { id: id });
    },
    deleteTodo: function (id) {
      this.$store.commit("deleteTodo", { id: id });
    },
    addTodo: function (newTitle) {
      this.$store.commit("addTodo", { title: newTitle });
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
    todosVuex: function () {
      return this.$store.state.todos;
    },
    numIncomplete: function () {
      return this.$store.state.todos.filter((t) => !t.completed).length;
    },
  },
  async created() {
    this.$store.dispatch("loadFromApi");
  },
};
</script>
