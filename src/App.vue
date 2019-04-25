<template>
  <div id="app">
  <router-view />
  </div>
</template>

<script>
import MainStore from './components/Store.vue'
import { mapActions } from 'vuex'
export default {
  name: 'app',
  components: {
    MainStore
  },
  methods: {
    ...mapActions(['getData'])
  },
  created(){
    this.getData().then(() => {
      console.log('get data successfully!')
    });
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
