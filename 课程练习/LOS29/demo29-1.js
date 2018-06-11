//ES6对String的扩展
//for  of 遍历字符串 //返回字符
for (let i of 'abcdef'){
    console.log(i)
}
for (var k of [1,2,3]){
    console.log(k)//1 2 3
}
for (var j of  {a:1,b:2}){//报错 //for of 对对象不使用
    console.log(j)
}
//for in //返回下标
for(var j in 'abcdef'){
    console.log(j)//0 1 2 3 4 5
}
for(var n in [1,2,3,4]){
    console.log(m)//0 1 2 3
}
for (var j in  {a:1,b:2}){
    console.log(j)// a b
}

//ES6提供新的方法用于查找,判断和生成新的字符串
//includes() 方法用于判断一个字符串是否包含在另一个字符串中，返回true或false。
let str='hello World!';
str.includes('hello');//true
str.includes('World',5)//true
str.includes('World',8)//false
//等价于 /Hello/.test(str);

//在数组中
let arr=[1,2,3];
arr.includes(1);//true
arr.include(2,2)//false

//startsWith()// 在指定位置匹配,是否位于开头,返回true or false
//不是数组的方法
str.startsWith('Hello')//true
//等价于 /\bHello/i.test(str)  /^Hello/i.test(str)
str.startsWith('W')//false
str.startsWith('W',6)//true
str.startsWith('W',5)//false
str.startsWith('!',5)//false

//endsWith()//与startsWith相反
str.endsWith('Hello')//false
str.endsWith('World')//false
str.endsWith('World!')//true
str.endsWith('World!',7)//false //在下标为7之前的字符结束
str.endsWith('World!',12)//true
str.endsWith('W',7)//true
//等价于 /world!\b/i or  /world!$/i

//repeat()//将一个字符串重复n次返回
'a'.repeat(4);//"aaaa"
//为小数,向下取整
'a'.repeat(4.3);//"aaaa"
'a'.repeat(4.9);//"aaaa"
'abcd'.repeat(2.5);//"abcdabcd"
'abcd'.repeat(0);//""
'abcd'.repeat(-1);// RangeError




