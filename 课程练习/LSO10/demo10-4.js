//sourse的断点调试和使用举例

//执行上下文与调用栈(Call Stack)
//js引擎使用栈的方式来对函数调用进行追踪,
//栈底保存全局上下文环境,栈顶保存当前正在执行的上下文环境
console.log("全局上下文-start");
var x = 1;
function foo(){
    console.log("foo上下文-start");//设置断点//栈顶:foo;栈底:
    var y = 2;
    function bar(){
        console.log("bar上下文-start");//设置断点//栈顶:bar;栈底:foo
        var z = 3;
        console.log(x+y+z);
        console.log("bar上下文-end");//设置断点
    }//跳出bar()//栈顶:bar;栈底:foo
    bar();//栈顶:foo;栈底:无;
    console.log("foo上下文-end");//设置断点//栈顶:bar
}//跳出foo//栈顶:foo
foo();//设置断点
console.log("全局上下文-end");//设置断点

