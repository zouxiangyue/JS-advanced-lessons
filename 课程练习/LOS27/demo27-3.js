//const声明定义一个常量,定义时赋值,不可修改
const id1=542;
//const id2//报错
if(true){
    id=345;//报错
    id2=123;
    console.log(id);
}

//const的作用域同let
const x=0;
{
    const x=123;
    console.log(x)//123
};
console.log(x)//0

//const 除了声明常量外，也常用来声明不变的函数
const foo = function () {

};

//const定义的变量不可变,但其属性可变
const arr=[1,2,3];
arr.pop();
console.log(arr);//(2) [1, 2]
arr.push(3,4);
console.log(arr);//(4) [1, 2, 3, 4]
arr.length=1;
console.log(arr.length,arr)//1 [1]
