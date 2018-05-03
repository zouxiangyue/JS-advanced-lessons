//数组原型方法（添加和删除元素-破坏性）

//Array.prototype.shift()删除数组的第一个元素,返回arr[0]
var arr=[1,2,3,4];
arr.shift();//1
console.log(arr)//(3) [2, 3, 4]
//unshift()在数组的开始位置添加元素,返回数组的长度
arr.unshift(2,3)//5
console.log(arr)//(5) [2, 3, 2, 3, 4]

//Array.prototype.splice()通过删除现有元素和/或添加新元素来更改一个数组的内容
var a=arr.splice(1,2,'ab')
//在索引为1的位置删除2个元素,再在索引为1的位置插入元素'ab',并返回切掉的数组
console.log(a,arr)//(2) [3, 2] (4) [2, "ab", 3, 4]
arr.splice(1,1);
console.log(a,arr);//['ab'] [2,3,4]
arr.splice(1);
console.log(a,arr)//[3,4] [2]

//Array.prototype.slice() 方法返回一个从开始到结束（不包括结束）选择的数组的一部分浅拷贝到一个新数组对象。且原始数组不会被修改。
var arr=[1,2,3,4,5];
var a=arr.slice(1,2);
console.log(a,arr);//[2] (5) [1, 2, 3, 4, 5]
var a=arr.slice(2);
console.log(a,arr)//(3) [3, 4, 5] (5) [1, 2, 3, 4, 5]
var a=arr.slice();
console.log(a,arr)//(5) [1, 2, 3, 4, 5] (5) [1, 2, 3, 4, 5]

