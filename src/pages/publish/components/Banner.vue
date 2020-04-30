<template>
    <ul>
        <li v-for="item in list">
            {{item.id}}:{{item.title}}
        </li>
       
    </ul>
</template>


<style scoped>
    
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