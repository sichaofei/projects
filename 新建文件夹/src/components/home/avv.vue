<template>
  <div class="hello">
    <div class="head">
      <div class="header">
        <div class="left">
          <img src="static/img/homepage/home_06.gif" alt="">
        </div>
        <div class="center">
          <img src="static/img/homepage/home_08.gif" alt="" class="search">
          <img src="static/img/homepage/home_10.gif" alt="" class="yin">
          <input type="text" placeholder="美丽人生">
        </div>
        <router-link class="right" tag="div" to="/sessage"><img src="static/img/homepage/home_03.gif" alt=""></router-link>
      </div>
    </div>
    <div class="banner">
      <mt-swipe :auto="4000">
        <mt-swipe-item><img src="static/img/homepage/swiper1.png" alt="" style="width:100%;height:100%"></mt-swipe-item>
        <mt-swipe-item><img src="static/img/homepage/swiper2.png" alt="" style="width:100%;height:100%"></mt-swipe-item>
        <mt-swipe-item><img src="static/img/homepage/swiper3.png" alt="" style="width:100%;height:100%"></mt-swipe-item>
        <mt-swipe-item><img src="static/img/homepage/swiper4.png" alt="" style="width:100%;height:100%"></mt-swipe-item>
      </mt-swipe>
    </div>

    <div class="banner_1">
      <swiper :options="swiperOption" ref="mySwiper">

        <swiper-slide>公告
          <span>2018/07/01旺财"快速转出"额度调整</span>
        </swiper-slide>
        <swiper-slide>公告
          <span>2018/07/01旺财"快速转出"额度调整</span>
        </swiper-slide>
        <swiper-slide>公告
          <span>2018/07/01旺财"快速转出"额度调整</span>
        </swiper-slide>
        <swiper-slide>公告
          <span>2018/07/01旺财"快速转出"额度调整</span>
        </swiper-slide>
        <swiper-slide>公告
          <span>2018/07/01旺财"快速转出"额度调整</span>
        </swiper-slide>
      </swiper>
    </div>

    <div class="con">
      <div><img src="static/img/homepage/home_20.gif" alt=""></div>
      <div><img src="static/img/homepage/home_22.gif" alt=""></div>
      <div><img src="static/img/homepage/home_24.gif" alt=""></div>
    </div>
    <div class="nav">
      <router-link tag="div" :to="item.type+'/'+item.id" v-for="(item,index) in nav1" :key="index">
        <img :src="item.img" /> {{item.text}}
      </router-link>
    </div>

    <div class="ding ">
      <img src="static/img/homepage/home_54.gif " alt=" ">
    </div>

    <div class="change ">
      <div class="head ">
        <div class="left ">
          <img src="static/img/homepage/home_57.gif " alt=" ">
        </div>
        <div class="right ">
          <h1>单身贵族</h1>
          <span>和你一样的用户都选择了这些</span>
        </div>
      </div>

      <div class="nav1 " v-for="(item,index) in nav " :key="index ">
        <div class="left ">
          <h3>{{item.title}}</h3>
          <p>{{item.text}}</p>
          <span>{{item.explain}}</span>
        </div>
        <div class="right "><img :src="item.img " alt=" "></div>
      </div>
      <div class="foot ">
        <div @touchstart="change() "><img src="static/img/homepage/home_69.gif " alt=" ">换一组</div>
        <div><img src="static/img/homepage/home_71.gif " alt=" ">查看更多</div>
      </div>
    </div>

    <div class="shop ">
      <div class="head_p ">
        <div class="left ">精选商品</div>
        <div class="right "> <img src="static/img/homepage/home_99.gif " alt=" "></div>
      </div>
      <div class="swiper ">
        <swiper :options="swiper1Option " ref="shop ">
          <swiper-slide v-for="(item,index) in shop " :key="index ">
            <img :src="item.img " alt=" ">
            <p>{{item.text}}</p>
            <span>{{item.price}}</span>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="active ">
      <div class="head_p ">
        <div class="left ">精彩活动</div>
        <div class="right "> <img src="static/img/homepage/home_99.gif " alt=" "></div>
      </div>
      <div class="actives ">
        <swiper :options="swiper2Option " ref="shop ">
          <swiper-slide v-for="(item,index) in active " :key="index ">
            <img :src="item.img " alt=" ">
            <p>{{item.title}}</p>
            <span>{{item.text}}</span>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="quan ">
      <div class="head_p ">
        <div class="left ">圈子</div>
        <div class="right "> <img src="static/img/homepage/home_99.gif " alt=" "></div>
      </div>
      <div class="quans ">
        <div v-for="(item,index) in quan " :key="index ">
          <p>
            <span>置顶</span>{{item.title}}</p>
          <div class="img ">
            <div v-for="(arr,index) in item.img " :key="index ">
              <img :src="arr.img " alt=" ">
            </div>
          </div>
          <div class="foot ">
            <div class="left ">
              <img :src="item.tou " alt=" ">
              <span> {{item.span}}</span>
              {{item.type}}
            </div>
            <div class="right ">
              {{item.num}}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="safe ">
      <div class="head_p ">
        <div class="left ">平安头条</div>
        <div class="right "> <img src="static/img/homepage/home_99.gif " alt=" "></div>
      </div>
      <div v-for="(item,index) in safe " :key="index " class="safes ">
        <div class="left ">
          <p>{{item.text}}</p>
          <span>{{item.number}}</span>
        </div>
        <div class="right ">
          <img :src="item.img " alt=" ">
        </div>
      </div>
    </div>
    <div class="foot1 ">
      <div v-for="(item,index) in foot " :key="index ">
        <img :src="item.img " alt=" ">
      </div>
    </div>
    <div class="foot2 " @click="roate() ">
      优惠齐聚任意门,更多精彩等你来
    </div>

    <div class="position " v-show="shows ">
      <img src="static/img/active/logo.png " alt=" " class="po ">
      <span @click.stop="show() ">x</span>
    </div>

  </div>
