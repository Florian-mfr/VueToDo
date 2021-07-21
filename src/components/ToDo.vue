<template>
  <li>
    {{ name }}
    <button
      class="button-check"
      v-bind:class="{ 'green': completed }"
      @click="toggleCompleted(name)"
    >
      check
    </button>
  </li>
</template>

<script>
export default {
  name: "ToDo",
  props: ["name", "completed"],
  methods: {
      toggleCompleted(name) {
          this.$store.commit('toggleCompleted', name)
      }
  }
};
</script>

<style>
.green {
  background-color: green;
}
</style>