//JS代码完成后，作用域链就已完成，与代码的执行顺序无关
var name="li"
function f1(){console.log(name)};
function f2(){name="ly";f()};//无var,全局的name被修改
f1();//li
f2();// ly

var name="li"
function f1(){console.log(name)};
function f2(){var name="ly";f()};//f2()在调用f1()时，链接到9行，输出9行之前的name
f1();//li
f2();//li

var name="li"
function f1(){console.log(name,age)};
function f2(){var name="ly";var age=12;f1()};
f2();//li, age is not defined

//函数的作用域
function fun(){
    console.log(a);
    var a=0;
    console.log(a)
};
fun();//0
console.log(a)//报错,a在函数的作用域内有效，局部变量

//等价于
function fun(){
    var a;
    console.log(a);
    a=0;
    console.log(a)
};
fun();//0

//局部变量和全局变量
var a=1;//全局
function fun(){
    console.log(a);//1
};
console.log(a);//1

var a=1;//全局
function fun(){
    var a=0;
    console.log(a);//0 局部
};
console.log(a);//1

function fun(){
    b=0;//无var,全局变量
    console.log(b);
};
fun();//0
console.log(b);//0 函数内有var,报错



//if无函数作用域，if内声明定义的变量可以冲出作用域，是全局变量
if(true){
    var x=2;
    console.log(x);//2
};
console.log(x);//2

//等价于
var x;
if(true){x=2;console.log(x)};

if(1>2){var x=2;console.log(x)};
console.log(x);//2
