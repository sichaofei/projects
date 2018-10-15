<template>
  <div class="active">
    <div class="header">
      <div class="head">
        <div class="left" @click="go()"><img src="static/img/active/czq_03.png" alt=""></div>
        <div class="center">活动</div>
        <div class="right">北京</div>
      </div>
      <div class="nav">
        <ul>
          <li @click="actives('全部')" :class="{active:active=='全部'}">全部</li>
          <li @click="actives('财富')" :class="{active:active=='财富'}">财富</li>
          <li @click="actives('健康')" :class="{active:active=='健康'}">健康</li>
          <li @click="actives('生活')" :class="{active:active=='生活'}">生活</li>
          <li @click="actives('本地')" :class="{active:active=='本地'}">本地</li>
          <li @click="actives('我的')" :class="{active:active=='我的'}">我的</li>
        </ul>
      </div>
    </div>
    <div class="con">
      <mt-tab-container v-model="active" swipeable>
        <mt-tab-container-item id="全部">
          
            <div class="all">
              <div class="banner">
                <mt-swipe :auto="4000" stopPropagation>
                  <mt-swipe-item v-for="(item,index) in banner" :key="index" title="1"><img :src="item.img" alt=""></mt-swipe-item>
                </mt-swipe>
              </div>
              <div class="z_active">
                <div class="top">
                  <span></span>主题活动</div>
                <div v-for="(item,index) in nav" :key="index" class="img">
                  <img :src="item.img" alt="">
                </div>
              </div>
              <div class="tj_active">
                <div class="top">
                  <span></span>推荐活动</div>
                <router-link :to="'/active/detail/'+item.id+'?id='+id" tag="div" class="tj" v-for="(item,index) in tj" :key="index">
                  <div class="left">
                    <h4>{{item.name}}</h4>
                    <p>{{item.title}}</p>
                    <div>
                      <span v-show="item.affiliation.lenth!=0 " v-for="(arr,index) in item.affiliation" :key="index">
                        {{arr.name}}
                      </span>
                    </div>
                  </div>
                  <div class="right ">
                    <img :src="item.img " alt=" ">
                    <div>
                      <div class="l ">{{item.person}}万人</div>
                      <div class="r ">剩{{item.time}}天</div>
                    </div>
                  </div>
                </router-link>
              </div>
            </div>
       
        </mt-tab-container-item>
        <mt-tab-container-item id="财富">
          
            <div class="tj_active">
              <router-link :to="'/active/detail/'+item.id+'?id='+id" tag="div" class="tj" v-for="(item,index) in activeChange" :key="index">
                <div class="left">
                  <h4>{{item.name}}</h4>
                  <p>{{item.title}}</p>
                  <div>
                    <span v-show="item.affiliation.lenth!=0 " v-for="(arr,index) in item.affiliation" :key="index">
                      {{arr.name}}
                    </span>
                  </div>
                </div>
                <div class="right ">
                  <img :src="item.img " alt=" ">
                  <div>
                    <div class="l ">{{item.person}}万人</div>
                    <div class="r ">剩{{item.time}}天</div>
                  </div>
                </div>
              </router-link>
            </div>
         
        </mt-tab-container-item>
        <mt-tab-container-item id="健康">
          
            <div class="tj_active">
              <router-link :to="'/active/detail/'+item.id+'?id='+id" tag="div" class="tj" v-for="(item,index) in activeChange" :key="index">
                <div class="left">
                  <h4>{{item.name}}</h4>
                  <p>{{item.title}}</p>
                  <div>
                    <span v-show="item.affiliation.lenth!=0 " v-for="(arr,index) in item.affiliation" :key="index">
                      {{arr.name}}
                    </span>
                  </div>
                </div>
                <div class="right ">
                  <img :src="item.img " alt=" ">
                  <div>
                    <div class="l ">{{item.person}}万人</div>
                    <div class="r ">剩{{item.time}}天</div>
                  </div>
                </div>
              </router-link>
            </div>
         
        </mt-tab-container-item>
        <mt-tab-container-item id="生活">
         
            <div class="tj_active">
              <router-link :to="'/active/detail/'+item.id+'?id='+id" tag="div" class="tj" v-for="(item,index) in activeChange" :key="index">
                <div class="left">
                  <h4>{{item.name}}</h4>
                  <p>{{item.title}}</p>
                  <div>
                    <span v-show="item.affiliation.lenth!=0 " v-for="(arr,index) in item.affiliation" :key="index">
                      {{arr.name}}
                    </span>
                  </div>
                </div>
                <div class="right ">
                  <img :src="item.img " alt=" ">
                  <div>
                    <div class="l ">{{item.person}}万人</div>
                    <div class="r ">剩{{item.time}}天</div>
                  </div>
                </div>
              </router-link>
            </div>
         
        </mt-tab-container-item>
        <mt-tab-container-item id="本地">
       
            <div class="tj_active">
              <router-link :to="'/active/detail/'+item.id+'?id='+id" tag="div" class="tj" v-for="(item,index) in activeChange" :key="index">
                <div class="left">
                  <h4>{{item.name}}</h4>
                  <p>{{item.title}}</p>
                  <div>
                    <span v-show="item.affiliation.lenth!=0 " v-for="(arr,index) in item.affiliation" :key="index">
                      {{arr.name}}
                    </span>
                  </div>
                </div>
                <div class="right ">
                  <img :src="item.img " alt=" ">
                  <div>
                    <div class="l ">{{item.person}}万人</div>
                    <div class="r ">剩{{item.time}}天</div>
                  </div>
                </div>
              </router-link>
            </div>
      
        </mt-tab-container-item>
        <mt-tab-container-item id="我的">
         
            <h1 v-show="activeChange.length==0">暂无数据</h1>
            <div class="tj_active">
              <router-link :to="'/active/detail/'+item.id+'?id='+id" tag="div" class="tj" v-for="(item,index) in activeChange" :key="index">
                <div class="left">
                  <h4>{{item.name}}</h4>
                  <p>{{item.title}}</p>
                  <div>
                    <span v-show="item.affiliation.lenth!=0 " v-for="(arr,index) in item.affiliation" :key="index">
                      {{arr.name}}
                    </span>
                  </div>
                </div>
                <div class="right ">
                  <img :src="item.img " alt=" ">
                  <div>
                    <div class="l ">{{item.person}}万人</div>
                    <div class="r ">剩{{item.time}}天</div>
                  </div>
                </div>
              </router-link>
            </div>
       
        </mt-tab-container-item>
      </mt-tab-container>
    </div>
  </div>