</template>

<script>
import Axios from "axios";
import $ from "jquery";
require("./home.js");
export default {
  data() {
    return {
      nav: [],
      nav1: [],
      shop: [],
      active: [],
      quan: [],
      safe: [],
      foot: [],
      before: "",
      shows: true,
      swiperOption: {
        notNextTick: true,
        autoplay: true,
        loop: true,
        speed: 1000,
        direction: "vertical",
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true
      },
      swiper1Option: {
        slidesPerView: 2.3
      },
      swiper2Option: {
        slidesPerView: 1.8
      }
    };
  },
  methods: {
    show() {
      console.log(1);
      //  e.preventDefault();//阻止其他事件
      this.shows = false;
    },
    change(a) {
      Axios.get("http://localhost:9913/home/change", {}).then(res => {
        console.log(res);
        this.nav = res.data;
        this.a = a;
      });
    },
    roate() {
      $(".foot2").addClass("roate");
      $(".foot1").removeClass("roate");
    }
  },
  mounted() {
    Axios.get("http://localhost:9913/home/change", {}).then(res => {
      console.log(res);
      this.nav = res.data;
    });
    Axios.get("http://localhost:9913/home", {}).then(res => {
      console.log(res);
      this.nav1 = res.data.nav;
      this.shop = res.data.merchandise;
      this.active = res.data.excitingevents;
      this.quan = res.data.circle;
      this.safe = res.data.headlines;
      this.foot = res.data.imgages;
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.position {
  div {
    position: relative;
    display: inline-block;
  }
  z-index: 5;
  position: fixed;
  top: 50%;
  right: 2rem;
  width: 4rem;
  display: inline-block;
  img {
    position: absolute;
    width: 3rem;
  }
  span {
    display: block;
    position: absolute;
    right: 0.5rem;
    border-radius: 50%;
    width: 0.8rem;
    height: 0.8rem;
    line-height: 0.8rem;
    text-align: center;
    font-size: 0.6rem;
    top: 0;
    background: #ccc;
    color: white;
  }
}
.hello {
  width: 100%;
  margin-bottom: 3rem;
  // position: relative;
}
.hello > .head {
  position: fixed;
  background: #f7f7f7;
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
  .left,
  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 1rem;
    }
    width: 15%;
  }
  .left {
    justify-content: flex-start;
  }
  .right {
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
      border-radius: 0.2rem;
      border: 0;
      background: #f2f2f2;
      height: 1.5rem;
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
.banner {
  width: 95%;
  height: 7rem;
  margin: 2.2rem 2.5% 0 2.5%;
  img {
    width: 100%;
    height: auto;
  }
}
.banner_1 {
  width: 95%;
  margin: 0.2rem auto;
  z-index: -1;
  height: 1.5rem;
  overflow: hidden;
  padding-left: 0.1rem;
  font-size: 0.6rem;
  span {
    margin-left: 1rem;
  }
}
.con {
  width: 95%;
  margin: 0 auto;
  display: flex;
  z-index: 100;
  justify-content: space-between;
  div {
    width: 32.3%;
    img {
      width: 100%;
    }
  }
}
.hello > .nav {
  width: 95%;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  font-size: 0.5rem;
  div {
    flex-direction: column;
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 1.5rem;
      margin: 0.7rem 0;
    }
  }
}
.ding {
  margin-top: 0.5rem;
  width: 100%;
  border-top: 0.7rem solid #f7f7f7;
  border-bottom: 0.5rem solid #f7f7f7;
  img {
    display: block;
    width: 100%;
  }
}
.change {
  width: 95%;
  margin: 0.2rem auto;
  font-size: 0.5rem;
  div {
    margin-bottom: 0.3rem;
  }
  .head {
    width: 100%;
    display: flex;
    .left {
      width: 20%;
      img {
        width: 80%;
      }
    }
    .right {
      font-size: 0.5rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      span {
        color: #b2b2b2;
      }
      h1 {
        font-size: 0.6rem;
      }
      width: 80%;
    }
  }
  .nav1 {
    width: 100%;
    display: flex;
    .left {
      span {
        color: #ff6d6d;
      }
      p {
        color: #b2b2b2;
        margin: 0.2rem 0;
      }
      width: 70%;
      font-size: 0.5rem;
    }
    .right {
      width: 30%;
      img {
        width: 80%;
      }
    }
  }
  .foot {
    border-top: 1px solid #f7f7f1;
    width: 100%;
    display: flex;
    font-size: 0.5rem;
    div {
      height: 2rem;
      width: 50%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        margin-right: 0.3rem;
        width: 0.8rem;
      }
    }
  }
}
.head_p {
  height: 2rem;
  line-height: 2rem;
  width: 95%;
  margin: 0 auto;
  display: flex;
  .left {
    width: 85%;
  }
  .right {
    width: 15%;
    text-align: right;
    img {
      width: 0.5rem;
    }
  }
}
.shop {
  font-size: 0.5rem;
  border-top: 0.3rem solid #f7f7f7;
  width: 100%;
  margin: 0.2rem auto;
  img {
    width: 90%;
  }
  .swiper {
    width: 95%;
    margin: 0 auto;
    span {
      color: #ff6969;
    }
  }
}
.active {
  font-size: 0.5rem;
  p {
    font-weight: 800;
    margin: 0.2rem 0;
  }
  border-top: 0.3rem solid #f7f7f7;
  width: 100%;
  margin: 0.4rem auto;
  .actives {
    width: 95%;
    margin: 0 auto;
    span {
      color: #9e9e9e;
    }
    img {
      width: 90%;
    }
  }
}
.quan {
  font-size: 0.5rem;
  margin: 0.3rem auto;
  border-top: 1rem solid #f7f7f7;
  border-bottom: 0.4rem solid #f7f7f7;
  > div {
    width: 95%;
    margin: 0rem auto;
    p {
      font-weight: 600;
      height: 2rem;
      line-height: 2rem;
      border-top: 2px solid #f7f7f7;
      span {
        background: #ff721f;
        color: white;
        margin-right: 1rem;
      }
    }
  }
  .img {
    width: 100%;
    display: flex;
    div {
      img {
        width: 100%;
      }
    }
  }
  .foot {
    height: 2rem;
    display: flex;
    color: #c4c4c4;
    div {
      display: flex;
      align-items: center;
    }
    .left {
      width: 80%;
      img {
        width: 0.6rem;
      }
      span {
        margin: 0 0.6rem;
      }
    }
    .right {
      width: 20%;
      justify-content: flex-end;
    }
  }
}
.safe {
  font-size: 0.5rem;
  border-bottom: 1rem solid #f7f7f7;
  .safes {
    border-top: 2px solid #f7f7f7;
    width: 95%;
    margin: 0.3rem auto;
    padding: 0.7rem 0;
    display: flex;
    .left {
      width: 70%;
      padding-right: 10%;
      p {
        font-size: 0.6rem;
        font-weight: 600;
      }
      span {
        display: inline-block;
        margin: 0.5rem 0 0 0.5rem;
        color: #b2b2b2;
      }
    }
    .right {
      width: 30%;
      img {
        width: 100%;
      }
    }
  }
}
.foot2 {
  z-index: 5;
  width: 100%;
  position: fixed;
  bottom: 2rem;
  background: blue;
  color: white;
  font-size: 0.7rem;
  padding-left: 2.5%;
  height: 1rem;
  transition: 1.5s;
  transform-origin: bottom center;
}
.foot1 {
  background: white;
  transform-origin: bottom center;
  transition: 1.5s;
  z-index: 5;
  position: fixed;
  bottom: 2rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  div {
    width: 24.5%;
    img {
      width: 100%;
    }
  }
}
.roate {
  transform: rotateX(90deg);
}
</style>
