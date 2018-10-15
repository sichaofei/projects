<template>
    <div class="shop">
        <ul>
            <router-link tag="li" :to="/xq/+item.id" v-for="(item,index) in list" :key="index">
                <span>{{item.id}}</span>
                <span>{{item.name}}</span>
                <span>{{item.age}}</span>
            </router-link>
        </ul>
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
      list
    };
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
li {
  height: 50px;
  list-style: none;
  line-height: 50px;
  border-bottom: 1px solid red;
}
span {
  margin-right: 80px;
}
</style>

