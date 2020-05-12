<template>
    <div class="menu-container">
        <Menu v-bind:list="data" v-bind:has-split="false" />
        <Menu v-bind:list="data[0].child" v-bind:has-split="true" />
    </div>

</template>


<style lang="scss" scoped>
    .menu-container{
        display:flex;
        justify-content: flex-start;
        align-items: flex-start;
        background:rgba(255,255,255,1);
        border:1px solid rgba(234,236,237,1);
        border-radius: 3px;
        margin-left:115px;
    }

</style>


<script>
    import Menu from "./Menu";

    export default {
        components:{
            Menu
        },
        data(){
            return {};
        },
        props:{
            data:Array
        },
        computed:{

        },
        methods:{

        },
        mouted(){
            console.log('data>>>',this.data);
        }
    }


</script>