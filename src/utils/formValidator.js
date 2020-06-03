/**********************
    表单验证类，未完成
***********************/
export default class FormValidator {
    constructor(parent,bindKey,rules){
        this.parent = parent;
        this.bindKey = bindKey;
        this.rules = rules;
        this.fields = this.findField(parent,bindKey);
    }

    //找出组件中绑定表单的元素：<tag {bindKey}={fieldName} />
    findField(com,bindKey){ 
        let fields={};
        com.$children.forEach((child)=>{
           if(child.$attrs[bindKey]){
                fields[child.$attrs[bindKey]] = child;
           }else{
               fields = {...fields,...this.findField(child,bindKey)};
           }
        });

       return  fields;
    }

    validate(fieldName){
        const params = {};
        const errorInfo = {};
        const rules = this.rules;


        for(let key of Object.keys(rules)){
            if(fieldName&&key!=fieldName){
                continue;
            }

            let fieldConfig = rules[key];
            let required = !!fieldConfig.required;
            let label = fieldConfig.label;
            let value = fieldConfig.value;
            let validate = fieldConfig.validate;
            let msg = fieldConfig.errMsg;
            let dataType = fieldConfig.type||String;
            let errMsg = '';

            //get value
            if(typeof(value)=='function'){
                try{
                    value = value();
                }catch(error){ 
                    value = new dataType().valueOf();
                    errMsg = msg||(label+'数据异常');
                }
            }
            params[key] = value;

            //validate value
            if(required&&!value){
                errMsg = msg||(label+'不能为空');
            }else if(value&&validate){
                if(validate instanceof RegExp){
                    let reg = validate;
                    validate = function(value){
                        return reg.test(value);
                    }
                }

                let rsl = validate(value);
                if(rsl===false||rsl.state===false){
                    errMsg = rsl.errMsg||msg;
                }
            }


            //cache errMsg
            if(errMsg){
                errorInfo[key] = errMsg;
            }

            //console.log(key,errMsg,this.fields,this.fields[key]);


            //show errMsg
            if(this.fields[key]){
                if(errMsg){
                    this.fields[key].showError(errMsg);
                }else{
                    this.fields[key].clearError();
                }
            }

        }//end for



        return {
            params:params,
            errorInfo:errorInfo,
            state:Object.keys(errorInfo).length==0
        }
    }

    clear(fieldName){
        for(let key in this.fields){
            if(fieldName&&fieldName!=key){
                continue;
            }

            this.fields[key].clearError();
        }
    }

    setRules(rules){
        this.rules = rules;
    }


}
