<template>
    <div class="detail">
        <div class="head">
            <div class="header">
                <div class="left" @click="go()"><img src="static/img/active/czq_03.png" alt=""></div>
                <div class="center">{{detail.name}}</div>
                <div class="right">...</div>
            </div>
        </div>
        <div class="nav">
            <img :src="detail.img" alt="">
        </div>
        <div class="foot">
            <button>我要参加活动</button>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      detail: {}
    };
  },
  created() {
    var qid = this.$route.params.id;
    var hid = this.$route.query.id;
    Axios.get("http://localhost:9913/active/detail/" + qid + "?id=" + hid).then(
      res => {
        console.log(res);
        this.detail = res.data[0];
      }
    );
  },
  methods: {
    go() {
      this.$router.back(-1);
    }
  }
};
</script>

<style scoped lang="scss">
.detail {
  width: 100%;
  font-size: 0.5rem;
}
.head {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 5;
  padding: 0 2.5%;
  box-sizing: border-box;
}
.header {
  background: white;
  width: 100%;
  height: 2rem;
  display: flex;
  img {
    width: 0.5rem;
  }
  .left,
  .right {
    width: 15%;
  }
  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .right {
    font-size: 0.7rem;
    font-weight: 800;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .center {
    width: 70%;
    display: flex;
    font-size: 0.7rem;
    justify-content: center;
    align-items: center;
  }
}
.nav {
  width: 100%;
  margin-top: 2rem;
  img {
    width: 100%;
  }
}
.foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  button {
    width: 100%;
    color: white;
    height: 2rem;
    background: #ff721f;
    border: 0;
    outline: none;
  }
}
</style>
