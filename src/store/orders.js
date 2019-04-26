const ORDERS_URL = "http://localhost:3500/orders"
import axios from 'axios'
export default {
    namespaced: true,
    state: {
        orders:[]
    },
    getters:{


    },
    mutations: {


    },
    actions:{
        async storeOrder(context, order) {
            order.cartLines = context.rootState.cart.lines
            return (await axios.post(ORDERS_URL, order)).data.id
        }
    }
}