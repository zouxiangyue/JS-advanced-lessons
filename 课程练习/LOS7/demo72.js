//函数的调用
var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var x=45;
var test=function(){
         console.log(x,this)
};
obj.test=test;
obj.test();//45 

 var obj = {
    name:"obj",
    x:23,
    test:function(){
        console.log(this.x,this);
    }
};
var x=45;
var test=function(){
         console.log(this.x,this)
};
obj.test=test;
obj.test();//23
test();//45