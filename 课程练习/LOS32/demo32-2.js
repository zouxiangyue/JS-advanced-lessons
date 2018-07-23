//Class的原型共享
//与ES5中构造函数一样
class Point{
    constructor(a,b,n){
        this.a=a;
        this.b=b;
        var pname=n;
        this.showName=function(){
            console.log('PointName:',pname)
        }
    }
    show(){
        console.log(this.a,this.b)
    }
}
var p1=Point(1,2,'p1');
var p2=Point(11,22,'p2');
p1.__proto__===p2.__proto__;//true

p1.__proto__.foo=function(){console.log('foo')};
p1.foo();//foo
p2.foo()// foo



class Foo{
    static classMethod(){
        console.log(this);
        return 'hello';
    }
    //static a=0;//ES6不支持此方法添加静态属性
}
Foo.classMethod();//'hello'
var foo=new Foo();
//foo.classMethod();//报错
console.log(Foo instanceof Function)// true
Foo.secondMethod=function(){console.log('static method')}
Foo.secondMethod() //static method

//添加静态属性
Foo.a=1;

//可以给任何现有构造函数(对象)添加静态方法和原型方法
Object.StaticMethod=()=>{console.log(12)};
Object.YuanMethod=()=>{console.log(34)};
var obj={};

//继承
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        // console.log(this.constructor)
    }
}

class ColorPoint extends Point {
    constructor(x, y, color) {
        //this.color = color; // ReferenceError 报错因为没有调用父类构造函数，没有实例
        super(x, y);//代表父类的构造函数
        this.color = color; // 正确
    }
    show(){//show放在point中,this指向
        console.log(this.x,this.y,this.color);
    }
}

class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    showName(){
        console.log(this.name);
    }
};
class Student extends Person{
    constructor(name,age,id){
        super(name,age);
        this.id=id;
    };
}
var s1=new Student('Jom',20,2016011124);
var s2=new Student('Ton',19,2016011234);

//class中的supper可作为函数和对象

class A{
    constructor(x){
        this.x=x;

    }
    static p(){
        return 2
    }
    p(){
        return 3;
    }
}
class B extends A{
    constructor(x,y){
        super(x);
        this.y=y;

    }
    static b(){
       console.log(super.p())
    }
    b(){
        console.log(super.p());
    }
}
var b=new B(1,2);
b.b()//3
B.b()//2



