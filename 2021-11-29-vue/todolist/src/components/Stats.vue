<template>
  <div>
    <h1>Stats</h1>
    <p>incomplete todos: {{ numIncomplete }}</p>
  </div>
</template>

<script>
export default {
  name: "Stats",
  computed: {
    numIncomplete: function () {
      return this.$store.getters.numIncomplete;
    },
  },
};
</script>
