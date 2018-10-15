<template >
<div>
    <router-view></router-view>
    <ul>
        <router-link to="/" tag="li" active-class="Active" exact>首页</router-link>
        <router-link to="/shop" tag="li" active-class="Active">商品</router-link>
        <router-link to="/center" tag="li" active-class="Active">个人中心</router-link>
        <router-link to="/car" tag="li" active-class="Active">购物车</router-link>
    </ul>
    </div>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
ul {
  position: fixed;
  bottom: 0;
  height: 50px;
  width: 100%;
  display: flex;
}
li {
  width: 25%;
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
}
.Active {
  background: black;
  color: white;
}
</style>

