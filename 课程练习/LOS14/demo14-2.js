//设置属性的特性
 //可枚举特性
 //defineProperty方法设置enumerable
 var obj1={
     x:3,
     y:2,
     z:1,
 }
 for(i in obj1){
    console.log(i,obj1[i]);
 }
 //x 3
 //y 2
 //z 1
Object.defineProperty(obj1,'x',{enumerable:false});//把x改为不可枚举,相当于把x隐藏
//obj.x=5;加上这一句x在下面遍历中也无法输出
for(i in obj1){
    console.log(i,obj1[i]);
 }
 //y 2
 //z 1

 //可配置性和可写性
 //configurable,writable
 var per={
     name:"Tom"
 };
 console.log(per.name);//Tom
 Object.defineProperty(per,'name',
 {
     writable:false,
     configurable:true,
     enumerable:true,
     value:'Jack'
});
console.log(per.name);//Jack
per.name='Mike';
console.log(per.name);//Jack,name的值为Jack不可修改

var per={
    name:"Tom"
};
console.log(per.name);
Object.defineProperty(per,'name',
{
    writable:true,
    configurable:false,//configurable的值为false,name不可删除
    enumerable:true,
    value:'Jack',
   })
console.log(per.name);//Jack
per.name='Mike';//writable:true,name的值可修改
console.log(per.name);//Mike
delete per.name;//name的值不可删除
console.log(per.name);//Mike

var per={
    name:"Tom"
};
console.log(per.name);
Object.defineProperty(per,'name',
{
    writable:true,
    configurable:true,
    enumerable:true,
    value:'Jack',
   })
console.log(per.name);//Jack
per.name='Mike';
console.log(per.name);//Mike
delete per.name;//per.name被删除
console.log(per.name)//undefined

var per={
    name:"Tom"
};
console.log(per.name);
Object.defineProperty(per,'name',
{
    writable:false,
    configurable:false,
    enumerable:true,
    value:'Jack',
   })
console.log(per.name);//Jack
per.name='Mike';//per.name不可修改
console.log(per.name);//Jack
delete per.name;//per.name不可删除
console.log(per.name)//Jack