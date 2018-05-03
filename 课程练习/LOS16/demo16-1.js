var a=2;
function f(){
    var b=3;
    function f2(){
        console.log(a,b);
    }
    f2();
};
f();//2,3

//this指向调用此函数的主体,不做参数的传递
var a=2;
function f(){
    var b=3;
    function f2(){
        console.log(a,this.b);
    }
    f2();
};
f();//2 undefined
var a=2;
function f(){
    var b=3;
    function f2(){
        this.b=4
        console.log(a,this.b);//2,4
    }
    f2();
    console.log(a,b);//3,4
};
f();