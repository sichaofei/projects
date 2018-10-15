<template>
  <div class="hello">
    <slot name="header"></slot>
    <table>
      <tr>
        <td>name</td>
        <td>price</td>
        <td>count</td>
        <td>操作</td>
      </tr>
      <tr v-for="(item,index) in list" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.count}}</td>
        <td v-show="!item.count">
          <button @click="add(item)">加入购物车</button>
        </td>
        <td v-show="item.count">
          <button @click="add(item)">+</button>
          <button @click="del(item)">-</button>
        </td>
      </tr>
    </table>
    <h1>购物车</h1>
    <table v-show="!show">
      <tr>
        <td>name</td>
        <td>price</td>
        <td>count</td>
        <td>操作</td>
      </tr>
      <tr v-for="(item,index) in car" :key="index">
        <td>{{item.name}}</td>
        <td>{{item.price}}</td>
        <td>{{item.count}}</td>
        <td v-show="!item.count">
          <button @click="add(item)">加入购物车</button>
        </td>
        <td v-show="item.count">
          <button @click="add(item)">+</button>
          <button @click="del(item)">-</button>
        </td>
      </tr>
    </table>
    总价：
    <span>{{zj}}</span>

  </div>
</template>

<script>
import login from './logon'
export default {
  data() {
    return {};
  },
  component:{
    login
  },
  methods: {
    add(item) {
      return this.$store.commit("add", item);
    },
    del(item) {
      return this.$store.commit("del", item);
    }
  },
  computed: {
    list() {
      return this.$store.state.list;
    },
    car() {
      return this.$store.getters.car;
    },
    zj() {
      return this.$store.getters.zj;
    },
    show() {
      return this.$store.getters.show;
    }
  },
  created() {
    this.$store.dispatch("lists");
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
table {
  width: 80%;
  margin: 0 auto;
  border: 1px solid #ccc;
  td {
    height: 50px;
    border-bottom: 1px solid #ccc;
  }
}
</style>
