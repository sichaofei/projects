<template>
  <div class="box">
    <ul>
      <li :class="{pink:active==1}" @click="actives(1)">1</li>
      <li :class="{pink:active==2}" @click="actives(2)">2</li>
      <li :class="{pink:active==3}" @click="actives(3)">3</li>
      <li :class="{pink:active==4}" @click="actives(4)">4</li>
    </ul>
    <div class="nav" v-show="active==1">111111111111111111111111111111111111111</div>
    <div class="nav" v-show="active==2">222222222222222222222222222</div>
    <div class="nav" v-show="active==3">333333333333333333333333333333</div>
    <div class="nav" v-show="active==4">43334444444444444444444444444444</div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "1"
    };
  },
  methods: {
    actives(num) {
      this.active = num;
    }
  }
};
</script>
<style scoped lang="scss">
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 60%;
  margin: 0 auto;
  border: 1px solid red;
  position: relative;
}
ul {
  width: 100%;
  display: flex;
  li {
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    background: #ccc;
  }
  .pink {
    background: pink;
  }
}
.nav {
  width: 100%;
  position: absolute;
  top: 60px;
  left: 0;
}
</style>

