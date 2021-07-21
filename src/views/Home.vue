<template>
<h1>Listes des tâches</h1>
  <ul class="home">
    <ToDo
      v-for="task in tasks"
      :key="task.name"
      :name="task.name"
      :completed="task.completed"
    />
  </ul>
</template>

<script>
import ToDo from "@/components/ToDo.vue";

export default {
  name: "Home",
  components: {
    ToDo,
  },
  computed: {
    tasks() {
      return this.$store.state.taskList
    }
  },
};
</script>
