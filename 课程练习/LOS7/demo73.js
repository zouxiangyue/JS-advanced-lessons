var obj2={name:"Tom",x:43,
          foo:function(){console.log(this,this.name,this.x)}
      };
obj2.foo();
obj2.foo.call(obj1);
obj2.foo.apply(obj1);
//"Tom" 43
 //"lily" 23
 //"lily" 23

 var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};

var me = {
    name:"ABC"
};
bird.fly(5,6);
fish.swim.call(me,3,4);
bird.fly.call(me,7,8);
bird.fly.call(null,[7,8]);
//i'm:polly i can fly ___ 5 6
//i'm ABC i cam swim ___ 3 4
//i'm:ABC i can fly ___ 7 8
//i'm: i can fly ___ (2) [7, 8] undefined
