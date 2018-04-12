//常见的闭包形式
//1.以函数对象的形式返回
var tmp=100;
function foo(x){
    var tmp=10;
    return function(y){
        console.log(x+y+(++tmp));
    }
}
var f=foo(1);//f形成了一个闭包
f(2);//14
f(2);//15
f(2)//16
//f函数对象相关作用域的变量有x,y,tmp
//形成的闭包包含f函数之外(即第一行(var tmp=100))的自由变量tmp;
//f中的tmp调用后不会被释放;

var tmp=100;
function foo(x){
    //var tmp=10;
    return function(y){
        console.log(x+y+(++tmp));
    }
}
var f=foo(1);//f形成了一个闭包
f(2);//104
f(2);//105
f(2)//106

function foo(){
    var tmp=3;
    return function(y){
        x.count=x.count ? x.count+1 : 1;
        console.log(x+y+tmp,x.count);
    }
}
var age=new Number(2);
var bar=foo(age);
bar();//15 1
bar();//15 1
bar();//15 1

//作为对象的方法返回
function counter(){
    var n=0;
    return {
        count:function (){return ++n;},
        reset:function(){n=0;return n;}
    }
}
var c=counter(),d=counter()
console.log(c.count());//1
console.log(c.count());//2
console.log(d.count());//1
console.log(c.reset());//0
console.log(c.count());//1
console.log(d.count());//2
console.log(d.reset());//0
//形成了两个闭包:c,d;