//生成对象的三种方式
//字面值直接生成
var obj={
    num:10,
    str:'Hello',
    show:function(){
        console.log(this.num,this.str);
    }
}
obj.show();//10,Hello

//Object工厂方法,通过原型链的方式实现的对象继承
var obj1=Object.create(obj);
obj1.num=20;
obj1.age=19;
obj2.show();//20,Hello

var objt={};
var objt1=Object.create(objt,{x:{value:20,enumerable:true},
         show:{
             value:function(){
                 console.log(this.x)//console.log(this.x.value),undefined
             }
         }
    });
objt1.show();//20
console.log(objt1.x)//20
/*
hasOwnProperty（) 函数用于指示一个对象自身（不包括原型链）是否具有指定名称的属性。
如果有，返回 true ，否则返回 false 。 该方法属于 Object 对象
注意：hasOwnProperty是原型方法
*/
objt1.hasOwnProperty('x')//true
/*
var objt={};
var objt1=Object.create(objt,{x:20,
         show:function(){
           console.log(this.x)
         }
    });
objt1.show();报错,x和show必须是一个对象,
不符合create的原型链的语法规则

*/

//构造函数创建对象
function Person(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.show=function(){
    console.log(this.name,this.age);
}
var obj2=new Person('TOM',19);
obj2.show();//TOM,19

