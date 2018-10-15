<template>
    <div class="ask">
        <div class="head">
            <div class="header">
                <div class="left" @click="go()"><img src="static/img/active/czq_03.png" alt=""></div>
                <div class="center">
                    <img src="static/img/homepage/home_08.gif" alt="" class="search">
                    <img src="static/img/homepage/home_10.gif" alt="" class="yin">
                    <input type="text" placeholder="跳一跳   赢现金">
                </div>
                <div class="right"><img src="static/img/askdoctor/1.png" alt=""><img src="static/img/askdoctor/2.png" alt=""></div>
            </div>
        </div>
        <div class="nav">
            <div class="left">
                <div class="l"><img src="static/img/askdoctor/3.png" alt=""></div>
                <div class="r">
                    <h3>家庭医生</h3>
                    <p>赶快绑定专属家庭医生吧</p>
                </div>
            </div>
            <div class="right">
                <button>去绑定</button>
            </div>
        </div>
        <div class="tiao"></div>
        <div class="con">
            <div class="top">
                <div class="left">
                    <span></span>
                    <b>选科室 问医生</b>
                    专业医生 对症下药
                </div>
                <div class="right">更多<img src="static/img/server/serve_25.png" alt=""></div>
            </div>
            <div class="con1">
                <div v-for="(item,index) in con" :key="index">
                    <img :src="item.img" alt=""> {{item.title}}
                    <span>{{item.content}}</span>
                </div>
            </div>
        </div>
        <div class="tiao"></div>
        <div class="tl">
            <div class="top">
                <span></span>
                <b>中医调理</b>
            </div>
            <div class="lei">
                <div>腹痛腹泻</div>
                <div>小儿发热</div>
                <div>月经失调</div>
                <div>容易发胖</div>
            </div>
        </div>
        <div class="lo">
            <img src="static/img/askdoctor/12.png" alt="">
        </div>
        <div class="tese">
            <div class="top">
                <span></span>
                <b>特色服务</b>
            </div>
            <div class="nav1">
                <div v-for="(item,index) in ts" :key="index">
                    <img :src="item.img" alt="">
                </div>
            </div>
        </div>
        <div class="tiao"></div>
        <div class="gh">
            <div class="top">
                <div class="left">
                    <span></span>
                    <b>快速挂号</b>
                    在线预约免排队
                </div>
                <div class="right">更多医院<img src="static/img/server/serve_25.png" alt=""></div>
            </div>
        </div>
        <div class="register">
            <div v-for="(item,index) in register" :key="index">
                <div class="left">
                    <img :src="item.img" alt="">
                </div>
                <div class="right">
                    <h3>{{item.name}}</h3>
                    <p>{{item.site}}</p>
                </div>
            </div>
        </div>
        <div class="foot">
            <img src="static/img/askdoctor/20.png" alt="">
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return { con: [], ts: [], register: [] };
  },
  methods: {
    go() {
      this.$router.back(-1);
    }
  },
  created() {
    var id = this.$route.params.id;
    Axios.get("http://localhost:9913/ask/" + id).then(res => {
      console.log(res.data[0].con[0]);
      let data = res.data[0].con[0];
      this.con = data.ChooseDepartment;
      this.ts = data.characteristicService;
      this.register = data.register;
    });
  }
};
</script>

<style scoped lang="scss">
.ask {
  width: 100%;
  font-size: 0.5rem;
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
  border-bottom: 1px solid #f2f2f2;
}
.header {
  width: 95%;
  margin: 0 auto;
  z-index: 5;
  height: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  .left,
  .right {
    display: flex;
    align-items: center;
  }
  .left {
    width: 10%;
    img {
      width: 0.5rem;
      justify-content: flex-start;
    }
  }
  .right {
    img {
      width: 20%;
      width: 0.7rem;
      margin-left: 0.3rem;
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
.tiao {
  height: 0.5rem;
  background: #f7f7f7;
  width: 100%;
}
.top {
  width: 100%;
  height: 0.8rem;
  margin-top: 0.5rem;
  line-height: 0.8rem;
  margin-bottom: 0.5rem;
  display: flex;
  span {
    margin-right: 0.5rem;
    float: left;
    display: inline-block;
    width: 0.2rem;
    height: 0.8rem;
    background: #ff721f;
  }
  b {
    font-size: 0.6rem;
  }
  > div {
    display: flex;
    align-items: center;
  }
  .left {
    color: #9d9d9d;
    b {
      margin-right: 0.5rem;

      color: black;
    }
    width: 80%;
    justify-content: flex-start;
  }
  .right {
    width: 20%;
    justify-content: flex-end;
    img {
      width: 0.4rem;
      margin-left: 0.5rem;
    }
  }
}
.nav {
  width: 95%;
  margin: 0 auto;
  margin-top: 2.3rem;
  display: flex;
  > div {
    display: flex;
  }
  .left {
    width: 60%;
    h3 {
      font-size: 0.7rem;
    }
    p {
      color: #a8a8a8;
    }
    .l {
      width: 30%;
      img {
        width: 100%;
      }
    }
    .r {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 70%;
    }
  }
  .right {
    justify-content: flex-end;
    align-items: center;
    width: 40%;
    button {
      outline: none;
      width: 70%;
      height: 1.5rem;
      border: 0;
      background: #ff9045;
      color: white;
      border-radius: 2rem;
    }
  }
}
.con {
  width: 95%;
  margin: 0.2rem auto;
}
.con1 {
  padding: 0.5rem 0rem;
  width: 95%;
  margin: 0.3rem auto;
  display: flex;
  flex-wrap: wrap;
  div {
    font-weight: 500;
    span {
      color: #a8a8a8;
    }
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 75%;
      margin: 0.5rem 0;
    }
  }
}
.tl {
  width: 95%;
  margin: 0.5rem auto;
  .lei {
    width: 100%;
    display: flex;
    justify-content: space-between;
    div {
      width: 23%;
      height: 1.5rem;
      border-radius: 2rem;
      background: #f2ebf9;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    div:nth-child(2) {
      background: #8a8f80;
    }
    div:nth-child(3) {
      background: #fff4e0;
    }
    div:nth-child(4) {
      background: #eaf2d7;
    }
  }
}
.lo,
.foot {
  width: 100%;
  img {
    width: 100%;
    display: block;
  }
}
.tese {
  width: 95%;
  margin: auto;
  .nav1 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      width: 49%;
      img {
        width: 100%;
      }
    }
  }
}
.gh {
  width: 95%;
  margin: 0.2rem auto;
}
.register {
  width: 100%;
  > div {
    height: 3rem;
    box-sizing: border-box;
    width: 100%;
    padding: 0 2.5% 0 2.5%;
    border-top: 1px solid #f1f1f1;
    display: flex;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
  .left {
    width: 30%;

    img {
      width: 100%;
    }
  }
  .right {
    padding-left: 1rem;
    flex-direction: column;
    align-items: flex-start;
    width: 70%;
    p {
      color: #9f9f9f;
      margin-top: 0.5rem;
    }
  }
}
</style>
