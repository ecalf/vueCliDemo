export function checkform(fieldData,pageType){
    let errMsg = '';
    const params = {};
    const paramsConfig = {
        type:{
            label:fieldData.entrust?'委托类型':'发布类型',
            remark:'发布类型 required, 1 发布采购 2 发布销售 3 委托销售 4 委托采购  ',
            required:true,
            type:Number,
            value:()=>{//使用箭头写法让 value 方法内可以通过 this 访问组件
                return fieldData.entrust&&fieldData.entrust.id||pageType;
            }    
        },
        cate_id:{
            label:'品类',
            remark:'品类id',
            required:true,
            type:Number,
            value:()=>{
                return fieldData.category[fieldData.category.length-1].id;
            }
        },
        title:{
            label:'标题',
            remark:'标题,String',
            required:true,
            type:String,
            value:fieldData.title
        },
        desc:{
            label:'描述',
            remark:'描述',
            required:true,
            type:String,
            value:fieldData.desc
        },
        
        
        use_way:{
            label:'用途',
            remark:"用途id， 1 医用 2 民用,选中多个id用逗号隔开",
            required:true,
            type:String,
            value:()=>{
                return fieldData.usage.map((item)=>{
                    return item.id;
                }).join();
            }
        },
        exit_country:{
            label:'出口国家',
            remark:'出口国家 销售可出口国/采购进口国',
            required:false,
            type:String,
            value:fieldData.country
        },

        
        
        brand_id:{
            label:'品牌',
            remark:'选择的品牌ID',
            required:true,
            type:Number,
            value:()=>{
                return fieldData.brand.id;
            }
        },
        other_brand:{
            label:'其他品牌',
            remark:'输入的其他品牌名称',
            required:false,
            type:String,
            value:fieldData.otherBrand
        },
        price:{
            label:'市场价',
            remark:'发布销售/发布采购/委托采购/委托销售 市场价',
            required:true,
            type:Number,
            value:fieldData.price
        },
        supplier_price:{
            label:'供应商价',
            remark:'供应商价，仅用于 发布销售',
            required:pageType==2,
            type:Number,
            value:fieldData.supplierPrice
        },
        num:{
            label:'数量',
            remark:'销售或采购的数量',
            required:true,
            type:Number,
            value:fieldData.quantity
        },
        unit_cate_id:{
            label:'单位',
            remark:'单位id',
            required:true,
            type:Number,
            value:()=>{
                return fieldData.unit.id;
            }
        },
        qualification:{
            label:"资质要求",
            remark:'产品的相关认证种类id,多个认证种类用id逗号隔开',
            required:true,
            type:String,
            value:()=>{
                return fieldData.qualification.map((item)=>{
                    return item.id;
                }).join();
            }
        },
       
        images:{
            label:'图片信息',
            remark:'上传的图片,技术、产品、企业、其他，多张图片路劲逗号隔开',
            required:true,
            type:String,
            value:()=>{
                return [fieldData.techImg,fieldData.productImg,fieldData.companyImg,fieldData.otherImg].join(',')
            }
        },
        info:{
            label:"电脑端描述",
            remark:"用于PC端的富文本描述",
            required:true,
            type:String,
            value:fieldData.richDesc
        },

        dead_time:{
            label:'截止时间',
            remark:'该发布消息有效的截止时间,年/月/日',
            required:true,
            type:String,
            value:fieldData.deadtime
        },
        service_id:{
            label:'增值服务',
            remark:'选择的增值服务id,多个id用逗号隔开',
            required:false,
            type:String,
            value:()=>{
                return fieldData.service.map((item)=>{
                    return item.id;
                }).join()
            }
        }
    }



    for(let key of Object.keys(paramsConfig)){
        let required = paramsConfig[key].required;
        let label = paramsConfig[key].label;
        let value = paramsConfig[key].value;
        let dataType = paramsConfig[key].type;

        if(typeof(value)=='function'){
            try{
                value = value();
            }catch(error){ 
                value = new dataType().valueOf();
            }
        }

        if(required&&!value){
            console.log(label,'required ',required,value);
            errMsg = label+'必须填写';
            break;
        }

        params[key] = value;
    }


    return {
        params:params,
        errMsg:errMsg,
        state:!errMsg
    }
}

