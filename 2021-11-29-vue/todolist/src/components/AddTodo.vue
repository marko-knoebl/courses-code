<template>
  <form @submit.prevent="handleSubmit()">
    <v-row>
      <v-col :cols="12" :sm="6" :md="3">
        <v-text-field v-model="newTitle" label="new title" />
      </v-col>
      <v-col>
        <v-btn color="primary" type="submit">Add</v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script>
export default {
  name: "AddTodo",
  data: function () {
    return {
      newTitle: "",
    };
  },
  methods: {
    handleSubmit: function () {
      if (this.newTitle === "") {
        return;
      }
      this.$emit("addTodo", this.newTitle);
      this.newTitle = "";
    },
  },
};
</script>
