<template>
  <div class="login">
    <mt-field label="用户名" placeholder="请输入用户名" v-model="username"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" v-model="password"></mt-field>
    <div class="btn">
      <mt-button type="default" @click="login()">登陆</mt-button>
    </div>

  </div>
</template>

<script>
import { Toast } from "mint-ui";
import Axios from "axios";
export default {
  data() {
    return {
      username: "",
      password: "",
      route: "",
      show: true
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      console.log(vm);
      // 通过 `vm` 访问组件实例,将值传入oldUrl
      vm.oldUrl = from.path;
    });
  },
  mounted() {
    // $nextTick 是在下次 DOM 更新循环结束之后执行延迟回调
    this.$nextTick(() => {
      // 验证是否获取到了上页的url
      /* eslint-disable no-console */
      console.log(this.oldUrl);
      this.route = this.oldUrl;
    });
  },
  methods: {
    login() {
      Axios.get(
        "http://localhost:9913/login?username=" +
          this.username +
          "&password=" +
          this.password
      ).then(res => {
        if (res.data == "用户名不存在" || res.data == "密码错误") {
          Toast({
            message: res.data,
            position: "center",
            duration: 1000
          });
        } else {
          if (this.route == "/reg") {
            this.$router.push("/");
          } else {
            this.$router.push(this.route);
          }
          window.localStorage.setItem("user", JSON.stringify(res.data));
        }
      });
    }
  }
};
</script>

<style scoped lang="scss">
.login {
  width: 80%;
  margin: 2rem auto;
  .btn {
    margin: 2rem 0rem;
  }
}
</style>
