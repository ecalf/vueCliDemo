<template>
    <FieldWrap 
        type="text"
        v-bind:label="label"
        v-bind:count="value.length"
        v-bind:width="width" 
        v-bind:height="height"
        v-bind:labelwidth="labelwidth"
        >
            <span class="text">{{value}}</span>
    </FieldWrap>

</template>


<style lang="scss" scoped>
.text{
    flex:1;
    padding:0 10px;
}
</style>


<script>
    import FieldWrap from  "./FieldWrap.vue";


    export default {
        components:{
            FieldWrap
        },
        props:{
            text:String
        },
        data(){
            return {
                value:''
            }
        },
        methods:{

        },
        created(){
            this.value = this.$attrs.value||this.text||'';
        }
    }


</script>