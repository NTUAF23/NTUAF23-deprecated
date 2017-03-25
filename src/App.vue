<template>
  <section id="app">

<!--     <img src="./assets/logo.png"> -->
    <hero></hero>
    <sponser></sponser>

    <mycomponent></mycomponent>

  </section>
</template>

<script>
import MyComponent from './components/myComponent.vue'
import Sponser from './components/sponser.vue'
import Hero from './components/hero.vue'
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
    hero: Hero,
  },
}
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
