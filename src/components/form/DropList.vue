<template>
    <div class="drop-wrap" v-bind:style="widthStyle">
        <div class="drop-value" @click="trigger()" v-bind:data-value="value" v-bind:data-defaulttext="defaulttext">
            <div class="drop-value-text">
                <span class="drop-item-icon" v-bind:style="iconBg" v-if="prefix"></span>
                <span class="drop-item-text" v-bind:style="widthStyle">{{text}}</span>
            </div>
            <span class="arrow-down"></span>
        </div>
        <ul class="drop-menu" v-show="showMenu&&list.length>0">
            <li v-for="(item,i) in list" 
                v-bind:key="item.id"  
                v-bind:data-index="i"
                v-bind:data-value="item.id"
                v-bind:data-text="item.text"
                v-bind:data-icon="item.icon"
                class="drop-menu-item"
                @click="onselect(item)"
            >
                <div class="drop-item-text" v-bind:title="item.text">
                    <span class="drop-item-icon" v-bind:style="item.icon|listIconBg" v-if="prefix"></span>
                    <span class="drop-item-text" v-bind:style="widthStyle">{{item.text}}</span>
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
                text:'',
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
                return {
                    'background-image':'url('+this.icon+')'
                }
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
            return {
                'background-image':'url('+iconUrl+')'
            } 
          }
        },
        methods:{
            trigger(frag){
                this.showMenu = !this.showMenu;
            },
            onselect(item){
                this.trigger();
                this.renderValue(item);
            },
            renderValue(item){
                this.value = item;
                this.text = item.text;
                this.icon = item.icon;
                this.$emit('update-value',this.name,item);
            }
        },
        created(){
            if(!(this.list instanceof Array)){
                this.list = [];
                console.log('error,list for DropList.vue is not an array');
            }

            if(this.defaulttext){
                this.text = this.defaulttext;
            }else if(this.list.length){
                let item  = this.list[this.defaultIndex];
                this.renderValue(item);
            }
        },
        updated(){
            if(!this.defaulttext&&!this.selected&&this.list.length){
                //用于组件初始化没数据，更新列表数据时默认选中的情况
                console.log('updated renderValue');
                let item  = this.list[this.defaultIndex];
                this.renderValue(item);

            }
        }

    }


</script>