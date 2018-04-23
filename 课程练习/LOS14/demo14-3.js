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