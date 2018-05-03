//静态方法与原型方法的区别
var BaseClass=function(){};
BaseClass.f1=function(){
    console.log('静态方法');
};
BaseClass.prototype.f2=function(){
    console.log('原型方法');
}
BaseClass.f1;
BaseClass.prototype.f2;
var obj1=new BaseClass();
obj1.f2();
obj1.__proto__.f2();
/*
静态方法
原型方法
原型方法
原型方法
*/