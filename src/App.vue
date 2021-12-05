<template>
  <div id="app" class="container">
    <nav-bar></nav-bar>
    <keep-alive> <router-view></router-view></keep-alive>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'app',
  components: {
    NavBar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

  padding: 24px;
  box-sizing: border-box;
}

html,
body,
#app {
  height: 100%;
  width: 1200px;
  margin: 20px auto;
}

* {
  box-sizing: border-box;
}
</style>
