<template>
  <div class="cars">
    <div class="head">
      <div class="header">
        <div class="left" @click="go()"><img src="static/img/active/czq_03.png" alt=""></div>
        <div class="center">购物车</div>
        <div class="right"></div>
      </div>
    </div>
    <div class="car">
      <div class="kon" v-show="!list.length">
        <h3>你的宝马车空空如也</h3>
        <router-link to="/live" tag="button">赶紧去逛逛吧</router-link>
      </div>

      <ul v-show="list.length">
        <li v-for="(item,index) in list" :key="index">
          <div class="left">
            <img :src="item.img" alt="">
          </div>
          <div class="center">
            <h4>{{item.name}}</h4>
            <span>￥{{item.newPrice}}</span>
            <br>
            <div class="p">
              <button @click="jian(item)">-</button>
              <span>{{item.count}}</span>
              <button @click="jia(item)">+</button>
            </div>
          </div>
          <div class="right">
            <button @click="del(index)">删除</button>
          </div>
        </li>
      </ul>
    </div>
    <div class="foot" v-show="list.length">
      <div class="left">
        合计:{{zj}}元
        <span></span>
      </div>
      <div class="right">
        去结算
      </div>
    </div>
  </div>
</template>

<script>
import { MessageBox } from "mint-ui";
import { Toast } from "mint-ui";
export default {
  data() {
    return {};
  },
  computed: {
    list() {
      var user = window.localStorage.getItem("user");
      var shop = [];
      if (user) {
        if (window.localStorage.getItem(user)) {
          shop = JSON.parse(window.localStorage.getItem(user));
          this.$store.commit("fz", shop);
        }
      }

      return shop;
    },
    shop() {
      list.filter((item, index) => {});
    },
    zj() {
      return this.$store.getters.zj;
    }
  },
  methods: {
    item() {
      var shop = this.$store.state.shop;
      if (window.localStorage.getItem("user")) {
        window.localStorage.setItem(
          window.localStorage.getItem("user"),
          JSON.stringify(shop)
        );
      }
    },
    go() {
      this.$router.back(-1);
    },
    jia(a) {
      this.$store.commit("jia", a);
      this.item();
    },
    jian(a) {
      this.$store.commit("jian", a);
      this.item();
    },
    del(index) {
      MessageBox.confirm("", {
        message: "确定删除吗？",
        title: "提示",
        confirmButtonText: "确定",
        cancelButtonText: "考虑一下下"
      })
        .then(action => {
          if (action == "confirm") {
            this.$store.commit("del", index);
            // var list = this.$store.state.shop;
            // var user = window.localStorage.getItem("user");
            // window.localStorage.setItem(user, JSON.stringify(list));
            this.item();
            Toast({
              message: "删除成功",
              position: "center",
              duration: 1000
            });
          }
        })
        .catch(err => {
          if (err == "cancel") {
          }
        });
    }
  }
};
</script>

<style scoped lang="scss">
.cars {
  width: 100%;
  font-size: 0.6rem;
}
.head {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 5;
  padding: 0 2.5%;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
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
.car {
  display: flex;
  width: 100%;
  margin-top: 2rem;
  ul {
    width: 100%;
    li {
      padding: 0.5rem 0rem;
      width: 95%;
      display: flex;
      margin: 0 auto;
      border-bottom: 1px solid #f2f2f2;
    }
    .right {
      width: 20%;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      button {
        background: white;
        border: 1px solid #ccc;
        outline: none;
        padding: 0.2rem 0.3rem;
      }
    }
    .left {
      width: 30%;
      img {
        width: 100%;
      }
    }
    .center {
      display: flex;
      justify-content: center;
      flex-direction: column;
      box-sizing: border-box;
      width: 50%;
      padding-left: 0.5rem;
      > span {
        color: orangered;
      }
      button {
        outline: none;
        float: left;
        border: 1px solid #f2f2f2;
        height: 1rem;
        box-sizing: border-box;
        width: 1rem;
        background: white;
      }
      .p {
        span {
          box-sizing: border-box;
          border-bottom: 1px solid #f2f2f2;
          border-top: 1px solid #f2f2f2;
          float: left;
          width: 2rem;
          height: 1rem;
          text-align: center;
        }
        box-sizing: border-box;
        height: 1rem;
        display: inline;
      }
    }
  }
}
.kon {
  margin: 5rem auto;
  text-align: center;
  h3 {
    color: #999999;
  }
  button {
    margin-top: 0.5rem;
    border: 1px solid orangered;
    outline: none;
    background: white;
    padding: 0.2rem;
    font-weight: 600;
    color: orangered;
  }
}
.foot {
  border-top: 1px solid #f2f2f2;
  width: 100%;
  display: flex;
  position: fixed;
  bottom: 0;
  height: 2rem;
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .left {
    width: 70%;
  }

  .right {
    width: 30%;
    background: orangered;
    color: white;
  }
}
</style>
