<template>
    <div class="drop-wrap" v-bind:style="widthStyle" v-bind:data-width="this.width">
        <div class="drop-value" @click="trigger()"  v-bind:data-defaulttext="defaulttext">
            <div class="drop-value-text">
                <span class="drop-item-icon" v-bind:style="iconBg" v-if="prefix"></span>
                <span class="drop-item-text" >{{value&&value.text||defaulttext}}</span>
            </div>
            <span class="arrow-down"></span>
        </div>

        <ul class="drop-menu" v-show="showMenu&&list.length>0" v-bind:data-value="$attrs.value">
            <li v-for="(item,i) in list" 
                v-bind:key="item.id"  
                v-bind:data-index="i"
                v-bind:data-value="item.id"
                v-bind:data-text="item.text"
                v-bind:data-icon="item.icon"
                v-model = "value"
                class="drop-menu-item"
                @click="onselect(item)"
                >

                <div class="drop-item-text" v-bind:title="item.text">
                    <span class="drop-item-icon" v-bind:style="item.icon|listIconBg" v-if="prefix"></span>
                    <span class="drop-item-text" >{{item.text}}</span>
                </div>
            </li>
        </ul>

    </div>
</template>


<style lang="scss" scoped>
    $dropHeight:40px;

    .arrow-down{
        margin-right:10px;
        display: inline-block;
        width:10px;
        height:10px;
        background-image: url(~@assets/images/icon/arrow-down.png);
    }
    .drop-item-icon{
        display: inline-block;
        width:20px;
        height: 20px;
        margin-right: 5px;
        background-size: contain;
        background-position: center;
        background-repeat:no-repeat;

    }
    .drop-item-text{
        @include ol;
    }
    .drop-wrap{
        position: relative;
        display: inline-block;
        width:100%;
        height:$dropHeight;
        border:1px solid #EAECED;
        @include default-radius;

        .drop-value{
            display:flex;
            justify-content: flex-end;
            align-items: center;
            line-height: $dropHeight;
            height: 100%;
            background:linear-gradient(180deg,rgba(251,252,252,1) 0%,rgba(217,221,224,1) 100%);
            
            .drop-value-text{
                display:flex;
                justify-content: flex-start;
                align-items: center;
                cursor: default;
                flex:1;
                padding: 10px;
            }
        }



        .drop-menu{
            position: absolute;
            width: 100%;
            top:$dropHeight;
            z-index: 1;
            background-color: $bgwhite;
            @include default-border;
            @include default-shadow;

            .drop-menu-item{
                display:flex;
                justify-content: flex-end;
                align-items: center;
                line-height: 30px;
                height: 30px;
                font-weight: 300;
                border-bottom: 1px dotted $borderColor;
                overflow: hidden;
                &:last-child{
                    border:none;
                }

                .drop-item-text{
                    display:flex;
                    justify-content: flex-start;
                    align-items: center;
                    cursor: default;
                    flex:1;
                    padding: 10px;

                    span{
                        padding: 0;
                    }
                }

            }



        }

    }




</style>


<script>
    
    export default {
        components:{},
        props:{
            prefix:Boolean,//选项带有前缀小图标
            list:Array,
            defaulttext:String, //组件初始化默认显示的文本
            defaultselected:Number,//默认选中第几项，优先于defaulttext
            name:String,
            width:String,
            height:String 
        },
        data(){
            return {
                value:'',//选中的项,暂时只处理单选
                icon:'',
                showMenu:false
            };
        },
        computed:{
            widthStyle(){
                let styleMap = {};
                if(this.width){
                    styleMap.width = this.width=='auto'?'auto':(this.width+'px');
                }

                return styleMap;
            },
            iconBg(){
                let styleMap = {};
                if(this.icon){
                    styleMap['background-image'] = 'url('+this.icon+')';
                }
                return styleMap;
            },

            defaultIndex(){
                let n = this.defaultselected*1>>0;
                if(n>=this.list.length){
                    n = this.list.length-1;
                }
                return n;
            }
        },
        filters: {
          listIconBg: function (iconUrl) {
            let styleMap = {};
            if(iconUrl){
                styleMap['background-image']='url('+iconUrl+')';
            }
            return styleMap;
          }
        },
        methods:{
            trigger(frag){
                this.showMenu = !this.showMenu;
            },
            onselect(item){
                this.trigger();
                this.value = item;
                this.$emit('update-value',this.name,item);
                this.$emit('input',item);
            }
        },
        created(){
            if(!(this.list instanceof Array)){
                console.log('error,list for DropList.vue is not an array');
            }

            if(this.$attrs.value){
                this.value = this.$attrs.value;
                this.icon = this.value.icon;

            }else if(this.defaultIndex&&this.list.length){
                let item  = this.list[this.defaultIndex];
                this.value = item;
                this.icon = this.value.icon;

            }
        },
        updated(){
            if(this.$attrs.value){
                this.value = this.$attrs.value;
                this.icon = this.value.icon;

            }else if(this.defaultIndex&&this.list.length){
                let item  = this.list[this.defaultIndex];
                this.value = item;
                this.icon = this.value.icon;
            }
        }

    }


</script>