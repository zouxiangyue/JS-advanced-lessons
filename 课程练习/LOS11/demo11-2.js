//IIFE的变量共享

function f(){
    var getNum=[];
    var j;
    for(var i=0;i<10;i++){
        j=i;
        getNum[i]=function(){return j;}
    }
    return getNum;
 };
 var tmp=f();//调用函数,并赋值给tmp
 tmp[0]();//0,tmp[1]();...tmp[9]=10;
function f(){
    var getNum=[];
    for(var i=0;i<10;i++){
        (function (j){
            getNum[i]=function(){return i;}
        })(i);
    }
    return getNum;
 };
 var tmp=f();//调用函数,并赋值给tmp
 tmp[0]();//10,tmp[0]:f(){return i};
 tmp[9]();//10,tmp[0,...,9]的值都是10

 //等价于
 function f(){
    var getNum=[];
    var i=0;
    for(;i<10;i++){
            getNum[i]=function(){return i;}
        };
    return getNum;
 };
 var tmp=f();
 tmp[1]();
 
 //解决变量共享
 function f(){
    var getNum=[];
    //var j=0;tmp[0](),...,tmp[9]()=10
    for(var i=0;i<10;i++){
        (function (j){getNum[i]=function(){return j;}})(i);
    }
    return getNum;
 };
 var tmp=f();//调用函数,并赋值给tmp
 tmp[0]();//0,tmp[1]()=1;...tmp[9]=9
