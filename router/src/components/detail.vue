<template>
    <div class="detai">
        <p>{{detail.id}}</p>
        <p>{{detail.name}}</p>
        <p>{{detail.age}}</p>
    </div>
</template>
<script>
let list = [
  { id: 1, name: "scf1", age: 18 },
  { id: 2, name: "scf2", age: 18 },
  { id: 3, name: "scf3", age: 18 },
  { id: 4, name: "scf4", age: 18 }
];
export default {
  data() {
    return {
      list,
      detail: {}
    };
  },
  created() {
    let id = this.$route.params.id;
    this.detail = this.list.filter((item, index) => {
      return item.id == id;
    })[0];
  }
};
</script>
<style>
</style>

