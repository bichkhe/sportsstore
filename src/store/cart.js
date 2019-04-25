
export default {
    namespaced: true,
    state: {
        lines:[]
    },
    getters:{
        itemCount: state => state.lines.reduce((total, line) => total + line.quantity, 0),
        totalPrice: state => state.lines.reduce((total, line) => total + (line.quantity * line.product.price), 0),

    },
    mutations: {
        addProduct(state, product) {

            let line = state.lines.find(line => line.product.id == product.id)
            if (line != null) {
                line.quantity++
            } else {
                state.lines.push({product: product, quantity: 1})
            }
            localStorage.setItem('cart', JSON.stringify(state.lines))
        },
        changeQuantity(state, update) {
            update.line.quantity = update.quantity
        },
        removeProduct(state, lineToRemove) {
            let index = state.lines.findIndex(line => line == lineToRemove)
            if (index > -1){
                state.lines.splice(index, 1)
            }
        },
        setCartData(state, data) {
            console.log('call1')
            state.lines = data;
        }

    },
    actions:{
        /**
         * load data from local storage
         */
        loadCartData(context){
            let data = localStorage.getItem('cart')
            console.log(data)
            if (data != null){
                context.commit('setCartData', JSON.parse(data))
            }
        },
        /**
         * Save data to local storage
         */
        storeCartData(context){
            console.log('save cart to local storage')
            localStorage.setItem('cart', JSON.stringify(context.state.lines))

        },
        initalizeCartData(context, store){
            // context.dispatch('storeCartData')
            context.dispatch('loadCartData')
            store.watch( state => state.cart.lines, () => context.dispatch('storeCartData'), {deep: true})

        }
    }
}