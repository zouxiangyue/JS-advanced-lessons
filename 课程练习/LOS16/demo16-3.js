//对象方法中的this(无函数嵌套的情况)
var obj={
    a:1,
    b:1,
    fun:function(a,b){
        this.a=a;
        this.b=b;
    }
}
obj.fun(11,22);//修改了的属性a,b的值
console.log(obj.a,obj.b);//11,22

//构造函数中的this
function Point(a,b){
    this.a=a;
    this.b=b;
    this.print=function(){
        console.log(this.a,this.b)
    }
}
var point=new Point(1,2);
point.print();//1,2