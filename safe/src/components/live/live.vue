<template>
  <div class="live">
    <div class="head">
      <div class="header">
        <div class="left">
          <img src="static/img/homepage/home_08.gif" alt="" class="search">
          <img src="static/img/homepage/home_10.gif" alt="" class="yin">
          <input type="text" placeholder="美丽人生" v-on:input="enter()" v-model="search">
        </div>
        <div class="right"><img src="static/img/server/serve_03.png" alt="">北京</div>
      </div>
    </div>

    <div class="shopSearch" v-show="search!=''">
      <p v-show="searchList.length==0">暂未找到相应数据</p>
      <div class="tj">
        <router-link :to="'/shop/'+item.id" tag="div" v-for="(item,index) in searchList" :key="index">
          <img :src="item.img" alt="">
          <h5>{{item.name}}</h5>
          <span>￥{{item.newPrice}}</span>
          <del>￥{{item.oldPrice}}</del>
        </router-link>
      </div>
    </div>
    <div class="shopCon" v-show="search==''">
      <div class="banner">
        <mt-swipe :auto="4000">
          <mt-swipe-item><img src="static/img/live/banner1.png" alt="" style="width:100%;height:100%"></mt-swipe-item>
          <mt-swipe-item><img src="static/img/live/banner2.png" alt="" style="width:100%;height:100%"></mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="con">
        <div v-for="(item,index) in con" :key="index">
          <img :src="item.img" alt=""> {{item.title}}
        </div>
      </div>
      <div class="tiao"></div>
      <div class="pt">
        <div class="top">
          <span></span>
          拼团抢购
        </div>
        <div class="swiper">
          <swiper :options="swiper1Option " ref="shop ">
            <swiper-slide v-for="(item,index) in pt " :key="index ">
              <img :src="item.img " alt=" ">
              <h5>{{item.title}}</h5>
              <span>￥{{item.newPrice}}</span>
              <del>￥{{item.oldPrice}}</del>
              <p>据结束
                <button class="time_h"></button>:
                <button class="time_m"></button>:
                <button class="time_s"></button>
              </p>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="tiao"></div>
      <div class="pt">
        <div class="top">
          <span></span>
          今日特价
        </div>
        <div class="swiper">
          <swiper :options="swiper1Option " ref="shop ">
            <swiper-slide v-for="(item,index) in jr " :key="index ">
              <img :src="item.img " alt=" ">
              <h5>{{item.title}}</h5>
              <span>￥{{item.newPrice}}</span>
              <del>￥{{item.oldPrice}}</del>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="tiao"></div>
      <div class="pt">
        <div class="top">
          <span></span>
          和你一样的
          <span v-text="liveChange" class="change" v-show="!changed"></span>
          <span v-show="changed">用户</span> 都买了什么
        </div>
        <div class="type">
          <button @click="changes('全部')" :class="{liveActive:liveChange=='全部'}">全部</button>
          <button @click="changes('生活达人')" :class="{liveActive:liveChange=='生活达人'}">生活达人</button>
          <button @click="changes('神秘党')" :class="{liveActive:liveChange=='神秘党'}">神秘党</button>
        </div>
        <div class="swiper">
          <swiper :options="swiper1Option " ref="shop ">
            <swiper-slide v-for="(item,index) in change " :key="index ">
              <img :src="item.img " alt=" ">
              <h5>{{item.title}}</h5>
              <span>￥{{item.newPrice}}</span>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="tiao"></div>
      <div class="pp">
        <div class="top">
          <span></span>
          品牌直达
        </div>
        <div class="ppd">
          <div v-for="(item,index) in pp" :key="index">
            <div class="left">
              <h5>{{item.name}}</h5>
              <span>{{item.title}}</span>
            </div>
            <div class="right"><img :src="item.img" alt=""></div>
          </div>
        </div>
      </div>
      <div class="tiao"></div>
      <div class="hz">
        <div v-for="(item,index) in hz" :key="index">
          <img :src="item.img" alt="">
        </div>
      </div>
      <div class="tiao"></div>
      <div class="tj">
        <router-link :to="'/shop/'+item.id" tag="div" v-for="(item,index) in tj" :key="index">
          <img :src="item.img" alt="">
          <h5>{{item.name}}</h5>
          <span>￥{{item.newPrice}}</span>
          <del>￥{{item.oldPrice}}</del>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import time from "./time.js";
