/*变量污染和变量共享的区别
污染是var了两个名字相同的变量,后面的变量会覆盖掉先前的
共享是var了一个变量i,多段代码中都使用了变量i,存在变量共享
 */

//IIFE的变量共享
function f(){
    var getNum=[];
    for(var i=0;i<10;i++){
        getNum[i]=function(){return i;}
    }
    return getNum;
 };
 var tmp=f();//调用函数,并赋值给tmp
 tmp[0]();//0,tmp[1]();...tmp[9]=10;
//等价于
 function f(){
    var getNum=[];
    var i=0;
    for(;i<10;i++){
        getNum[i]=function(){return i;}
    }
    return getNum;
 };
 var tmp=f();//调用函数,并赋值给tmp
 tmp[0]();//0,tmp[1]();...tmp[9]=10;


 //采用IIFE实现变量共享
function f(){
    var getNum=[];
    for(var i=0;i<10;i++){
        (function (j){
            getNum[j]=function(){return j;}
        })(i);
    }
    return getNum;
 };
 var tmp=f();//调用函数,并赋值给tmp
 tmp[0]();//0
 tmp[9]();//9,理想中的值

 
