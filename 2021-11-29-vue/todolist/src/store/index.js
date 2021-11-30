import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      { id: 1, title: "foo", completed: false },
      { id: 2, title: "bar", completed: true },
    ],
  },
  getters: {
    numIncomplete(state) {
      return state.todos.filter((t) => !t.completed).length;
    },
  },
  mutations: {
    addTodo: function (state, payload) {
      let maxId = 0;
      for (let todo of state.todos) {
        maxId = Math.max(maxId, todo.id);
      }
      const newTodo = { id: maxId + 1, title: payload.title, completed: false };
      state.todos.push(newTodo);
    },
    toggleTodo: function (state, payload) {
      for (let todo of state.todos) {
        if (todo.id === payload.id) {
          todo.completed = !todo.completed;
        }
      }
    },
    deleteTodo: function (state, payload) {
      const index = state.todos.findIndex(
        // "Detektorfunktion" - gibt true zurück,
        // wenn der entsprechende Eintrag gefunden wurde
        (todo) => todo.id === payload.id
      );
      state.todos.splice(index, 1);
    },
    receiveTodos: function (state, payload) {
      state.todos = payload.todos;
    },
  },
  actions: {
    async loadFromApi(context) {
      const res = await fetch("https://jsonplaceholder.typicode.com/todos");
      const todos = await res.json();
      context.commit("receiveTodos", { todos: todos });
    },
  },
  modules: {},
});
