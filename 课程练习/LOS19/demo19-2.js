//Date的静态方法
//now(),getTime(),parse()//返回距离1970年1月1日的毫秒数
Date.now();//1525781489998

Date().getTime();//报错
(new Date()).getTime();//525781578003

Date.parse('2018-5-8 20:16');//1525781760000
Date.parse('2018-5-8');//1525708800000

Date.UTC(2018,5,8);//1528416000000//给指定的日期转化为毫秒

//Date()的原型方法
//getDate():日期几号
//getDay():星期几
var d=new Date('2018-05-08');
console.log(d.getDate(),d.getDay(),d.getFullYear(),d.getHours(),d.getMilliseconds(),d.getMinutes(),d.getMonth(),d.getSeconds(),d.getTime())
//8 2 2018 8 0 0 4 0 1525737600000

//setDate() 方法根据本地时间来指定一个日期对象的天数
d.setDate(11);//把日期改为11号
console.log(d.getDate(),d.getDay(),d.getFullYear(),d.getHours(),d.getMilliseconds(),d.getMinutes(),d.getMonth(),d.getSeconds(),d.getTime())

//Date原型方法 转成字符串相关
var d = new Date(2012,3,21,15,7,23,234);
console.log(d.toTimeString(),"___",d.toLocaleTimeString());
console.log(d.toDateString(),"___",d.toLocaleDateString());
console.log(d.toJSON());
// 15:07:23 GMT+0800 (中国标准时间) ___ 下午3:07:23
// Sat Apr 21 2012 ___ 2012/4/21
// 2012-04-21T07:07:23.234Z