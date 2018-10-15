<template>
    <div class="reg">
        <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
        <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
        <div class="btn">
            <mt-button type="default" @click="reg()">注册</mt-button>
        </div>
    </div>
</template>

<script>
import Axios from "axios";
export default {
  data() {
    return {
      username: "12",
      password: "3"
    };
  },
  methods: {
    reg() {
      Axios.get(
        "http://localhost:9913/reg?username=" +
          this.username +
          "&password=" +
          this.password
      ).then(res => {
        if (res.data == 1) {
          this.$router.push("/login");
        } else {
          alert(res.data);
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.reg {
  width: 80%;
  margin: 2rem auto;
  .btn {
    margin: 2rem 0rem;
  }
}
</style>