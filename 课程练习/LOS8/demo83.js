var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());// ƒ fun2() {return this.x;}
console.log("输出：",obj.fun3()());//12
console.log("输出：",obj.fun4());//34

var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    console.log("this_1",this)
    return function fun2() {
        console.log("this_2",this)
        return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//输出： ƒ fun2() { console.log("this_2",this) return this;}
//this_1 {x: 34, fun2: ƒ, fun3: ƒ, fun4: ƒ}
console.log("输出：",obj.fun3()());//输出什么
console.log("输出：",obj.fun4());//输出什么