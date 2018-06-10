//Error及异常处理

//通过Error的构造器可以创建一个错误对象。当运行时错误产生时，Error的实例对象会被抛出.
var err=new Error("some Error!");

//Error.prototype.name,Error.prototype.message;
try{
    throw new Error("error");
}
catch(e){
    console.log(e.name,e.message)//Error error
    console.log(e)//Error: error
}

try{
    throw "error";
}
catch(e){
    console.log(e.name,e.message)//undefined undefined
}

try{
    ajlskf;
 }
 catch(e){
     console.log(e,e.name,e.message)
 }
 //ReferenceError: ajlskf is not defined
     //at <anonymous>:2:4 "ReferenceError" "ajlskf is not defined"

//自定义创建Error
function MyError(name,message){
    this.name=name;
    this.message=message;
}
MyError.prototype.__proto__=Error.prototype;
try{
    throw new MyError('error','error message');
}
catch(e){
    console.log(e.name,e.message)//error error message
}
