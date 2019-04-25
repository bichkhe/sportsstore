import Vue from 'vue'
import  Vuex from 'vuex'
import axios from 'axios'
import CartModule from './cart'

Vue.use(Vuex)
const testData = [];
for (let i = 1; i <= 20; i++) {
    testData.push({        id: i, name: `Product #${i}`, category: `Category ${i % 3}`,
        description: `This is Product #${i}`, price: i * 50    })
}


const  productsUrl = 'http://localhost:3500/products'
const  categoriesUrl = 'http://localhost:3500/categories'

export default new Vuex.Store({
    strict: true,
    modules:{
        cart :CartModule
    },
    state: {
        products: testData,
        productsTotal: testData.length,
        currentPage :1,
        pageSize: 2,
        currentCategory: "All",
        categoriesData:[]
    },
    getters:{
        productsFilteredByCategory: state => state.products.filter(
            p => state.currentCategory == "All" ||
                p.category == state.currentCategory
        ),
        processedProducts: (state, getters) => {
            console.log('processedProducts')
            let index = (state.currentPage -1) * state.pageSize
            return getters.productsFilteredByCategory.slice(index, index + state.pageSize)
        },
        pageCount : (state, getters) => Math.ceil(getters.productsFilteredByCategory.length/state.pageSize),
        categories: state => ["All", ... state.categoriesData]


    },
    mutations: {
        setCurrentPage(state, page){
            console.log('setCurrentPage' + page)
            state.currentPage = page
        },
        setPageSize(state, size){
            console.log('setPageSize')
            state.pageSize = size
            state.currentPage = 1
        },
        setCurrentCategory(state, category){
            state.currentCategory = category
            state.currentPage = 1;
        },
        setData(state, data){
            state.products = data.pdata
            state.productsTotal =data.pdata.length
            state.categoriesData = data.cdata.sort()
        }
    },
    actions: {
        setCurrentCat(context, payload){
            context.commit('setCurrentCategory', payload)
        },
        async getData(context){
            let pdata = (await axios.get(productsUrl)).data
            let cdata = (await axios.get(categoriesUrl)).data
            context.commit('setData', {pdata, cdata})
        }
    }
})