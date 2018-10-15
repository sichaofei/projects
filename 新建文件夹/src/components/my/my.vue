<template>
  <div class="my">
    <div class="my_head">
      <div class="lf_img">
        <img src="static/img/my/my_03.png" alt="">
      </div>
      <div class="head_cen">
        <p>
          <router-link tag="b" to="/login" v-show="user==''">请登录</router-link>
        </p>
        <p v-show="user">{{user}}
          <span @click="out()">退出登录</span>
        </p>
      </div>
      <div class="rh_img">
        <img src="static/img/my/my_06.png" alt="">
      </div>
    </div>
    <div class="nav">
      <div class="nav_con" v-for="(item,index) in navArr" :key="index">
        <img :src="item.image" alt="">
        <span>{{item.words}}</span>
      </div>
    </div>
    <div class="acc">
      <div class="acc_cen">
        <p class="head_p">
          <b> 旺财账户</b>
        </p>
        <div class="acc_con">
          <div class="con_lf">
            <span class="span1">七日年收益</span>
            <p>
              <b>4.0750%</b>
            </p>
            <span class="span2">立即开户</span>
          </div>
          <div class="con_rh">
            <img src="static/img/my/my_27.png" alt="">

          </div>
        </div>
      </div>
    </div>
    <div class="asset">
      <div class="asset_cen">
        <div class="cen_head">
          <p>
            <b>我的资产</b>
          </p>
          <span>
            <b>全部</b>
          </span>
        </div>
        <div class="asset_con" v-for="(i,index) in asserArr" :key="index">
          <img :src="i.imgag" alt="">
          <div class="con_font">
            <span>
              <b>{{i.title}}</b>
            </span>
            <p>{{i.decri}}</p>
            <img src="static/img/lc/lcq_33.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="asset">
      <div class="asset_cen">
        <div class="cen_head">
          <p>
            <b>其他</b>
          </p>
        </div>
        <div class="asset_con" v-for="(i,index) in otherArr" :key="index">
          <img :src="i.image" alt="">
          <div class="con_font">
            <span>
              <b>{{i.words}}</b>
            </span>
            <img src="static/img/lc/lcq_33.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="height"></div>

    <!-- <img src="static/img/my/my_03.png" alt=""> -->
  </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      navArr: [],
      asserArr: [],
      otherArr: [],
      user: ""
    };
  },
  created() {
    Axios.get("http://localhost:9913/my").then(res => {
      this.navArr = res.data.banner_list;
      this.asserArr = res.data.my_assets;
      this.otherArr = res.data.other;
    });
    this.user = window.localStorage.getItem("user").replace(/"/g, "");
  },
  methods: {
    out() {
      window.localStorage.setItem("user", "");
      this.user = "";
      this.$store.commit("clear");
    }
  }
};
</script>

<style lang='scss' scoped>
.my {
  .my_head {
    width: 93%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    height: 4rem;
    border-bottom: 0.025rem solid #eeeeee;
    .lf_img {
      img {
        width: 2.8rem;
      }
    }
    .head_cen {
      width: 40%;
      line-height: 0.9rem;
      margin: 0 auto;
      p {
        font-size: 0.85rem;
        letter-spacing: 0.1rem;
      }
      span {
        font-size: 0.55rem;
      }
    }
    .rh_img {
      img {
        width: 4.5rem;
      }
    }
  }
  .nav {
    display: flex;
    align-items: center;
    .nav_con {
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
      width: 20%;
      height: 3.5rem;
      img {
        width: 30%;
        margin: 0.2rem 0rem;
      }
      span {
        font-size: 0.46rem;
        color: #999999;
      }
    }
  }
  .acc {
    border-top: 0.35rem solid #f7f7f7;
    .acc_cen {
      width: 93%;
      margin: 0 auto;
      .head_p {
        font-size: 0.6rem;
        margin: 0.8rem 0rem;
      }
      .acc_con {
        display: flex;
        align-items: center;
        .con_lf {
          width: 60%;
          line-height: 1.5rem;
          .span1 {
            font-size: 0.5rem;
            letter-spacing: 0.1rem;
          }
          p {
            font-size: 1.4rem;
            color: #ff6060;
            font-family: Arial, Helvetica, sans-serif;
          }
          .span2 {
            font-size: 0.5rem;
            color: #8f8f8f;
          }
        }
        .con_rh {
          width: 40%;
          img {
            width: 100%;
          }
        }
      }
    }
  }
  .asset {
    border-top: 0.35rem solid #f7f7f7;
    margin-top: 0.3rem;
    .asset_cen {
      width: 93%;
      margin: 0 auto;
      .cen_head {
        display: flex;
        align-items: center;
        height: 2rem;
        position: relative;
        p {
          font-size: 0.6rem;
        }
        span {
          font-size: 0.55rem;
          color: #3979be;
          position: absolute;
          right: 0;
        }
      }
      .asset_con {
        display: flex;
        align-items: center;
        height: 2.5rem;
        img {
          width: 1.1rem;
          margin-right: 0.5rem;
        }
        .con_font {
          display: flex;
          align-items: center;
          height: 2.5rem;
          position: relative;
          width: 100%;
          border-top: 0.03rem solid #f7f7f7;
          span {
            font-size: 0.55rem;
            letter-spacing: 0.05rem;
          }
          p {
            font-size: 0.5rem;
            position: absolute;
            right: 1.3rem;
            letter-spacing: 0.05rem;
          }
          img {
            width: 0.3rem;
            position: absolute;
            right: 0;
          }
        }
      }
    }
  }
}
</style>
