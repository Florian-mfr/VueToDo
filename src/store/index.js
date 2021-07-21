import { createStore } from 'vuex'

export default createStore({
  state: {
    taskList: [
      {name: "Faire la vaisselle", completed: false},
      {name: "Passer l'aspirateur", completed: false},
  ]
  },
  mutations: {
    addTask (state, task) {
      state.taskList = [...state.taskList, task]
    },
    toggleCompleted (state, taskName) {
      const taskToToggle = state.taskList.find(task => task.name === taskName);
      taskToToggle.completed = !taskToToggle.completed
    },
    deleteTask (state) {
      const taskList = state.taskList.filter(task => task.completed === false);
      state.taskList = taskList
    }
  },
  actions: {
  },
  modules: {
  }
})
