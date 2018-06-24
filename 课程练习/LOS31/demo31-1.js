//ES6中新增的数据类型Symbol

//Symbol是新增的一种基本数据类型(Number之列)因此不能用new创建
var s1=Symbol();
var s2=Symbol('Symbol');
console.log(s1)//Symbol()
console.log(s2)//Symbol(Symbol)
console.log(s1.toString())//'Symbol()'
console.log(s2.toString())//'Symbol(Symbol)'

typeof s1;//"symbol"

//Symbol虽是基本数据类型,但每定义一个,无论值是否相同,都是独一无二的,==和===都是false
var s3=Symbol();
var s4=Symbol('Symbol');
s1==s3;//false
s2==s4;//false
s1===s3;//false
s2===s4;//false

//如果 Symbol 的参数是一个对象，使用该对象的toString方法，将其转为字符串，然后才生成一个 Symbol 值
var obj={
    a:1,
    b:2,
    toString(){
        return this.a+this.b
    }
}
var s=Symbol(obj)
console.log(s)// Symbol(3)

//Symbol类型不能参与运算
s1+'avfdv'//报错
//但可以参与显示类型String转换
String(s1);//"Symbol(foo)"

