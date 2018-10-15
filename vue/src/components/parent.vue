<template>
    <div>
        父组件:
        <input type="text" v-model="name">
        <br>
        <br>
        <!-- 引入子组件 -->
        <child :inputName="name" @msg="msg1"></child>
    </div>
</template>
<script>
import bus from "../store/bus.js";
import child from "./child";
export default {
  components: {
    child
  },
  data() {
    return {
      name: ""
    };
  },
  methods: {
    msg1(a) {
      this.name = a;
    }
  },
  mounted() {
    let that = this;
    bus.$on("bus", data => {
      that.name = data;
    });
  }
};
</script>
