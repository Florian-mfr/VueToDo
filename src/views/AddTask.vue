<template>
  <div class="add-task">
    <h1>Ajouter une tâche</h1>
    <div class="todo_addtask">
      <textarea
        class="addtask_input"
        placeholder="Écrivez votre nouvelle tâche ici..."
        v-model="taskName"
      />
      <button class="addtask_btn" @click="addTask(taskName)">Ajouter</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data: () => {
    return {
      taskName: ''
    }
  },
  methods: {
    addTask(name) {
      const task = {name, completed: false}
      this.$store.commit('addTask', task)
      this.$router.push('/')
    }
  }
};
</script>
