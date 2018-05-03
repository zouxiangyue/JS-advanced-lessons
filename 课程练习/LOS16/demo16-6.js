//构造函数中的this(有函数嵌套)缺陷的解决方法同demo16-5
function per(name,age){
    this.name=name;
    this.age=age;
    this.fun=function(){
          function fun1(){
              this.name='fun1';
          }
          function fun2(){
              this.age++;
          }
          fun1();
          fun2();
          console.log(this.name,this.age);
    }
}
var per1=new per('Tom',20);
per1.fun();//Tom 20
console.log(per1)//per {name: "Tom", age: 20, fun: ƒ}

function per(name,age){
    this.name=name;
    this.age=age;
    this.fun=function(){
          var that=this
          function fun1(){
              that.name='fun1';
          }
          function fun2(){
              that.age++;
          }
          fun1();
          fun2();
          console.log(this.name,this.age);
    }
}
var per1=new per('Tom',20);
per1.fun();//fun1 21
console.log(per1)//per {name: "fun1", age: 21, fun: ƒ}



