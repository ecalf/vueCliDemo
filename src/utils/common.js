/*
* 通用函数
*/

function dateTimeFormat(date,formatStr,frag){
    if(typeof(date)=='string'){
        date = date.replace(/\-/g,'/');
    }else{
        date = date*1;
    }
    var date = new Date(date);
    if(!date){
        return date+'';
    }

    var parseInfo = {
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
        var n = parseInfo[c];
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



export {
    getLang,
    setLang,
    dateTimeFormat
}