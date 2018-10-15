<template>
    <div class="login">
           <button @click="btn()">登录</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      route: ""
    };
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      // 通过 `vm` 访问组件实例,将值传入oldUrl
      vm.oldUrl = from.path;
    });
  },
  mounted() {
    this.$nextTick(() => {
      // 验证是否获取到了上页的url
      /* eslint-disable no-console */
      console.log(this.oldUrl);
      this.route = this.oldUrl;
    });
  },
  methods: {
    btn() {
      localStorage.setItem("name", JSON.stringify("scf"));
      this.$router.push(this.route);
    }
  }
};
</script>

<style>
</style>
