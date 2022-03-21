<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <SetupApi></SetupApi>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SetupApi from './components/SetupApi.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    SetupApi
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
