//Array
//arr.splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
var arr=[1,2,2,2,3,4];
arr.splice(2,1)//2
arr.splice(2,2)//[2,2]
arr.splice(-2,1)//3
arr.splice(-2,2)//[3,4]
arr.splice(-2,-2)//[]

arr.slice(1,4)//[2,2,2]，arr[1]到arr[3]
arr.slice(1)//[2,2,2,3,4]
arr.slice(-2)//[3,4]
arr.slice(-3,-1)//[2,3]

arr.pop();//删除数组最后一个元素，返回删除元素
arr.unshift()//删除最后一个元素
arr.shift();//删除arr第一个元素
arr.push();//添加指定元素在数组的末尾,返回length
arr.indexOf();//同string.indexOf()

arr.pop()//4
console.log(arr)//[1,2,2,2,3]
arr.shift();//1
console.log(arr)//[2,2,2,3,4]
arr.push(4)//6
console.log(arr)//[1,2,2,2,3,4]
arr.indexOf(3,1);//4;

//Array.join(),把数组的每个元素前加上字符，并返回给数组
var arr=[1,2,3,4]
arr.join();
console.log(arr)//1,2,3,4
arr.join('-');
console.log(arr)//-1-2-3-4
arr.join('');
console.log(arr)//1234
arr.join(';');
console.log(arr)//1;2;3;4



//Arrray.prototype.slice.call();将类数组转换为数组
//arguments对象是所有（非箭头）函数中都可用的局部变量,可以使用arguments对象在函数中引用函数的参数。它类似于Array,有length属性

function foo(a,b){
    for(var i=0;i<arguments.length;i++){
        console.log(arguments[i]);//1,2,a
    };
    var arr=Array.prototype.slice.call(arguments);//[1,2,'a']
    console.log(arr);
};
foo(1,2,'a')//实参可多于形参

 
