//数组的增删改查
var arr=[1,2,3,4];
delete arr[1];
console.log(arr);//[1,enpty,3,4]
var a=arr.pop();
console.log(a);//4
console.log(arr);//[1,empty,3]

var i=2;b=[];
b[i]=3;
b[b[i]]=b[0];
b[i+1]=4;
console.log(b)//[empty,empty,empty,4];

//数组的下标i在0~2^23之内,其arr[i]为数组元素,有length属性
//i在0~2^23之外,i为普通对象的键,arr[i]为数组对象的属性
var arr=[1,2,3];
arr[3]=4;
arr[-1]=true;
arr['100']=100;//数组元素arr[100]=100
console.log(arr);//(101) [1, 2, 3, 4, empty × 96, 100, -1: true]
console.log(arr['-1'])//true
console.log(arr[-1])//true
arr[1.00]='Tom';
console.log(arr);//(101) [1, "Tom", 3, 4, empty × 96, 100, -1: true]

