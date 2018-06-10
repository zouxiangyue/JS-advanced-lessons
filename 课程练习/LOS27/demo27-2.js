//在ES6中用let代替var解决变量污染和变量共享
var a=123;
if(true){
    let a=456;
    console.log(a)
};
console.log(a);//123

for(let i=0;i<3;i++){
    setTimeout(function(){
        console.log(i);//0 1 2
    },i*1000);
    console.log(i);//0 1 2
}

var a=0;
{
 let a=1;
}
console.log(a)//0
