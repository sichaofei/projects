<template>
  <div class="quan">
    <div class="head">
      <div class="header">
        <div class="left" @click="go()"><img src="static/img/active/czq_03.png" alt=""></div>
        <div class="center">
          圈子
        </div>
        <div class="right"><img src="static/img/healthycircle/1.png" alt=""><img src="static/img/healthycircle/2.png" alt=""></div>
      </div>

    </div>
    <div class="nav">
      <ul>
        <li @click="active('health')" :class="{actives:actived=='health'}">健康圈</li>
        <li @click="active('cai')" :class="{actives:actived=='cai'}">理财圈</li>
        <li @click="active('car')" :class="{actives:actived=='car'}">车主圈</li>
        <li @click="active('son')" :class="{actives:actived=='son'}">育儿圈</li>
      </ul>
    </div>
    <div class="con">
      <mt-tab-container v-model="actived" swipeable>
        <mt-tab-container-item id="health">
          <mt-cell-swiper>
            <div class="lo">
              <img src="static/img/healthycircle/5.png" alt="">
            </div>
            <div class="tiao"></div>
            <div class="health">
              <div class="top">
                <div class="left">
                  <span></span>
                  <b>健康宝箱</b>
                </div>
                <div class="right"></div>
              </div>
              <div class="nav1">
                <div v-for="(item,index) in nav" :key="index">
                  <img :src="item.img" alt="">
                </div>
              </div>
            </div>
            <div class="tiao"></div>
            <div class="tou">
              <div class="top">
                <div class="left">
                  <span></span>
                  <b>健康头条</b>
                </div>
                <div class="right">更多<img src="static/img/server/serve_25.png" alt=""></div>
              </div>
            </div>
            <div class="con1">
              <div v-for="(item,index) in con " :key="index">
                <div class="left">
                  <h5>{{item.title}}</h5>
                  <span>{{item.comment}}评论</span>
                </div>
                <div class="right"><img :src="item.img" alt=""></div>
              </div>
            </div>
          </mt-cell-swiper>
        </mt-tab-container-item>
        <mt-tab-container-item id="cai">
          <mt-cell-swiper>
            <div class="hd">
              <div class="top">
                <div class="left">
                  <b>优惠活动</b>
                </div>
                <div class="right">更多<img src="static/img/server/serve_25.png" alt=""></div>
              </div>
            </div>
            <div class="lo">
              <img src="static/img/lc/lcq_02.png" alt="">
            </div>
            <div class="lc_nav">
              <div v-for="(item,index) in lcCon" :key="index">
                <img :src="item.image" alt=""> {{item.title}}
              </div>
            </div>
            <div class="tiao"></div>
            <div class="hot_zx">
              <div class="zx_head">热门资讯</div>
              <div class="zx_nav">
                <div v-for="(item,index) in hot" :key="index">
                  <div class="left">
                    <img :src="item.image" alt="">
                  </div>
                  <div class="right">
                    <h5>{{item.title}}</h5>
                    <p> <img :src="item.hot_people" alt=""> {{item.hot_num}}人</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lc_change">
              <div class="left">换一组看看</div>
              <div class="left">查看更多</div>
            </div>
            <div class="tiao"></div>
            <div class="lc_hot">
              <div class="top">
                <div class="left">
                  <b>热销榜</b>
                </div>
                <div class="right">更多<img src="static/img/server/serve_25.png" alt=""></div>
              </div>
              <div class="lc_hotCon">
                <swiper :options="lc_hot" ref="shop ">
                  <swiper-slide v-for="(item,index) in hot_list_sell " :key="index ">
                    <img :src="item.image " alt=" ">
                    <h5>{{item.title}}</h5>
                    <span>{{item.describe}}</span>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            <div class="tiao"></div>
            <div class="lc_hot">
              <div class="top">
                <div class="left">
                  <b>新品榜</b>
                </div>
                <div class="right">更多<img src="static/img/server/serve_25.png" alt=""></div>
              </div>
              <div class="lc_hotCon">
                <swiper :options="lc_hot" ref="shop ">
                  <swiper-slide v-for="(item,index) in new_list_product " :key="index ">
                    <img :src="item.image " alt=" ">
                    <h5>{{item.title}}</h5>
                    <span>{{item.describe}}</span>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </mt-cell-swiper>
        </mt-tab-container-item>
        <mt-tab-container-item id="car">
          <mt-cell-swiper>
            <div class="car_head">
              <img src="static/img/owner/czq_07.png" alt="">
            </div>
            <div class="tiao"></div>
            <div class="car_nav">
              <ul>
                <li @click="car_active('suggest')" :class="{carActive:carStyle=='suggest'}">
                  推荐
                </li>
                <li @click="car_active('topic')" :class="{carActive:carStyle=='topic'}">
                  话题
                </li>
                <li @click="car_active('ask')" :class="{carActive:carStyle=='ask'}">
                  问答
                </li>
                <li @click="car_active('info')" :class="{carActive:carStyle=='info'}">
                  资讯
                </li>
                <li @click="car_active('attention')" :class="{carActive:carStyle=='attention'}">
                  关注
                </li>
              </ul>
            </div>
            <div class="carCon">
              <div class="car_head">
                <img src="static/img/owner/czq_10.png" alt="">
              </div>
              <div class="carNav" v-if="carStyle=='suggest'||carStyle=='topic' ||carStyle=='ask'">
                <div v-for="(item,index) in carCon" :key="index" class="lei">
                  <div class="da">
                    <h5>{{item.title}}</h5>
                    <img :src="item.owner_img" alt="" v-if="carStyle!='ask'">
                    <div class="author">
                      <div class="left">
                        <img :src="item.author.avatar_img" alt="">
                        <span>{{item.author.loginname}} </span>
                        话题
                      </div>
                      <div class="right">{{item.reply_count}}观点</div>
                    </div>
                  </div>
                  <div class="copy">
                    <div class="copy_list" v-for="(arr,index) in item.asked" :key="index">
                      <div class="copy_hea">
                        <h5> {{arr.ask_title}}</h5>
                      </div>
                      <div class="copy_con">
                        <div class="left">
                          <img src="static/img/owner/问答_03.png" alt=""> {{arr.ask_author}}
                        </div>
                        <div class="right">
                          {{arr.ask_reply}}回复
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="carZx" v-if="carStyle=='info'">
                <div>1</div>
              </div>
            </div>
          </mt-cell-swiper>
        </mt-tab-container-item>
        <mt-tab-container-item id="son">
          <mt-cell-swiper>
            <div class="hd">
              <div class="top">
                <div class="left">
                  <b>优惠活动</b>
                </div>
                <div class="right">更多<img src="static/img/server/serve_25.png" alt=""></div>
              </div>
            </div>
            <div class="lo">
              <img src="static/img/Parentingcircle/1.png" alt="">
            </div>
            <div class="lc_nav">
              <div v-for="(item,index) in sonlist" :key="index">
                <img :src="item.img" alt=""> {{item.title}}
              </div>
            </div>
            <div class="tiao"></div>
            <div class="hot_zx">
              <div class="zx_head">热门资讯</div>
              <div class="zx_nav">
                <div v-for="(item,index) in sonNav" :key="index">
                  <div class="left">
                    <img :src="item.img" alt="">
                  </div>
                  <div class="right">
                    <h5>{{item.text}}</h5>
                    <p> <img src="static/img/lc/lcq_23.png"> {{item.number}}人</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="lc_change">
              <div class="left">换一组看看</div>
              <div class="left">查看更多</div>
            </div>
            <div class="tiao"></div>
            <div class="lc_hot">
              <div class="top">
                <div class="left">
                  <b>保险热销榜</b>
                </div>
                <div class="right">更多<img src="static/img/server/serve_25.png" alt=""></div>
              </div>
              <div class="lc_hotCon">
                <swiper :options="lc_hot" ref="shop ">
                  <swiper-slide v-for="(item,index) in hot_list_sell " :key="index ">
                    <img :src="item.image " alt=" ">
                    <h5>{{item.title}}</h5>
                    <span>{{item.describe}}</span>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
            <div class="tiao"></div>
            <div class="lc_hot">
              <div class="top">
                <div class="left">
                  <b>保险新品榜</b>
                </div>
                <div class="right">更多<img src="static/img/server/serve_25.png" alt=""></div>
              </div>
              <div class="lc_hotCon">
                <swiper :options="lc_hot" ref="shop ">
                  <swiper-slide v-for="(item,index) in new_list_product " :key="index ">
                    <img :src="item.image " alt=" ">
                    <h5>{{item.title}}</h5>
                    <span>{{item.describe}}</span>
                  </swiper-slide>
                </swiper>
              </div>
            </div>
          </mt-cell-swiper>
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      actived: "healthy",
      nav: [],
      con: [],
      lcCon: [],
      hot: [],
      hot_list_sell: [],
      lc_hot: {
        slidesPerView: 2.3
      },
      new_list_product: [],
      sonNav: [],
      sonlist: [],
      head: "",
      carStyle: "suggest",
      carCon: []
    };
  },
  methods: {
    go() {
      this.$router.back(-1);
    },
    active(a) {
      this.actived = a;
    },
    car_active(a) {
      this.carStyle = a;
      Axios.get("http://localhost:9913/server/car?type=" + a).then(res => {
        this.carCon = res.data;
      });
    }
  },
  created() {
    var type = this.$route.query.type;
    this.actived = type;
    Axios.get("http://localhost:9913/server/health").then(res => {
      this.nav = res.data.treasure_box;
      this.con = res.data.headline;
    });
    Axios.get("http://localhost:9913/server/lc").then(res => {
      this.lcCon = res.data.list;
      this.hot = res.data.advise_hot;
      this.hot_list_sell = res.data.hot_list_sell;
      this.new_list_product = res.data.new_list_product;
    });
    Axios.get("http://localhost:9913/server/son").then(res => {
      this.sonNav = res.data.Popularconsultation;
      this.sonlist = res.data.nav;
    });
    Axios.get("http://localhost:9913/server/car").then(res => {
      console.log(res);
      this.carCon = res.data;
    });
  }
};
</script>

