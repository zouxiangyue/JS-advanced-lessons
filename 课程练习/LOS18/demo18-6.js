//合并、切分和连接 非破坏性

//Array.prtotype.join();
//将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串
var arr=['a','b','c'];
console.log(arr,arr.join())//(3) ["a", "b", "c"] "a,b,c"(默认为',')
console.log(arr.join(' '))//a b c
//稀疏数组
console.log([3,,,,,,5].join("*"));//3******5
console.log([3,,,,,,].join("*"));//3*****


//Array.prototype.slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
var arr=[1,2,3,4,5];
var a=arr.slice(1,2);
console.log(a,arr);//[2] (5) [1, 2, 3, 4, 5]
var a=arr.slice(2);
console.log(a,arr)//(3) [3, 4, 5] (5) [1, 2, 3, 4, 5]
var a=arr.slice();
console.log(a,arr)//(5) [1, 2, 3, 4, 5] (5) [1, 2, 3, 4, 5]

//Array.prototype.concant()
//方法用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组
var arr1=[a,b,c];
var arr2=[d,e,f];
console.log(arr1,arr2,arr1.concat(arr2))//(3) ["a", "b", "c"] (3) ["d", "e", "f"] (6) ["a", "b", "c", "d", "e", "f"]


//Array.prototype.indexOf()
//返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1
var arr=[1,2,3,'abc'];
arr.indexOf(2);//0
arr.indexOf(5)//-1
arr.indexOf(2,3)//-1,从下标为2的位置开始找3
arr.indexOf(1,3)//2

//Array.prototype.lastIndexOf()//从数组的最后找,最后一个的下标为0
var arr=[1,2,3,4,5]
arr.lastIndexOf(2,4);//1
arr.lastIndexOf(3);//2

