//Array
//arr.splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
var arr=[1,2,2,2,3,4];
arr.splice(2,1)//2
arr.splice(2,2)//[2,2]
arr.splice(-2,1)//3
arr.splice(-2,2)//[3,4]
arr.splice(-2,-2)//[]


arr.pop();//删除数组最后一个元素，返回删除元素
arr.push();//添加指定元素在数组的末尾,返回length
arr.indexOf();//同string.indexOf()

arr.pop()//4
console.log(arr)//[1,2,2,2,3]
arr.push(4)//6
console.log(arr)//[1,2,2,2,3,4]
arr.indexOf(3,1)//4


Arrray.prototype.slice.call();s

