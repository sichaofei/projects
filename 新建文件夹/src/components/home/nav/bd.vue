<template>
  <div class="bd">
    <div class="head">
      <div class="header">
        <div class="left" @click="go()"><img src="static/img/active/czq_03.png" alt=""></div>
        <div class="center">
          <img src="static/img/homepage/home_08.gif" alt="" class="search">
          <img src="static/img/homepage/home_10.gif" alt="" class="yin">
          <input type="text" placeholder="保单贷款">
        </div>
        <div class="right"><img src="static/img/server/serve_03.png" alt=""></div>
      </div>
    </div>
    <div class="con">
      <div class="left">
        <h3>我和家人的保单</h3>
        <span>管理查看名下保单</span>
      </div>
      <div class="right"><img src="static/img/server/serve_25.png" alt=""></div>
    </div>
    <div class="nav">
      <div><img src="static/img/db/polic_03.png" alt="">保险需求</div>
      <div><img src="static/img/db/polic_05.png" alt="">保单概览</div>
      <div><img src="static/img/db/polic_07.png" alt="">待办事项</div>
    </div>
    <div class="tiao"></div>
    <div class="ton">
      <div class="top">
        <span></span>常用服务
      </div>
      <div class="main">
        <div v-for="(item,index) in chang" :key="index">
          <img :src="item.img" alt=""> {{item.title}}
        </div>
      </div>
    </div>
    <div class="tiao"></div>
    <div class="san">
      <div class="top">
        <span></span>投保三部曲
      </div>
      <div class="nav1">
        <div>
          <div class="left"> <img src="static/img/db/polic_41.png" alt="">掌上宝</div>
          <div class="right"><img src="static/img/server/serve_25.png" alt=""></div>
        </div>
        <div>
          <div class="left"> <img src="static/img/db/polic_43.png" alt="">签收保单</div>
          <div class="right"><img src="static/img/server/serve_25.png" alt=""></div>
        </div>
        <div>
          <div class="left"> <img src="static/img/db/polic_46.png" alt="">保单回访</div>
          <div class="right"></div>
        </div>

      </div>
    </div>
    <div class="hj">
      <div class="left"> <img src="static/img/db/polic_52.png" alt="">投保函件</div>
      <div class="right"><img src="static/img/server/serve_25.png" alt=""></div>
    </div>
    <div class="lp">
      <div class="top">
        <span></span>理赔服务
      </div>
      <div class="nav2">
        <div v-for="(item,index) in lp" :key="index">
          <img :src="item.img" alt=""> {{item.title}}
        </div>
      </div>
    </div>
    <div class="tiao"></div>
    <div class="more">
      <div class="top">
        <span></span>更多福利
      </div>
      <div class="nav3">
        <div> <img src="static/img/db/polic_70.png" alt=""></div>
        <div> <img src="static/img/db/polic_72.png" alt=""></div>
      </div>
    </div>
    <div class="foot"></div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      chang: [],
      lp: []
    };
  },
  methods: {
    go() {
      this.$router.back(-1);
    }
  },
  created() {
    let id = this.$route.params.id;
    Axios.get("http://localhost:9913/bd/" + id).then(res => {
      console.log(res.data[0].con[0]);
      this.chang = res.data[0].con[0].chang;
      this.lp = res.data[0].con[0].lipei;
    });
  }
};
</script>

<style scoped lang="scss">
.bd {
  width: 100%;
  font-size: 0.6rem;
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
    position: relative;
    .search {
      position: absolute;
      left: 0.5rem;
      top: auto;
      width: 0.8rem;
    }
    .yin {
      position: absolute;
      right: 0.5rem;
      top: auto;
      width: 0.8rem;
    }
    input {
      text-indent: 3em;
      outline-style: none;
      border: 0;
      background: #f2f2f2;
      height: 1.5rem;
      border-radius: 0.2rem;
    }
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
    }
  }
}
.con {
  width: 95%;
  margin: 2rem auto;
  padding: 1.5rem 0;
  display: flex;
  border-bottom: 1px solid #f6f6f6;
  div {
    display: flex;

    justify-content: center;
    flex-direction: column;
  }
  .left {
    width: 80%;
    letter-spacing: 0.2em;
    h3 {
      font-size: 0.8rem;
    }
    span {
      color: #8c8c8c;
    }
    align-items: flex-start;
  }
  .right {
    width: 20%;
    align-items: flex-end;
    img {
      width: 0.5rem;
    }
  }
}

.nav {
  width: 95%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
  div {
    width: 32%;
    display: flex;
    height: 1rem;
    border-right: 2px solid #f6f6f6;
    font-weight: 500;
    img {
      margin-right: 0.5rem;
      width: 0.7rem;
      align-items: center;
      justify-content: center;
    }
  }
  div:last-child {
    border: 0;
  }
}
.top {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.5rem;
  line-height: 0.8rem;
  margin-bottom: 0.5rem;
  span {
    margin-right: 0.5rem;
    float: left;
    display: inline-block;
    width: 0.2rem;
    height: 0.8rem;
    background: #ff721f;
  }
}
.tiao {
  height: 0.5rem;
  background: #f7f7f7;
  width: 100%;
}
.ton {
  width: 95%;
  margin: 0 auto;
}
.main {
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  margin: 0.5rem auto;
  div {
    font-size: 0.5rem;
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      margin: 0.5rem 0;
      width: 1.5rem;
    }
  }
}
.san {
  width: 95%;
  margin: 0 auto;
  .nav1 {
    width: 100%;
    display: flex;
    > div {
      width: 33%;
      display: flex;
      justify-content: center;
      align-items: center;
      .left {
        width: 85%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        img {
          width: 70%;
        }
      }
      .right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 15%;
        img {
          width: 0.5rem;
        }
      }
    }
  }
}
.hj {
  margin-top: 0.5rem;
  border-top: 1px solid #efefef;
  box-sizing: border-box;
  width: 100%;
  padding: 1rem 2.5%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  border-bottom: 0.5rem solid #f7f7f7;
  div {
    display: flex;
    align-items: center;
  }
  .left {
    width: 80%;
    justify-content: flex-start;
    img {
      width: 0.8rem;
      margin-right: 0.6rem;
    }
  }
  .right {
    width: 20%;
    justify-content: flex-end;
    img {
      width: 0.5rem;
    }
  }
}
.lp {
  width: 95%;
  margin: 0.5rem auto;
  .nav2 {
    width: 100%;
    display: flex;
    div {
      width: 25%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 2rem;
        margin: 0.5rem 0rem;
      }
    }
  }
}
.more {
  width: 95%;
  margin: 0.5rem auto;
  .nav3 {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div {
      width: 48%;
      img {
        width: 100%;
      }
    }
  }
}
.foot {
  height: 2rem;
  width: 100%;
  background: #f7f7f7;
}
</style>
