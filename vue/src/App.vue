<template>
  <div id="app">

    <router-link to="/xsk">选项卡</router-link>
    <router-link to="/">购物车</router-link>
    <transition name="fade">
      <router-view style=" position: absolute;" />
      <p slot="header">wadaw adaw dawd awd a ad aw da da a </p>
    </transition>

  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style  lang="scss">
.fade {
  position: absolute;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