import Axios from "axios";
export default {
  data() {
    return {
      con: [],
      pt: [],
      jr: [],
      pp: [],
      hz: [],
      tj: [],
      search: "",
      swiper: {},
      swiper1Option: {
        slidesPerView: 2.6
      },
      liveChange: "全部",
      change: [],
      changed: true,
      searchList: []
    };
  },
  created() {
    Axios.get("http://localhost:9913/live").then(res => {
      console.log(res);
      this.con = res.data.nav;
      this.pt = res.data.liveOne;
      this.jr = res.data.liveTwo;
      this.pp = res.data.pp;
      this.hz = res.data.hz;
      this.tj = res.data.tj;
    });
    Axios.get("http://localhost:9913/live/change").then(res => {
      console.log(res);
      this.change = res.data;
    });
  },
  methods: {
    changes(a) {
      this.liveChange = a;
      if (a != "全部") {
        this.changed = false;
      } else {
        this.changed = true;
      }
      Axios.get("http://localhost:9913/live/change?type=" + a).then(res => {
        console.log(res);
        this.change = res.data;
      });
    },
    enter() {
      console.log(this.search);
      Axios.get("http://localhost:9913/live/search?q=" + this.search).then(
        res => {
          this.searchList = res.data;
        }
      );
    }
  }
};
</script>
<style scoped lang="scss">
.live {
  width: 100%;
  font-size: 0.5rem;
  margin-bottom: 2.2rem;
}
.head {
  position: fixed;
  background: white;
  top: 0;
  width: 100%;
  z-index: 5;
  padding: 0 2.5%;
  height: 2rem;
  box-sizing: border-box;
}
.header {
  z-index: 5;
  height: 2rem;
  width: 100%;
  display: flex;
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-content: flex-end;
    img {
      width: 0.6rem;
      margin-right: 0.5rem;
    }
    width: 20%;
  }

  .left {
    width: 80%;
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
      border-radius: 0.2rem;
      border: 0;
      background: #f2f2f2;
      height: 1.5rem;
    }

    display: flex;
    justify-content: center;
    align-items: center;
    input {
      width: 100%;
    }
  }
}
.banner {
  width: 95%;
  margin: 0 auto;
  margin-top: 2.2rem;
  height: 5rem;
  img {
    width: 100%;
  }
}
.con {
  width: 95%;
  display: flex;
  margin: 0 auto;
  flex-wrap: wrap;
  div {
    width: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 1.5rem;
      margin: 0.5rem 0rem;
    }
  }
}
.tiao {
  height: 0.5rem;
  background: #f7f7f7;
  width: 100%;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
}
.top {
  width: 95%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin: 0 auto;
  span:first-child {
    margin-right: 0.5rem;
    float: left;
    display: inline-block;
    width: 0.2rem;
    height: 0.8rem;
    background: #ff721f;
  }
  .change {
    color: #ff721f;
  }
}
.pt {
  width: 100%;
  margin: 0.5rem auto;
  input {
    display: inline;
    border: 0;
    width: 2rem;
  }
  .type {
    .liveActive {
      border: 1px solid #ff721f;
    }
    width: 95%;
    margin: 0.5rem auto;
    button {
      outline: none;
      padding: 0.2rem 0.3rem;
      border: 1px solid #f2f2f2;
      background: white;
      margin-right: 0.5rem;
    }
  }
  .swiper {
    margin-top: 0.5rem;
    margin-left: 2.5%;
    h5 {
      margin: 0.3rem 0rem;
    }
    span {
      color: #ff721f;
      margin-right: 0.5rem;
    }
    img {
      width: 90%;
    }
    del {
      color: #999999;
    }
    p {
      margin: 0.5rem 0;
    }
    button {
      background: black;
      color: white;
      border: 0;
      outline-style: none;
      padding: 0.1rem;
    }
  }
}
.pp {
  width: 100%;
  margin: 0.5rem auto;
  .ppd {
    width: 95%;
    justify-content: space-between;
    margin: 0.5rem auto;
    display: flex;
    flex-wrap: wrap;
    > div {
      display: flex;
      margin-top: 0.3rem;
      width: 49%;
      background: #f4f4f4;
      box-sizing: border-box;
    }
  }
  .left,
  .right {
    width: 50%;
    img {
      width: 90%;
    }
  }
  .left {
    padding-left: 1rem;
    h5 {
      margin-top: 0.6rem;
    }
    span {
      color: #999999;
      margin-top: 0.3rem;
      display: block;
    }
  }
}
.hz {
  width: 95%;
  margin: 0.5rem auto;
  display: flex;
  justify-content: space-between;
  div {
    width: 23%;
    border: 1px solid #f2f2f2;
    img {
      width: 90%;
    }
  }
}
.swp {
  width: 100%;
  img {
    width: 100%;
  }
}
.tj {
  width: 95%;
  margin: 0.5rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  div {
    margin: 0.4rem 0rem;
    width: 48%;
    img {
      width: 100%;
    }
    h5 {
      font-size: 0.6rem;
      margin: 0.3rem 0;
    }
    span {
      color: #ff721f;
      margin-right: 0.5rem;
    }
    del {
      color: #999999;
    }
  }
}
.shopSearch {
  margin-top: 2.2rem;
  p {
    font-size: 0.7rem;
    text-align: center;
    margin-top: 5rem;
    color: #999999;
  }
}
</style>

