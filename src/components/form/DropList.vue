<template>
    <div class="drop-wrap">
        <div class="drop-value" @click="trigger()" v-bind:data-value="value">
            <div class="drop-value-text">
                <span class="drop-item-icon" v-bind:style="iconBg" v-if="prefix"></span>
                <span>{{text}}</span>
            </div>
            <span class="arrow-down"></span>
        </div>
        <ul class="drop-menu" v-show="showMenu" @click="selected($event)">
            <li v-for="(item,i) in list" 
                v-bind:key="item.id"  
                v-bind:data-index="i"
                v-bind:data-value="item.id"
                v-bind:data-text="item.text"
                v-bind:data-icon="item.icon"

                class="drop-menu-item drop-value">
                <div class="drop-value-text">
                    <span class="drop-item-icon" v-if="prefix"></span>
                    <span>{{item.text}}</span>
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
        
        background-color: black;

    }
    .drop-wrap{
        position: relative;
        display: inline-block;
        width:205px;
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
            height:$dropHeight; 
            top:$dropHeight;
            z-index: 1;

        }

    }




</style>


<script>
    
    export default {
        components:{},
        props:{
            prefix:Boolean,//选项带有前缀小图标
            list:Array,
            defaultvalue:String,
            defaulttext:String,

        },
        data(){
            return {
                value:'',
                text:'',
                icon:'',
                showMenu:false
            };
        },
        computed:{
            iconBg(){
                return {
                    'background-image':'url('+this.icon+')'
                }
            }
        },
        methods:{
            trigger(){
                this.showMenu = !this.showMenu;
            },
            selected(e){
                let target = e.target;
                do{
                    target = target.parentNode;
                }while(target.tagName!='LI'&&target.tagName!='UL');

                this.text = target.dataset.text;
                this.value = target.dataset.value;
                if(this.prefix){
                    this.icon = target.dataset.icon;
                }
                
            
                this.trigger();
            }
        },
        created(){
            if(!this.defaulttext){
                this.value = this.defaultvalue;
                this.text = this.defaulttext;
            }else{
                this.value=this.list[0].value;
                this.text=this.list[0].text;
            }
            
        }
        


    }


</script>