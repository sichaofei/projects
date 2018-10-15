<template>
  <div class="chat">
    <div class="header">
      聊天室
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
var wss = new WebSocket("ws://localhost:8081");
wss.binaryType = "arraybuffer";
wss.onopen = function(e) {
  console.log("Connection to server opened");
};
wss.onmessage = function(e) {
  console.log(e);
};
export default {
  data() {
    return {
      message: "",
      list: [],
      user: ""
    };
  },
  created() {
    if (window.localStorage.getItem("user")) {
      this.user = window.localStorage.getItem("user");
    }
  },
  methods: {
    send() {
      wss.send(this.message);
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
}
.foot {
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
</style>
