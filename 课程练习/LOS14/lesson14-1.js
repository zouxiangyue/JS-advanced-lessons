var objProto={
    a:1
};
var obj=Object.create(objProto);
obj.b=2;
obj.c=3;
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);
console.log(obj.toString);//ƒ toString() { [native code] }
for(i in obj){
    console.log(i,obj[i]);//遍历访问不到原链上的toString属性
 }
 //b 2
 //c 3
 //a 1

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

//给对象添加属性value
var obj={
    a:1,
    b:2
}
obj.c=3;//直接添加,属性的特性都为true;
Object.defineProperty(obj,'d',{
    value:4,
})//通过definePropety添加属性,属性的特性都没有指定,所以都为false
for(var i in obj){
    console(i,obj[i])//能遍历到c,不能遍历到d;
}
//a 1
//b 2
//c 3

//读取属性特性get
var per={
    _name:'Canna',
}
Object.defineProperty(per,'_name',{
    get:function (){//get读取属性是调用的函数,默认是undefined,只定义get特性,只能读不能写
        return this._name;//在使用get或set属性前加_(_name),否则会报错
    }
});
console.log(per._name)//Canna;














