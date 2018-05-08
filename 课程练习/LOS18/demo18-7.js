//数组原型方法（添加和删除元素)(破坏性)
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

//Array.prtotype.push();
//方法将一个或多个元素添加到数组的末尾，并返回新数组的长度
var arr=[1,2,3];
arr.push(4,5,6)//返回6
//将两个数组合并
arr1=[7,8,9]
Array.prototype.push.apply(arr,arr1)//9
console.log(arr,arr1)
//[1, 2, 3, 4, 5, 6, 7, 8, 9] (3) [7, 8, 9]

//Array.prtotype.pop();//删除数组的最后一个元素,并返回所删除的元素
arr.pop()//9
console.log(arr)//[1, 2, 3, 4, 5, 6, 7, 8,]

//排序和颠倒元素顺序 破坏性
//Array.prototype.sort()//数组排序
var arr1=[1,3,2,-1];
console.log(arr1,arr1.sort());//(4) [-1, 1, 2, 3] (4) [-1, 1, 2, 3]
var arr2=['a','cd','b','ab'];
console.log(arr2,arr2.sort());//(4) ["a", "ab", "b", "cd"] (4) ["a", "ab", "b", "cd"]

//Array.prototype.reverse()//数组反转
arr1.reverse()//(4) [3, 2, 1, -1]