</template>
<script>
import { CellSwipe } from "mint-ui";
import Axios from "axios";
// import { TabContainer, TabContainerItem } from "mint-ui";
export default {
  data() {
    return {
      active: "全部",
      banner: [],
      nav: [],
      tj: [],
      id: "",
      activeChange: []
    };
  },
  methods: {
    go() {
      this.$router.back(-1);
    },
    actives(e) {
      console.log(e);
      this.active = e;
    }
  },
  created() {
    this.id = this.$route.params.id;
    console.log(this.id);
    Axios.get("http://localhost:9913/active/" + this.$route.params.id).then(
      res => {
        var data = res.data[0].con[0];
        this.banner = data.banner;
        this.nav = data.nav;
        this.tj = data.content;
        console.log(data);
      }
    );
    Axios.get("http://localhost:9913/active/change/?type=" + this.active).then(
      res => {
        this.activeChange = res.data;
      }
    );
  },
  watch: {
    active: {
      handler() {
        Axios.get(
          "http://localhost:9913/active/change/?type=" + this.active
        ).then(res => {
          this.activeChange = res.data;
        });
      },
      deep: true
    }
  }
};
</script>
<style scoped lang="scss">
.active {
  width: 100%;
  font-size: 0.6rem;
}
.header {
  position: fixed;
  top: 0;
  width: 100%;
  background: white;
  z-index: 5;
  padding: 0 2.5%;
  box-sizing: border-box;
  border-bottom: 1px solid #eeeeee;
}
.head {
  background: white;
  width: 100%;
  height: 2rem;
  display: flex;
  z-index: 5;
  img {
    width: 0.5rem;
  }
  .left,
  .right {
    width: 15%;
  }
  .left {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .right {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .center {
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
.nav {
  width: 100%;
  z-index: 5;
  background: white;
  ul {
    height: 1.5rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    .active {
      color: #ff721f;
      border-bottom: 3px solid #ff721f;
    }
    li {
      box-sizing: border-box;
      width: 9%;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    li:last-child {
      justify-content: flex-end;
    }
  }
}

.con {
  width: 100%;
  margin-top: 3.5rem;
}
.all {
  width: 100%;
  .banner {
    width: 95%;
    margin: 0.5rem auto;
    height: 6rem;
    img {
      width: 100%;
    }
  }
}
.top {
  width: 100%;
  height: 0.8rem;
  line-height: 0.8rem;
  margin-bottom: 0.5rem;
  span {
    margin-right: 0.5rem;
    float: left;
    display: inline-block;
    width: 0.2rem;
    height: 0.8rem;
    background: #ff721f;
  }
}
.z_active {
  width: 95%;
  margin: 0.4rem auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .img {
    width: 49%;
    img {
      width: 100%;
      display: block;
      margin-bottom: 0.3rem;
    }
  }
}
.tj_active {
  width: 95%;
  margin: 0.2rem auto;
}
.tj {
  border-top: 1px solid #eeeeee;
  padding: 0.8rem 0rem;
  width: 100%;
  display: flex;
  .left {
    width: 60%;
    padding-right: 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h4 {
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      font-size: 0.7rem;
    }
    p {
      color: #9b9b9b;
      margin: 0.3rem 0 1rem 0;
    }
    span {
      color: #9b9b9b;
      border: 1px solid #eeeeee;
      padding: 0.2rem;
      display: inline;
      text-align: center;
      margin-right: 0.3rem;
    }
  }
  .right {
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    img {
      width: 100%;
    }
    div {
      display: flex;
      height: 1rem;
      line-height: 1rem;
      div {
        width: 50%;
        color: #9b9b9b;
        display: flex;
        align-items: center;
      }
      .l {
        justify-content: flex-start;
      }
      .r {
        display: flex;
        justify-content: flex-end;
      }
    }
  }
}
</style>

