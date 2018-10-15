import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
Vue.use(Vuex)
let store = new Vuex.Store({
    state: {
        list: [],
        car: []
    },
    mutations: {
        getlist(state, a) {
            state.list = a
        },
        add(state, item) {
            console.log(item)
            item.count += 1

        },
        del(state, item) {
            if (item.count > 0) {
                item.count -= 1
            }

        }
    },
    getters: {
        car(state) {
            var arr = []
            state.list.forEach((item, index) => {
                if (item.count > 0) {
                    arr.push(item)
                }
            })
            return arr
        },
        zj(state) {
            var str = 0
            state.list.forEach((item, index) => {
                str += Number(item.price) * Number(item.count)
            })
            return str
        },
        show(state) {
            var a = false
            a = state.list.every((item, index) => {
                return item.count == 0
            })
            return a
        }
    },
    actions: {
        lists(context) {
            Axios({
                method: 'get',
                url: "../../static/list.json"
            }).then((res) => {
                console.log(res)
                console.log(res)
                context.commit("getlist", res.data.list)
            })
        }
    }
})
export default store