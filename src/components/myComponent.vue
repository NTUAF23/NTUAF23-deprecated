<template lang="html">
  <section>

    <div><h1>{{ msg1 }}</h1></div>
    <div><i>{{ msg2 }}</i></div>

  </section>
</template>

<script>
export default {
  data(){
    return{
      msg1:'我是 `src/components/myComponent.vue` ',
      msg2:'<style>裡記得加scoped，css才不會外漏喔！'
    }
  }
}
</script>

<style lang="css" scoped>
section{
  border: 1px green dashed;
}
div{
  color: green;
}
</style>
