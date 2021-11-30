<template>
  <li>
    {{ todo.completed ? "DONE: " : "TODO: " }}
    {{ todo.title }}
    <v-btn @click="$emit('toggle', todo.id)" color="secondary">toggle</v-btn>
    <v-btn @click="$emit('delete', todo.id)" color="secondary">delete</v-btn>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  props: ["todo"],
  // events: ["toggle", "delete"],
};
</script>

<style scoped></style>
