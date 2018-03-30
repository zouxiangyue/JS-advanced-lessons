//构造函数创造对象
var Person=function(name){
    this.name=name;
};
console.log(typeof Person);//function
var person=new Person("jon");
console.log(typeof(person));//Object
var q=new person();//报错

//arguments
function foo(x,y,z){
    if(foo.length==arguments.length){return true;}
    else return false;
    };
foo(1,2);//false
foo(1,2,3);//true

//使用caller(获取调用当前函数的函数)，

var fun=function(){
       if(this.caller==null)return true;
       else return false;
   }
fun();//true

var fun=function(){
    function fun1(){console.log(fun1)}
    if(this.fun1.caller==null)return true;
    else return false;
}
fun();//true

//prototype
var arr=[];
arr._proto_===Array.prototype;
false
var arr=[];
Object._proto_===Function.prototype;
false
var arr=[];
Object._proto_==Function.prototype;
false


//bind
var x=4
var obj={
       x:3,
       fun:function(){
            function fun1(){
                 console.log(this.x)
            };
            fun1.bind(this)();//3
            fun1();//4
       }  
}; 
obj.fun();

var x=4;
var obj={
       x:3,
       fun:function(){console.log(this.x)}
}; 
obj.fun();//3

var x=4
var obj={
       x:3,
       fun:function(){
            function fun1(){
                 console.log(this.x)
            };
            
            fun1();
       }  
}; 
obj.fun();//4




