<template>
  <div class="server">
    <div class="head">
      <div class="header">
        <div class="left"></div>
        <div class="center">
          服务
        </div>
        <div class="right">
          <img src="static/img/server/serve_03.png" alt="">
        </div>
      </div>
    </div>
    <div class="nav">
      <div>
        <div class="left">
          <img src="static/img/server/serve_07.png" alt="">
        </div>
        <div class="right">
          <h3>请绑定</h3>
          <p>产品服务经理</p>
        </div>
      </div>
      <div>
        <div class="left"> <img src="static/img/server/serve_09.png" alt=""></div>
        <div class="right">
          <h3>家庭医生</h3>
          <p>健康问诊</p>
        </div>
      </div>
    </div>
    <div class="tiao"></div>
    <div class="sx">
      <div class="sx_head">
        <div class="left">
          <h3>寿险保单服务</h3>
        </div>
        <div class="right"> <img src="static/img/server/serve_25.png" alt=""></div>
      </div>
      <div class="sx_nav">
        <div>
          <div class="left">
            <img src="static/img/server/serve_14.png" alt="">
          </div>
          <div class="right">
            <h3>待办事项</h3>
            <p>待办理的保单业务</p>
          </div>
        </div>
        <div>
          <div class="left"><img src="static/img/server/serve_17.png" alt=""></div>
          <div class="right">
            <h3>保险需求分析</h3>
            <p>智能分析保障缺口</p>
          </div>
        </div>
      </div>
    </div>
    <div class="tiao"></div>
    <div class="quan">
      <div class="sx_head">
        <div class="left">
          <h3>圈子</h3>
        </div>
        <div class="right"> <img src="static/img/server/serve_25.png" alt=""></div>
      </div>

      <router-link tag="div" :to=" '/server/quan?type='+item.router " v-for="(item,index) in con " :key="index " class="con ">
        <div class="left ">
          <div class="l "><img :src="item.img " alt=" "></div>
          <div class="r ">
            <h3>{{item.title}}</h3>
            <p>{{item.nav}}</p>
          </div>
        </div>
        <div class="right ">
          <img src="static/img/server/serve_25.png " alt=" ">
        </div>
      </router-link>

    </div>
    <div class="tiao "></div>
    <div class="foot">
      <div class="sx_head">
        <div class="left">
          <h3>精选服务</h3>
        </div>
        <div class="right"> <img src="static/img/server/serve_25.png" alt=""></div>
      </div>
      <div class="ft" v-for="(item,index) in good" :key="index">
        <img :src="item.img" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Axios from "axios";
export default {
  data() {
    return {
      con: [],
      good: []
    };
  },
  created() {
    Axios.get("http://localhost:9913/server").then(res => {
      this.con = res.data.quan;
      this.good = res.data.good;
      console.log(res);
    });
  }
};
</script>
<style scoped lang="scss">
.server {
  width: 100%;
  font-size: 0.5rem;
  margin-bottom: 3rem;
}
.head {
  position: fixed;
  height: 2rem;
  top: 0;
  z-index: 5;
  width: 100%;
  background: white;
  .header {
    height: 2rem;
    width: 95%;
    margin: 0 auto;
    display: flex;
    .left,
    .right {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      width: 15%;
      img {
        width: 0.7rem;
      }
    }
    .center {
      width: 70%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.tiao {
  height: 0.5rem;
  background: #f7f7f7;
  width: 100%;
  margin-top: 0.5rem;
}
.nav,
.sx_nav {
  width: 95%;
  margin: 0 auto;
  margin-top: 2.2rem;
  display: flex;
  justify-content: space-between;
  > div {
    width: 49%;
    display: flex;
    background: #f7f7f7;
    height: 3rem;
    div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .left {
      width: 40%;
      img {
        width: 80%;
      }
    }
    .right {
      width: 60%;
      flex-direction: column;
      align-items: flex-start;
      p {
        color: #989898;
      }
    }
  }
}
.sx_head {
  margin-top: 0.2rem;
  width: 100%;
  display: flex;
  > div {
    display: flex;
    align-items: center;
  }
  .left {
    width: 80%;
    justify-content: flex-start;
  }
  .right {
    width: 20%;
    justify-content: flex-end;
    img {
      width: 0.5rem;
    }
  }
}
.sx {
  width: 95%;
  margin: 0.5rem auto;
}
.sx_nav {
  width: 100%;
  border-top: 1px solid #efefef;
  margin-top: 0.7rem;
  > div {
    background: white;
    .left {
      justify-content: flex-start;
    }
  }
}
.quan {
  .sx_head {
    margin-bottom: 0.5rem;
  }
  width: 95%;
  margin: 0.5rem auto;
  .con {
    box-sizing: border-box;
    border-top: 1px solid #efefef;
    width: 100%;
    display: flex;
    padding: 0.5rem 0rem;
    .left {
      width: 80%;
      display: flex;
      .l {
        width: 20%;
        img {
          width: 100%;
        }
      }
      .r {
        padding-left: 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        width {
          width: 80%;
        }
      }
    }
    .right {
      width: 20%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
    }
    img {
      width: 0.5rem;
    }
  }
}
.foot {
  width: 95%;
  margin: 0.5rem auto;
  .ft {
    width: 100%;
    margin-top: 0.5rem;
    img {
      width: 100%;
    }
  }
}
</style>

