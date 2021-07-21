<template>
  <nav class="navbar">
    <router-link to="/" class="navbar_link">Home</router-link>
    <router-link to="/add-task" class="navbar_link">Add Task</router-link>
    <button class="navbar_link" @click="deleteTask()">Delete</button>
  </nav>
  <router-view />
</template>

<script>
export default {
  methods: {
    deleteTask() {
      this.$store.commit('deleteTask')
    }
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Tahoma, sans-serif;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  color: black;
}
button {
  cursor: pointer;
}
.navbar {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: grey;
}
.navbar_link {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  color: white;
  background-color: transparent;
  border: 1px solid white;
  padding: 10px;
  border-radius: 4px;
  margin: 10px 0;
  transition: all 0.3s ease-in;
}
.navbar_link:hover {
  background-color: white;
  color: grey;
}
.active {
  background-color: white;
  color: grey;
}
</style>
