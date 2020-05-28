import {formatPrice,dateTimeFormat} from "@utils/common";

export default {
    filters:{
        useWay(type){
            return (type+'').indexOf(1)>-1?'医用':'民用'
        },

        formatPrice(price){
            return formatPrice(price||0);
        },

        formatDate(date){
            return dateTimeFormat(date,'%y.%m.%d');
        },

        price(item){
            //"type": 1, //类型 类型：1 发布采购 2 发布销售 3 委托销售 4 委托购买'
            let p;
            if(item.type==2){
                p = item.supplier_price;
            }else if(item.type==1){
                p = item.price;
            }

            return p&&('￥'+formatPrice(p));
        }
    }
}