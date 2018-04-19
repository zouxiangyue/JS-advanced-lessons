//js对象分类

//1.内置对象由(ECMAScript规范定义的对象或构造器对象（数组、函数等）
//(1).标准内置对象
console.log(Object instanceof Function);//true
console.log(Object instanceof Object);//true
console.log(Number instanceof Function);//true
console.log(Number instanceof Object);//true
console.log(Boolean instanceof Function);//true
console.log(Boolean instanceof Object);//true
console.log(Function instanceof Function);//true
console.log(Function instanceof Object);//true
console.log(Array instanceof Function);//true
console.log(Array instanceof Object);//true
console.log(Error instanceof Function);//true
console.log(Error instanceof Object);//true
console.log(Math instanceof Function);//false
console.log(Math instanceof Object);//true
console.log(JSON instanceof Function);//false
console.log(ISON instanceof Object);//true

//(2).构造对象
var a=new Array(10);
a[0]= new String("str");          // String Object
a[1]= new Number(1);              // Number Object
a[2]= new Boolean(true);          // Boolean Object
a[3]= new Object({name : "Tom"}); // Object Object
a[4]= new Array([1, 2, 3, 4]);    // Array Object
a[5]= new Date();                 // Date Object
a[6]= new Error();
a[7]= new Function();
a[8]= new RegExp("\\d");
for(var i=0;i<9;i++){
    console.log(a[i] instanceof a[i]);//都是true;
}
