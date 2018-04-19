//对象属性的访问
var obj={
    a:1,
    b:2,
    foo:function(){
        console.log(this.a);
    }
}
console.log(obj.a);//访问属性
console.log(obj['a']);//1
obj.foo()//访问方法

//添加属性和方法
obj.c=3;
obj.foo1=function(){
    console.log(this.b)//2
}

//删除属性
delete obj.a;

//用for循环遍历对象属性
for(var i in obj){
    console.log(obj[i]);
}

var obj1= {};
for(var i=0;i<10;i++){
    obj1.i = i;//obj1={i:9}
}

var obj2= {};
for(var i=0;i<10;i++){
    obj2[i] = i;//obj2={0:0,1:1,2:2,...,9:9}
}



