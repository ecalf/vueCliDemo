
const idCardVerify = (function(){
    //身份证校验函数
    //用法 idCardVerify('13072719840805463X');
    function IdCardValidate(idCard) { 
        idCard = idCard.toString().replace(/\s+/g, "");//去掉字符串空格                     
        if (idCard.length == 15) {   //进行15位身份证的验证   
            return isValidityBrithBy15IdCard(idCard);        
        } else if (idCard.length == 18) {   
            let a_idCard = idCard.split(""); // 得到身份证数组   
            if(isValidityBrithBy18IdCard(idCard)&&isTrueValidateCodeBy18IdCard(a_idCard)){   
                //进行18位身份证的基本验证和第18位的验证
                return true;   
            }else {   
                return false;   
            }  
        } else {   
            return false;   
        }
    }   

    /**  
    * 判断身份证号码为18位时最后的验证位是否正确  
    * @param a_idCard 身份证号码数组  
    * @return  
    */  
    function isTrueValidateCodeBy18IdCard(a_idCard) { 
        let Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];    // 加权因子   
        let ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];  // 身份证验证位值.10代表X   
        
        let sum = 0;   // 声明加权求和变量   
        if (a_idCard[17].toLowerCase() == 'x') {   
            a_idCard[17] = 10;         // 将最后位为x的验证码替换为10方便后续操作   
        }   
        for ( let i = 0; i < 17; i++) {   
            sum += Wi[i] * a_idCard[i];            // 加权求和   
        }   
        
        let valCodePosition = sum % 11;                // 得到验证码位置   
        if (a_idCard[17] == ValideCode[valCodePosition]) {   
            return true;   
        } else {   
            return false;   
        }
    }

    /**  
    * 验证18位数身份证号码中的生日是否是有效生日  
    * @param idCard 18位书身份证字符串  
    * @return  
    */  
    function isValidityBrithBy18IdCard(idCard18){   
        let year =  idCard18.substring(6,10);   
        let month = idCard18.substring(10,12);   
        let day = idCard18.substring(12,14);   
        let temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
        // 这里用getFullYear()获取年份，避免千年虫问题   
        if(temp_date.getFullYear()!=parseFloat(year)   
        ||temp_date.getMonth()!=parseFloat(month)-1   
        ||temp_date.getDate()!=parseFloat(day)){   
            return false;   
        }else{   
            return true;   
        }  
    }   

    /**  
    * 验证15位数身份证号码中的生日是否是有效生日  
    * @param idCard15 15位书身份证字符串  
    * @return  
    */  
    function isValidityBrithBy15IdCard(idCard15){   
        let year =  idCard15.substring(6,8);   
        let month = idCard15.substring(8,10);   
        let day = idCard15.substring(10,12);   
        let temp_date = new Date(year,parseFloat(month)-1,parseFloat(day));   
        // 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法   
        if(temp_date.getYear()!=parseFloat(year)   
            ||temp_date.getMonth()!=parseFloat(month)-1   
            ||temp_date.getDate()!=parseFloat(day)){   
            return false;   
        }else{
            return true;   
        }   
    }   
    
    
    return IdCardValidate;

})();




function luhmCheck(cardNum){//银行卡号校验: 比较旧了，新卡号情况未核实，慎用
    cardNum = (cardNum+'').replace(/\s+/g,'');
    if(!(/^\d{16,19}$/).test(cardNum)){
        console.log('is not a bank card number');
        return false;
    }

    let numbers = cardNum.split('').reverse();
    let sum = 0;
    for(let i=0;i<numbers.length;i++){
        if(i%2==0){
            sum+=numbers[i]*1;
        }else{
            sum+=numbers[i]*2>9?numbers[i]*2-9:numbers[i]*2;
        }
    }

    return sum%10==0;
}



//常用数据校验
const validator = {
    isNum(str,min,max){//校验数字
        let reg;
        if(min>=0&&max>=0){//最少min个，最多max个
            reg = new RegExp('^\\d{'+min+','+max+'}$');
        }else if(min>=0&&max==-1){//min个以上
            reg = new RegExp('^\\d{'+min+',}$');
        }else if(min>=0){//min个
            reg = new RegExp('^\\d{'+min+'}$');
        }else{//1个以上
            reg = /^\d+$/;
        }

        return reg.test(str);
    },
    isPrice(str){//价格
        let reg = /^\d+(?:\.\d*)?$/;
        return reg.test(str);
    },
    isCNChar(str){//中文字符
        let reg = /^[\u4e00-\u9fa5]+$/;
        return reg.test(str);
    },
    isMobile(str){//手机
        let reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },

    isPhone(str){//座机
        let reg = /^(\d3,4|\d{3,4}-)?\d{7,8}$/;
        return reg.test(str);
    },
    isTel(str){//电话
        return this.isMobile(str)||this.isPhone(str);
    },
    isEmail(str){
        let reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
        return reg.test(str);
    },
    isUrl(str){
        let reg = /^(?:https?:)?\/\/([\w-]+\.)+[\w-]+(\/[\w-./?%&=]*)?$/;
        return reg.test(str);
    },
    isIdCard(idCard){//校验身份证
        return idCardVerify(idCard);
    },
    isBankCard(bankCard){//校验银行卡号,大部分16或19位，少数17,18位
        return luhmCheck(bankCard);
    },
    isLicense(license){//校验营业执照 15或18位
        let reg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/;
        return reg.test(license);
    }
}





export default validator;

