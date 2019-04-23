<template>
    <div>
        <div v-for="p in products" :key="p.id" class="card m-1 p01 bg-light">
            <h4>
                {{p.name}}
                <span class="badge badge-pill badge-primary float-right">
                    {{p.price || currency}}
                </span>
            </h4>
            <div class="card-text bg-white p-1"> {{ p.description }}</div>
        </div>
        <page-controls />
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import PageControls from '@/components/PageControls.vue'
    export default {
        name: "ProductList",
        components: {
          PageControls
        },
        update(){
            console.log('update from product list')
        },
        computed: {
            ...mapGetters({
                products: 'processedProducts'
            })
        },
        filters :{
            currency(value){
                return new Intl.NumberFormat("en-US",
                    {
                        style:'currency', currency:'USD'
                    }).format(value)
            }
        }
    }
</script>

<style scoped>

</style>