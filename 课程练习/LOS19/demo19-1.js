//创建data对象:new date()

//UTC 协调世界时间 Coordinated Universal Time
//GMT 格林尼治时间 （北京时间是正8时区） Greenwich Mean Time
//月0-11，日：1-31，时：0-23，分：0-59，秒：0-59，毫秒：0-999

console.log(typeof Date);//function
console.log( Date instanceof Object);//true
console.log( Date instanceof Date);// false

//var d=new Date()
var now=new Date();
console.log(now);//现在的时间

//var d=new Date(milliseconds)//millisecods:毫米数
//d= 1970 年 1 月 1 日+milliseconds的时间
var d1=new Date(0)
console.log(d1)//Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)
var d1=new Date(24*60*60*1000);//在1970 年 1 月 1 日+一天
console.log(d1);//Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)

//var d=new Date(dateString)//参数字符串,注意字符串的格式
var d2=new Date('Jan 01 1970 08:00:00');
console.log(d2)//Thu Jan 01 1970 08:00:00 GMT+0800 (中国标准时间)
var d2=new Date('Fri Jan 02 1970 08:00:00')
console.log(d2)//Fri Jan 02 1970 08:00:00 GMT+0800 (中国标准时间)
var d2=new Date('1970-03-04');
console.log(d2)//Wed Mar 04 1970 08:00:00 GMT+0800 (中国标准时间)

//var d=new Date(year, month, day, hours, minutes, seconds, milliseconds)
var d3=new Date(79,4,13,7,34,50,8);//默认19几年
console.log(d3);//Sun May 13 1979 07:34:50 GMT+0800 (中国标准时间)
var d3=new Date(2009,4,13,7,34,50,8);
console.log(d3);//Wed May 13 2009 07:34:50 GMT+0800 (中国标准时间)
var d3=new Date(2008,3,4)//省略的参数默认为0
console.log(d3);//Wed Mar 04 1970 08:00:00 GMT+0800 (中国标准时间

//有无new
var d=new Date()
console.log(d,typeof d);
var d=Date()
console.log(d,typeof(d))
//Mon May 07 2018 15:28:44 GMT+0800 (中国标准时间) "object"
//Mon May 07 2018 15:28:44 GMT+0800 (中国标准时间) string

//无效Date
console.log(Date('ajfk'));// Mon May 07 2018 15:30:18 GMT+0800 (中国标准时间)
console.log(new Date('ajfk'));//Invalid Date
console.log(new Date(NaN));//Invalid Date