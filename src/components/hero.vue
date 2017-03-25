<template lang="html">
  <section>


  <div class="hero">
    <img class="hero_head" src="../assets/hero/hero_head.png">
    <img class="hero_hand" src="../assets/hero/hero_hand.png">
    <img class="hero_hand2" src="../assets/hero/hero_hand2.png">
    <img class="hero_foot" src="../assets/hero/hero_foot.png">
    <div class="h1">NTU<br/>ART<br/>FESTIVAL </div>
  </div>

  </section>
</template>

<script>
export default {
  data(){
    return{
      msg1:'我是 `src/components/myComponent.vue` ',
      msg2:'NTU'
    }
  }
}
</script>

<style lang="scss" scoped>
.hero {
  height: 100vh;
  background: #6A8B9C;
  overflow: hidden;
  width: 100%;
  position: relative;
}

.hero_head {
  height: 360px;
  position: absolute;
  bottom: 0;
  left: 30%;
}

.hero_hand {
  height: 240px;
  position: absolute;
  bottom: 40%;
  left: 10%;
}

.hero_hand2 {
  height: 240px;
  position: absolute;
  bottom: 24%;
  right: 10%;
}

.hero_foot {
  height: 180px;
  position: absolute;
  bottom: 12%;
  left: 7%;
}

.h1 {
  text-align: left;
  color: #FFF;
  font-size: 32px;
  margin-left: 20px;
}
</style>
