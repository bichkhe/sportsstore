<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand"> SPORTS STORE</a>
            </div>
        </div>
        <div class="row">
            <div class="col mt-2">
                <h2 class="text-center">Your Cart</h2>
                <table class="table table-bordered table-striped p-2">
                    <thead>
                    <tr>
                        <th>Quantity</th>
                        <th>Product</th>
                        <th class="text-right">Price</th>
                        <th class="text-right">Subtotal</th>
                    </tr>
                    </thead>
                    <tbody>
                        <tr v-if="lines.length == 0">
                            <td colspan="4" class="text-center">
                                Your cart is empty
                            </td>
                        </tr>
                    <cart-line v-for="line in lines" :key="line.product.id"
                        :line="line"
                         @quantity="handleQuantityChange(line, $event)"
                               @remove="Remove(line)"
                    >
                    </cart-line>
                    </tbody>
                    <tfoot v-if="lines.length >0 ">
                        <tr>
                            <td colspan="3" class="text-right">Total:</td>
                            <td class="text-right">
                                {{totalPrice | currency}}
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <div class="text-center">
                    <router-link to="/" class="btn btn-secondary m-1">
                        Continue Shopping
                    </router-link>
                    <router-link to="/checkout" class="btn btn-primary m-1"
                        @disabled="lines.length==0">
                        Checkout
                    </router-link>
                </div>
            </div>
        </div>
        <div class="row">
            {{data}}
        </div>
    </div>

</template>

<script>
    import ShoppingCartLine from '@/components/ShoppingCartLine'
    import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
    export default {
        name: "ShoppingCart",
        components: {
            CartLine: ShoppingCartLine
        },
        data(){
            return {
                data: '123232'
            }
        },
        computed: {
            ...mapState( { lines: state => state.cart.lines}),
            ...mapGetters({totalPrice: "cart/totalPrice"})
        },
        methods: {
            ...mapMutations({
                change: 'cart/changeQuantity',
                remove: 'cart/removeProduct'
            }),
            ...mapActions({
                getData: 'getData',
                initalizeCartData: 'cart/initalizeCartData'
            }),
            handleQuantityChange(line, $event){
                this.change({line, quantity: $event})
            },
            Remove(index){
                this.remove(index)
            }
        },
        created(){
            console.log('shopping-cart created')
            this.initalizeCartData(this.$store)
            console.log(  document.querySelector('.navbar-brand'))//not ok, is null

        },
        mounted() {
            console.log('shopping-cart mounted')
            console.log(  document.querySelector('.navbar-brand'))//ok
            console.log(this.$router)
            console.log(this.$store)
            this.data = '1323'
        },
        updated(){
            console.log('shopping-cart updated')
        },
        destroyed() {
            console.log('shopping-cart destroyed')
        },
        watch:{
            data: () => {
                    return '1232'
            }
        }
    }
</script>

<style scoped>

</style>