<style scoped lang="scss">
.quan {
  font-size: 0.5rem;
  .carActive {
    background: white;
    border: 1px solid #ff721f;
  }
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
.nav {
  z-index: 5;
  position: fixed;
  top: 2rem;
  background: white;
  .actives {
    border-bottom: 3px solid #ff721f;
    color: #ff721f;
  }
  width: 100%;
  margin: 0 auto;
  border-bottom: 1px solid #f2f2f2;
  ul {
    width: 95%;
    display: flex;
    margin: 0rem auto;
    justify-content: space-between;
    li {
      width: 15%;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
.con {
  margin-top: 3rem;
}
.lo {
  width: 100%;
  img {
    width: 100%;
  }
}
.tiao {
  height: 0.5rem;
  background: #f7f7f7;
  width: 100%;
  margin-top: 0.5rem;
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
    font-size: 0.5rem;
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
.health {
  width: 95%;
  margin: 0 auto;
  .nav1 {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    div {
      width: 32%;
      margin-top: 0.2rem;
      img {
        width: 100%;
      }
    }
  }
}
.tou {
  width: 95%;
  margin: 0 auto;
}
.con1 {
  border-top: 1px solid #f2f2f2;
  width: 100%;
  > div:last-child {
    border: 0;
  }
  > div {
    width: 95%;
    margin: 0.5rem auto;
    padding: 0.5rem 0rem;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
  }
  .left {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h5 {
      font-size: 0.6rem;
    }
    span {
      margin-top: 1rem;
      color: #9d9d9d;
      display: block;
      margin-top: 1rem;
    }
  }
  .right {
    img {
      width: 100%;
    }
    width: 30%;
  }
}
// 理财
.hd {
  width: 95%;
  margin: 0.5rem auto;
}
.lc_nav {
  width: 95%;
  margin: 0.5rem auto;
  display: flex;
  div {
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 1.6rem;
      margin: 0.3rem 0;
    }
  }
}
.hot_zx {
  width: 100%;
  .zx_head {
    font-weight: 600;
    width: 95%;
    margin: 0 auto;
    height: 2rem;
    line-height: 2rem;
  }
  .zx_nav {
    width: 100%;
    border-top: 1px solid #f2f2f2;
    > div:last-child {
      border: 0;
    }
    > div {
      width: 95%;
      margin: 0.2rem auto;
      border-bottom: 1px solid #f2f2f2;
      display: flex;
      padding: 0.5rem 0;
      > div {
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .left {
        width: 30%;
        img {
          width: 100%;
        }
      }
      .right {
        padding: 0 1rem;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
        width: 70%;
        h5 {
          font-size: 0.6rem;
        }
        p {
          color: #9d9d9d;
        }
        img {
          width: 0.4rem;
          margin-right: 0.3rem;
        }
      }
    }
  }
}
.lc_change {
  width: 100%;
  display: flex;
  padding: 0.5rem 0rem 0 0;
  border-top: 1px solid #f2f2f2;
  div {
    display: inline-block;
    color: #5183dc;
    font-weight: 500;
    width: 50%;
    text-align: center;
  }
  .left {
    border-right: 1px solid #f2f2f2;
  }
}
.lc_hot {
  width: 100%;
  .top {
    box-sizing: border-box;
    width: 100%;
    padding: 0.8rem 2.5%;
    border-bottom: 1px solid #f2f2f2;
  }
  .lc_hotCon {
    width: 97.5%;
    margin-left: 2.5%;
    img {
      width: 90%;
    }
    h5 {
      margin: 0.3rem 0rem;
    }
    span {
      font-size: 0.4rem;
    }
  }
}
// 车主圈
.car_head {
  width: 95%;
  margin: 0.5rem auto;
  img {
    width: 100%;
  }
}
.car_nav {
  width: 95%;
  margin: 0.5rem auto;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
    li {
      width: 12%;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #f2f2f2;
      padding: 0.2rem;
    }
  }
}
.carNav {
  width: 100%;
  margin: 0rem auto;
  .lei {
    width: 100%;
    margin: 0.5rem auto;
  }
  .da {
    h5 {
      margin: 0.5rem 0rem;
      font-size: 0.7rem;
    }
    width: 95%;
    margin: 0.5rem auto;
    > img {
      width: 100%;
    }
  }
  .author {
    width: 100%;
    display: flex;
    div {
      display: flex;
      align-items: center;
      color: #9d9d9d;
    }
    .left {
      width: 80%;
      justify-content: flex-start;
      span {
        margin: 0 0.5rem;
      }
      img {
        width: 0.6rem;
      }
    }
    .right {
      width: 20%;
      justify-content: flex-end;
    }
  }
  .copy {
    width: 100%;
    border-top: 1px solid #f2f2f2;
    > div {
      width: 95%;
      padding: 0.5rem 0rem;
      margin: 0.2rem auto;
      border-bottom: 1px solid #f2f2f2;
      .copy_hea {
        height: 1.5rem;
        line-height: 1.5rem;
        font-size: 0.6rem;
      }
      .copy_con {
        img {
          width: 0.6rem;
        }
        width: 100%;
        display: flex;
        color: #9d9d9d;
        div {
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
        }
      }
    }
  }
}
</style>

