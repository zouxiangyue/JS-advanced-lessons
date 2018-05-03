//间接调用的this(call,apply)
obj1={name:'obj1',x:1};
obj2={name:'obj2',x:2};
function test(){
    console.log(this.name,this.x);
}
test.call(obj1);//obj1 1
test.call(obj2);//obj2 2
obj1.fun=test;
obj1.fun();//obj1 1
obj1.fun.call(obj2)//obj2 2
