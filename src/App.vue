<template>
  <div id="app">
    <main-store></main-store>
  </div>
</template>

<script>
import MainStore from './components/MainStore.vue'

export default {
  name: 'app',
  components: {
    MainStore
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
