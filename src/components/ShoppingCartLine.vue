<template>
    <tr>
        <td>
            <input type="number" class="form-control-sm"
                   style="width:5em"
                   :value="qvalue"
                   @input="sendChangeEvent" />
        </td>
        <td> {{line.product.name}}</td>
        <td class="text-right">{{ line.product.price | currency }}</td>
        <td class="text-right">
            {{ (line.quantity * line.product.price) | currency }}
        </td>
        <td class="text-center">
            <button class="btn btn-sm btn-danger" @click="sendRemoveEvent">
                Remove
            </button>
        </td>
    </tr>
</template>

<script>
    export default {
        name: "ShoppingCartLine",
        props:['line'],
        data() {
            return {
                qvalue: this.line.quantity
            }
        },
        methods:{
            sendChangeEvent($event){
                if($event.target.value >0 ){
                    this.$emit('quantity', Number($event.target.value))
                    this.qvalue = $event.target.value
                }else {
                    this.$emit('quantity', 1)
                    this.qvalue = 1
                    $event.target.value = this.qvalue
                }
            },
            sendRemoveEvent(){
                this.$emit('remove', this.line)
            }
        },
        created(){
            console.log('shopping-cart-line created')
        },
        mounted() {
            console.log('shopping-cart-line mounted')
        },
        updated(){
            console.log('shopping-cart-line updated')
        },
        destroyed() {
            console.log('shopping-cart-line destroyed')
        }
    }
</script>

<style scoped>

</style>