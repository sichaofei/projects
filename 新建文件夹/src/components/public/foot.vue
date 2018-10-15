<template>
    <div>
        <router-view></router-view>
        <div class="foot">
            <router-link to="/" active-class="Active" exact tag="div">
                <span class="icon iconfont icon-home"> </span>
                首页
            </router-link>
            <router-link to="/server" active-class="Active" tag="div">
                <span class=" icon iconfont icon-shangpin-xianxing"> </span>
                服务
            </router-link>
            <router-link to="/live" active-class="Active" tag="div">
                <span class=" icon iconfont icon-yewu-xianxing"> </span>
                生活
            </router-link>
            <router-link to="/my" active-class="Active" tag="div">
                <span class=" icon iconfont icon-user"> </span>
                我的
            </router-link>
        </div>
    </div>
</template>

<script>
import "../iconfoot/iconfont.css";
export default {};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.foot {
    z-index: 5;
  width: 100%;
  display: flex;
  color: #b8b8b8;
  position: fixed;
  bottom: 0;
  left: 0;
  height: 2rem;
  background: white;
  div {
      font-weight: 700;
    width: 25%;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 0.6rem;
  }
  .Active {
    color: #ff721f;
  }
  span {
    font-size: 1rem;
  }
}
</style>
