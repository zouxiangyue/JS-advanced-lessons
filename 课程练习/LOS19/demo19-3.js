//日期格式(无时间)
console.log(new Date('2018'))
console.log(new Date('2018-05'))
console.log(new Date('2018-05-08'))
/*
Mon Jan 01 2018 08:00:00 GMT+0800 (中国标准时间)
Tue May 01 2018 08:00:00 GMT+0800 (中国标准时间)
Tue May 08 2018 08:00:00 GMT+0800 (中国标准时间)
 */

console.log(new Date(2018))
console.log(new Date(2018,05))
console.log(new Date(2018,05,08))//同上

//时间格式(T代表时间,Z代表时区信息)和时间
console.log(new Date('2018-05-08T20:20'))//console.log(new Date('2018-05-08 20:20'))
console.log(new Date('2018-05-08T20:20:08'))
console.log(new Date('2018-05-08 20:20:08.88'))
console.log(new Date('2018-05-08T20:20:08Z'))

//时间的比较与运算(转换为毫秒进行)从1970年1月1日00:00:00开始计算
console.log(new Date('2018-05-08T20:20:08')-new Date('2018-05-07T20:20:08'))
// 86400000
console.log(new Date('2018-05-08T20:20:08').getTime()-new Date('2018-05-07T20:20:08').getTime())
//86400000
console.log(new Date('2018-05-08T20:20:08')>new Date('2018-05-07T20:20:08'))//true
console.log(new Date('2018-05-08T20:20:08')+new Date('2018-05-07T20:20:08'))
console.log(new Date(new Date('2018-05-08T20:20:08').getTime()+24*60*60*1000))
//Wed May 09 2018 20:20:08 GMT+0800 (中国标准时间)