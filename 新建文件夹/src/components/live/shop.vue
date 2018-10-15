<template>
  <div class="shop">
    <div class="head">
      <div class="header">
        <div class="left">
          <router-link to="/live"><img src="static/img/active/czq_03.png" alt=""></router-link>
        </div>
        <div class="center">{{detail.name}}</div>
        <div class="right"></div>
      </div>
    </div>
    <div class="top">
      <img :src="detail.img" alt="">
    </div>
    <div class="nav">
      <h3>{{detail.name}}</h3>
      <p>
        <span>￥{{detail.newPrice}}元</span>
        <del>￥{{detail.oldPrice}}元</del>
      </p>
    </div>
    <div class="foot">
      <div class="left">
        <div>
          <img src="static/img/server/serve_03.png" alt=""> 在线咨询
        </div>
        <router-link to="/shopCar" tag="div" class="car">
          购物车
          <span v-show="num">{{num}}</span>
        </router-link>
      </div>
      <div class="right">
        <button @click="add(detail)">加入购物车</button>
        <button>立即购买</button>
      </div>
    </div>
  </div>
</template>

<script>
import Axios from "axios";
import { MessageBox } from "mint-ui";
export default {
  data() {
    return {
      detail: {},
      show: false,
      num: ""
    };
  },
  created() {
    let id = this.$route.params.id;
    Axios.get("http://localhost:9913/live/" + id).then(res => {
      console.log(res);
      this.detail = res.data[0];
    });

    if (window.localStorage.getItem("user") != "") {
      var user = window.localStorage.getItem("user");
      if (window.localStorage.getItem(user)) {
        var arr = JSON.parse(window.localStorage.getItem(user));
        this.$store.commit("fz", arr);
      }
    }
    this.shopNum();
  },
  methods: {
    go() {
      this.$router.back(-1);
    },
    shopNum() {
      var a = [];
      if (window.localStorage.getItem("user")) {
        if (window.localStorage.getItem(window.localStorage.getItem("user"))) {
          a = JSON.parse(
            window.localStorage.getItem(window.localStorage.getItem("user"))
          );
        }
      }
      this.num = a.length;
    },
    add(data) {
      if (window.localStorage.getItem("user") == "") {
        MessageBox.confirm("", {
          message: "请登录",
          title: "提示",
          confirmButtonText: "去登陆",
          cancelButtonText: "取消"
        })
          .then(action => {
            if (action == "confirm") {
              this.$router.push("/login");
            }
          })
          .catch(err => {
            if (err == "cancel") {
            }
          });
      } else {
        this.$store.commit("add", data);
        var shop = this.$store.state.shop;
        var user = window.localStorage.getItem("user");
        if (user) {
          // var arr = window.localStorage.getItem(user);
          // this.$store.commit("fz", arr);
          window.localStorage.setItem(user, JSON.stringify(shop));
          this.shopNum();
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.shop {
  width: 100%;
  font-size: 0.5rem;
}
.top {
  margin-top: 2.2rem;
  img {
    width: 100%;
  }
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
  .center {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70%;
    display: flex;
    font-size: 0.7rem;
    justify-content: center;
    align-items: center;
  }
}
.foot {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 2rem;
  display: flex;
  .left {
    width: 40%;
    display: flex;
    .car {
      position: relative;
    }
    span {
      position: absolute;
      top: 0.2rem;
      right: 0.5rem;
      background: orangered;
      color: white;
      text-align: center;
      padding: 0.1rem 0.3rem;
      border-radius: 2rem;
    }
    div {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 0.5rem;
      }
    }
  }
  .right {
    width: 60%;
    display: flex;
    button {
      width: 50%;
      border: 0;
      color: white;
      box-sizing: border-box;
    }
    button:first-child {
      background: orange;
    }
    button:nth-child(2) {
      background: orangered;
    }
  }
}
.nav {
  width: 95%;
  margin: 0.5rem auto;
  h3 {
    font-size: 0.7rem;
  }
  p {
    margin: 0.5rem 0rem;
    font-size: 0.7rem;
  }

  span {
    color: orangered;
  }
  del {
    margin-left: 0.5rem;
    color: #9b9b9b9b;
  }
}
</style>
