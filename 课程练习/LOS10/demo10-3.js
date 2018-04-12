var a=0;
if(true)
{
    var a=1
};
console.log(a);//0

//通过封装把变量变为局部
var a=0;
(function(){
  if(true){
      var a=1;//局部变量
    }
}());
console.log(a);//0

var useId="123";
document.onclick=function(){
    var useId="456";
    console.log(useId);//456
};
console.log(useId);//123

/*
var useId="123"
document.onclick=function(){
    useId="456";//
    console.log(useId);//456
};
console.log(useId);//456
*/

//if语句中的useId会提升为全局变量,将上一段代码的useId污染;
if(1<2){
    var useId="789";
    console.log(useId)//789
}
console.log(useId)//789

//将代码改为以下,解决污染
(function(){
    if(1<2){
       var useId="789";
       console.log(useId)//789
    };
}())
console.log(useId)//123

document.onclick=function(){
    var useId="456";
    console.log(useId);//456
};
console.log(useId);//789


