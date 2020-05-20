/*********************
**** 通用函数 *********
*********************/



/**************************************************
格式化列表类数据
列表类组件 item 基本数据格式为{id:1, text:"名称", icon:"xxx/xxx.png" }
*******************************************************/
function formatListData(listData){
    if(!(listData instanceof Array)){
        console.log('formatListData error,param listData is not an array');
        return [];
    }

    listData = listData.map(function(item){
        item.id = item.id||item.value||'';
        item.text = item.cn_name;//todo：按中英文选择cn_name en_name
        item.icon = item.icon||item.img||'';

        if(item.child&&item.child.length){
            item.child = formatListData(item.child);
        }

        return item;
    });

    return listData;
}


function dateTimeFormat(date,formatStr,frag){
    if(typeof(date)=='string'){
        date = date.replace(/\-/g,'/');
    }else{
        date = date*1;
    }
    
    date = new Date(date);
    if(!date){
        return date+'';
    }

    let parseInfo = {
        y:date.getFullYear(),
        m:date.getMonth(),
        d:date.getDate(),
        w:date.getDay(),
        h:date.getHours(),
        i:date.getMinutes(),
        s:date.getSeconds(),
        c:date.getMilliseconds(),
        z:date.getTimezoneOffset()/60,
    }
   
    formatStr = formatStr||'%y/%m/%d %h:%i:%s';
    frag = !!frag||true;//默认两位数日期数字

    return formatStr.replace(/%([ymdwhiscz])/gi,function(m,c){
        let n = parseInfo[c];
        if(c=='m'){//月份
            n = n+1;
        }else if(('mdhis').indexOf(c)>-1){//两位格式
            if(frag&&n<10){
                n = '0'+n;
            }
        }else if(c=='w'){
            n = '星期'+('日一二三四五六').charAt(n);
        }
       
        return n;
    });
}


/**
 * 按全角计算文字的长度,2个半全角算1个长度
 * @param 输入文字
 * @return 文字长度
 */
function getFullWidthLength(str) {
    str = ''+str;
    if(!str){ return 0; }

    let len        = str.length;
    let charCode   = -1;
    let realLength = 0;
    
    for ( let i = 0; i < len; i++) {
        charCode = str.charCodeAt(i);

        if (charCode >= 0 && charCode <= 254) {
            // 0-255中的全角文字，依次对应下面的字符
            // ¢ , £ , § , ¨ , « , ¬ , ¯ , ° , ± , ´ , µ , ¶ , · , ¸ , » , × , ÷
            if (charCode == 162
                    || charCode == 163
                    || charCode == 167
                    || charCode == 168
                    || charCode == 171
                    || charCode == 172
                    || charCode == 175
                    || charCode == 176
                    || charCode == 177
                    || charCode == 180
                    || charCode == 181
                    || charCode == 182
                    || charCode == 183
                    || charCode == 184
                    || charCode == 187
                    || charCode == 215
                    || charCode == 247) {
                realLength += 2;
            } else {
                realLength += 1;
            }
        } else if (charCode >= 65377 && charCode <= 65439) {
            if (charCode == 65381) { // '･'该字符的长度为两个字节
                realLength += 2;
            } else {
                realLength += 1;
            }
        } else {
            realLength += 2;
        }
    }
    return realLength;
}



//存token
function setToken(token,profile){
    let user_id = profile.user_info.user_id;
    let user_name = profile.user_info.user_name;
    let clientToken = 'DATA '+btoa(user_id+':'+user_name+':'+token);
    localStorage.setItem('Token',clientToken);

    return {
        token:clientToken,
        profile:profile
    }
}

//取token
function getToken(){
    return localStorage.getItem('Token')||'';
}

//退出登录,清除用户信息
function delToken(){
    localStorage.removeItem('Token');
}

//判断是从站内跳转到本页
function isInSite(){
    let reg = new RegExp("^"+location.protocol+'//'+location.host);
    return reg.test(document.referrer);
}

//客户端语言
function getLang(){
    let langList = ['zh-CN','en-US'];
    let lang = localStorage.getItem('lang')||navigator.language;
    if(langList.indexOf(lang)==-1){
        lang = 'zh-CN';
    }

    return lang;
}
function setLang(component,lang){
    localStorage.setItem('lang',lang||'zh-CN');
    component.$i18n.locale = lang;
}

//格式化价格千分位
function formatPrice(n){
    n= (n||0).toString();
    n = n.split('.');
    n[0] = n[0].replace(/(\d)(?=(\d{3})+\b)/g,"$1,");
    return n.join('.')*1;
}


//常用数据校验
const validator = {
    isNum(str,n){
        let reg;
        if(n){
            reg = new RegExp('^\\d{'+n+'}$');
        }else{
            reg = /^\d+$/;
        }

        return reg.test(str);
    },
    isCNChar(str){
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
    }
}




export {
    setToken,
    getToken,
    delToken,
    isInSite,
    getLang,
    setLang,
    dateTimeFormat,
    getFullWidthLength,
    formatPrice,
    formatListData,
    validator
}