//稀疏数组(实际元素的个数小于length)
var arr1=[,12,,'abc'];
for(var i in arr1){
   console.log(arr1[i])//undefined,12,undefined,'abc';
};
console.log(arr1.length)//4
console.log(arr1)//(4) [empty, 12, empty, "abc"]

var arr2=new Array(3);
console.log(arr2);//(3) [empty × 3]
arr2=[,,];
console.log(arr2);//(2) [empty × 2]
arr2=[,,2];
console.log(arr2);//(3) [empty × 2, 2]
arr2=[0,,];
console.log(arr2);//(2) [0,empty]
arr2=[,1,];
console.log(arr2);//(2) [empty,1]
