<template>
    <div id="testScroll" ref="test" >
        <p>
            có thể viết javascript trên webview thông qua hàm loadUrl. Trong ví dụ trên chúng ta sẽ lấy chiều cao của body content sau đó trả về hàm onHeight dòng 65
            Ở trong onHeight (…) chúng ta sẽ tạo ra 1 thẻ div mới sau đó append nó vào thẻ có id = main, tại đây sẽ hiển thị thông số chiều cao tại hàm onHeight trả về.
        </p>
        <p>
            có thể viết javascript trên webview thông qua hàm loadUrl. Trong ví dụ trên chúng ta sẽ lấy chiều cao của body content sau đó trả về hàm onHeight dòng 65

            Ở trong onHeight (…) chúng ta sẽ tạo ra 1 thẻ div mới sau đó append nó vào thẻ có id = main, tại đây sẽ hiển thị thông số chiều cao tại hàm onHeight trả về.
        </p>
        {{ scrollTopH}}
    </div>

</template>

<script>
    export default {
        name: "JkScroll",
        name: "MainStore",
        components: {
            CategoryControls,
            JkVueDataLoading,
            ProductList
        },
        data() {
            return {
                list: [],
                loading: false,
                completed: false,
                page: 1,
                scroll1 : 0
            }
        },
        computed:{
            scrollTopH: function () {
                return this.scroll1;
            }
        },

        methods: {
            fetchData() {
                this.loading = true
                setTimeout(() => {
                    if (this.page > 5) {
                        this.completed = true
                        this.loading = false
                        return
                    }
                    const temp = []
                    for (let i = this.list.length + 1; i <= this.list.length + 50; i++) {
                        temp.push(i)
                    }
                    this.list = this.list.concat(temp)
                    this.loading = false
                }, 1000)
            },
            pullUp() {
                this.fetchData()
                this.page++
            },
            pullDown() {
                this.list = []
                this.page = 1
                this.completed = false
                this.fetchData()
            },
            infiniteScroll() {
                this.fetchData()
                this.page++
            },

            scrollContent(e){
                console.log('1232323');
                let {top, right, bottom, left } = this.$refs.test.getBoundingClientRect()
                console.log(this.$refs.test.scrollHeight)
                console.log(this.$refs.test.scrollTop)
                console.log(bottom + ':' + top)
            }
        },
        created() {
//            this.fetchData()
        },
        mounted (){
            let {top, right, bottom, left } = this.$refs.test.getBoundingClientRect()

            console.log(this.$refs.test)


            console.log(this.$refs.test.scrollHeight)
            this.$refs.test.addEventListener('scroll', this.scrollContent)
            let container  =   this.$el.querySelector("#testScroll");
            this.scroll1= this.$refs.test.scrollTop
            // console.log(container.scroll1)
            console.log('top:' + top + ' right: ' + right + ' bottom: ' + bottom)

            this.$refs.test.scroll(0, 0)
            // this.$refs.test.scrollTo(10)

        }
    }
</script>

<style scoped>

</style>