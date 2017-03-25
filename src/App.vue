<template>
  <section id="app">

    <img src="./assets/logo.png">

    <sponser></sponser>

    <mycomponent></mycomponent>

  </section>
</template>

<script>
import MyComponent from './components/myComponent.vue'
import Sponser from './components/sponser.vue'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    mycomponent: MyComponent,
    sponser: Sponser,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
