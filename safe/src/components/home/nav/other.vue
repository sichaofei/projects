<template>
    <div class="other">
        <div class="head">
            <div class="header">
                <div class="left" @click="go()"><img src="static/img/active/czq_03.png" alt=""></div>
                <div class="center">
                    {{list.name}}
                </div>
                <div class="right"></div>
            </div>
        </div>
        <div class="body">
            <h1>暂无数据</h1>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return { list: [] };
  },
  methods: {
    go() {
      this.$router.back(-1);
    }
  },
  mounted() {
    let id = this.$route.params.id;
    Axios.get("http://localhost:9913/all/" + id).then(res => {
      console.log(res.data[0].con);
      this.list = res.data[0].con[0];
    });
  }
};
</script>

<style scoped lang="scss">
.other {
  width: 100%;
  height: 100vh;
  background: #f1f1f1;
}
.head {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 5;
  height: 2rem;
  padding: 0 2.5%;
  box-sizing: border-box;
  border-bottom: 1px solid #e1e1ee;
}
.header {
  width: 95%;
  margin: 0 auto;
  z-index: 5;
  height: 2rem;
  width: 100%;
  display: flex;
  .left,
  .right {
    display: flex;
    align-items: center;
    width: 15%;
  }
  .left {
    img {
      width: 0.5rem;
      justify-content: flex-start;
    }
  }
  .right {
    img {
      width: 0.7rem;
    }
    justify-content: flex-end;
  }
  .center {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.body {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
