//通过var定义的变量,在ES5中存在变量污染和变量共享
//变量污染
var a=123;
//一段很长的代码后忘记了a的定义
if(true){
    var a=456;
    console.log(a)
};
console.log(a);//无快的作用域,a=456

//解决变量污染
var b=0;
(function(){
    var b=1;
    console.log(b)
})();
console.log(b)//0

//变量共享
for(var i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);//3 3 3
    },i*1000);
    console.log(i);//0 1 2
}
//解决变量污染
for(var i=0;i<3;i++){
    (function(j){
        setTimeout(function(){
            console.log(j);//0 1 2
        },j*1000);
    }(i));
    console.log(i);//0 1 2;
}