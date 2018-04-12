//作用域:变量和函数可访问的范围

//1.全局作用域
var a=10,b=20;
function fn(){
  var a=100,c=200;
  //console.log(a,b,c,d);报错,d无定义
  function bar(){
    var a=500,d=600;console.log(a,b,c,d)//500 20 200 600
  };
  bar();
};
fn();

 var a=10,b=20;
function fn(){
  var a=100,c=200;
  //console.log(a,b,c,d);
  function bar(){
    var a=500,d=600;//console.log(a,b,c,d)
  };
  bar();
  console.log(a,b,c,d);//报错
};
fn();

var a=10,b=20;
function fn(){
  var a=100,c=200;
  //console.log(a,b,c,d);
  function bar(){
    var a=500;d=600;//d的前面为';'无var,d提升为全局变量
    //console.log(a,b,c,d)
  };
  bar();
  console.log(a,b,c,d);//100 20 200 600
};
fn();

