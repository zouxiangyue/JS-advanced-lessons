//ES6中对Array的扩展
//Array.from()//可将一个类数组转化为数组
Array.from([1,2,'a'])//(3) [1, 2, "a"]
Array.from('from')//(4) ["f", "r", "o", "m"]
Array.from({a:1,b:2,c:3})//[]
Array.from(null)//报错
Array.from(undefined)//报错
