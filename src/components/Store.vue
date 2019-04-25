<template>
    <div class="container-fluid">
        <div class="row">
        </div>
        <div class="row">
            <div class="col bg-dark text-white">
                <a class="navbar-brand">SPORTS STORE</a>
            </div>
        </div>
        <div class="row">
            <div class="col-3 bg-info p-2">
                <category-controls></category-controls>
            </div>
            <div class="col-9 bg-info p-2">
                <product-list></product-list>
            </div>
        </div>
    </div>
</template>

<script>
    import ProductList from "@/components/ProductList";
    import JkVueDataLoading from "./JkVueDataLoading";
    import CategoryControls from "./CategoryControls";
    export default {
        name: "MainStore",
        components: {
            CategoryControls,
            JkVueDataLoading,
            ProductList
        },
        data() {
            return {

            }
        },
        computed:{

        },

        methods: {

        },
        created() {
//            this.fetchData()
//             this.getData()
        },
        mounted (){

        }
    }
</script>

<style scoped>
#testScroll{
    height: 100px;
    overflow: scroll;
}
</style>