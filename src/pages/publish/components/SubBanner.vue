<template>
    <ul class="banner-wrap">
        <li v-for="item in list" class="banner-item">
            <a v-bind:href="item.url">
                <img v-bind:src="'https://admin.scm.wanheglobal.com/'+item.image" v-bind:alt="item.desc||''" />
            </a>
        </li>
       
    </ul>
</template>


<style lang="scss" scoped>
    .banner-wrap{
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        margin: 30px auto 28px;

        .banner-item{
            display: block;
            width: 280px;
            height: 101px;
            border-radius: 3px;
            background-color: #fff;

            a,img{
                display: inline-block;
                width:100%;
                height: 100%;
            }
        }
    }

    

</style>

<script>
import { getBannerList } from "@api/news";

export default {
    components:{},
   
    props:{
        type:String
    },
    data(){
        return {
            list:[]
        };
    },
    computed:{

    },
    methods:{
        async getBannerList(){
            //type 1 首页banner 2 分类banner
            const res = await getBannerList({data:{ad_type_name:this.type}});
            if(res.code==200){
                this.list = res.data;
            }else{
                this.$message({
                    showClose: true,
                    message: res.message,
                    type: "error"

                });
            }
        }
    },
    created(){
        this.getBannerList();
    }

}

</script>