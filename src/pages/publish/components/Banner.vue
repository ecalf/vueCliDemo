<template>
    <ul class="banner-wrap">
        <li v-for="item in list" class="banner-item">
            {{item.id}}:{{item.text}}
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
            height: 100px;
            border-radius: 3px;
            background-color: #fff;
        }
    }

    

</style>

<script>
export default {
    components:{},
    data(){
        return {};
    },
    props:{
        list:Array
    },
    computed:{

    },
    methods:{

    }

}

</script>