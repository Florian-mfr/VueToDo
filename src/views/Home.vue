<template>
  <div class="home">
    <Navbar />
    <ToDo />
  </div>
</template>

<script>
// @ is an alias to /src
import ToDo from '@/components/ToDo.vue'
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ToDo
  }
}
</script>
