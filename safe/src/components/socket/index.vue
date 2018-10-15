<template>
  <div class="chat">
    <div class="header">
      <div class="left"><img src="static/img/active/czq_03.png" alt="" @click="go()"></div>
      <div class="right">消息</div>
    </div>
    <div class="nav">
      <ul>
        <li v-for="(item,index) in list" :key="index">
          <div class="left">
            {{item.user}}
          </div>
          <div class="right">
            {{item.message}}
          </div>
        </li>
      </ul>
    </div>
    <div class="foot">
      <div class="left">
        <input type="text" v-model="message">
      </div>
      <div class="right">
        <button @click="send()">发送</button>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
var wss = new WebSocket("ws://localhost:8081");

wss.binaryType = "arraybuffer";

export default {
  data() {
    return {
      message: "",
      list: [],
      user: "",
      num: ""
    };
  },
  created() {
    var that = this;
    if (window.localStorage.getItem("user")) {
      this.user = JSON.parse(window.localStorage.getItem("user"));
    }
    wss.onopen = function(e) {
      console.log(e);
     
    };
    wss.onmessage = function(e) {
      console.log(JSON.parse(e.data));
      that.list.push(JSON.parse(e.data));
    };
  },
  methods: {
    send() {
      wss.send(JSON.stringify({ user: this.user, message: this.message }));
    },
    go() {
      this.$router.back(-1);
    }
  }
};
</script>
<style scoped lang="scss">
.chat {
  width: 100%;
  font-size: 0.6rem;
}
.header {
  width: 100%;
  height: 2rem;
  position: fixed;
  line-height: 2rem;
  background: white;
  z-index: 5;
  top: 0;
  border-bottom: 1px solid #999999;
  text-align: center;
  display: flex;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    width: 20%;
    img {
      width: 0.5rem;
    }
  }
  .right {
    width: 80%;
  }
}
.foot {
  background: white;
  border-top: 1px solid;
  width: 100%;
  position: fixed;
  bottom: 0;
  height: 2rem;
  display: flex;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .left {
    width: 80%;
    input {
      width: 90%;
      height: 1.5rem;
      border: 1px solid #999999;
    }
  }
  .right {
    width: 20%;
    button {
      height: 1.5rem;
      width: 60%;
      width: 100%;
      border: 0;
      background: #f2f2f2;
    }
  }
}
.nav {
  width: 100%;
  margin-top: 3rem;
  ul {
    width: 95%;

    li {
      width: 100%;
      display: flex;
      .left {
        width: 20%;
      }
      .right {
        width: 80%;
      }
    }
  }
}
</style>
