//函数内部的变量,函数外部不能访问
function fun1(){
    var x=1;
    function fun2(){
       return x++;//后加加,若改为++x;则返回2;
    }
    return fun2();
 };
 var fun3=fun1();
 console.log(fun3);//1,执行fun3跳转到var x=1;
 console.log(fun3);//1  //fun1中的x没有被释放

 function fun1(){
    var x=1;
    function fun2(){
       return x++;
    }
    return fun2;
 };
 var fun3=fun1();
 console.log(fun3());//1,执行fun3()跳转到return x++;
 console.log(fun3());//2,经过上一句执行x++,x=2