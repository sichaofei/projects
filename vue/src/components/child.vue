<template>
    <div>
        子组件:
        <span>{{inputName}}</span>
        <button @click="childMsg">子传父</button>
        <button @click="bus">bus</button>
    </div>
</template>
<script>
import bus from '../store/bus.js'
export default {
  // 接受父组件的值
  props: {
    inputName: String,
    required: true
  },
  methods: {
    childMsg() {
      this.$emit("msg", "子传父");
    },
    bus(){
        bus.$emit("bus",'bus')
    }
  }
};
</script>

