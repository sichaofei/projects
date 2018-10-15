import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export default new Vuex.Store({
    state: {
        shop: []
    },
    mutations: {
        add(state, shop) {
            if (state.shop.length == 0) {
                state.shop.push(shop)
                shop.count += 1
            } else {
                let a = state.shop.filter((item, index) => {
                    return item.id == shop.id
                })
                console.log(a)
                if (a.length == 0) {
                    state.shop.push(shop)
                    shop.count += 1
                } else {
                    a[0].count += 1
                }
            }
        },
        jia(state, shop) {
            shop.count += 1
        },
        jian(state, shop) {
            if (shop.count > 1) {
                shop.count -= 1
            }
        },
        fz(state, shop) {
            state.shop = shop
        },
        clear(state) {
            state.shop = []
        },
        del(state, index) {
            state.shop.splice(index, 1)
        }
    },
    getters: {
        zj(state) {
            let a = 0
            state.shop.map((item, index) => {
                a += Number(item.newPrice) * Number(item.count)
            })
            return a.toFixed(2)
        }
    }

})