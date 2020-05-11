/*
* 通用函数
*/


//判断是从站内跳转到本页
function isInSite(){
    let reg = new RegExp("^"+location.protocol+'//'+location.host);
    return reg.test(document.referrer);
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
function setToken(token,client){
    let clientToken = 'DATA '+btoa(client.uid+':'+client.user_name+':'+token);
    localStorage.setItem('Token',clientToken);

    let profile = {
        token:clientToken,
        uid:client.uid,
        user_name:client.user_name,
        ...client.profiles
    }

    return profile;
}

//取token
function getToken(){
    return localStorage.getItem('Token')||'';
}

//退出登录,清除用户信息
function delToken(){
    localStorage.removeItem('Token');
}


export {
    setToken,
    getToken,
    delToken,
    isInSite,
    getLang,
    setLang,
    dateTimeFormat,
    getFullWidthLength
}