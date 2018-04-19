//js对象是若干属性的集合(包括原始类型值,对象,函数(对象的方法))

//访问属性和方法
var obj={
    name:'sherly',
    age:3,
    id:2016,
    foo:function(){
        console.log(this.name,this.age,this.id);
    }
};
console.log(obj.name);//obj['name']
obj.foo();//sherly 3 2016




