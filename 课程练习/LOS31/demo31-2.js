var obj={
    name:'Jack',
    add(a,b){
        console.log(a+b)
    }
};
obj.add(1,2);//3
//再添加一个方法
obj.add=function(){
    console.log('覆盖了前面');
}
obj.add();// 覆盖了前面
obj.add(1,2);//覆盖了前面

//在ES5中在为对象添加新的属性时,若是使用一个别人定义的对象时,很有可能添加一个属性名与原来的重复,
//此时会破坏原有的属性
//因此在添加属性时,使用独一无二的Symbol类型,则解决这一问题
var obj={
    name:'Jack',
    say(){
        console.log(this.name)
    }
};
var s=Symbol('say')
obj[s]=function(){
    console.log('Symbol')
}
//调用Symbol类型属性
obj[s]()//Symbol

//使用Symbol是用[]，而不是用点操作符
var MySymbol=Symbol('foo');
//第一种
var obj={}
obj[MySymbol]='hello';
//第二种
var obj={
    [MySymbol]:'hello'
}
//第三种
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
obj[MySymbol]//'hello'

var MySymbol=Symbol('obj');
var s='ss';
var a='aa';
var fun=Symbol('fun');
var obj={
    name:'Jack',
    [MySymbol]:'obj',
    [s]:'ss',//普通属性对待
    a:'a',
    say(){
        console.log(this.name)
    },
    [fun](){
        console.log(this[MySymbol]);
    }
};
//属性调用,Symbol必须用[]
obj.name//"Jack"
obj['name'];//"Jack"
obj.MySymbol// undefined
obj[MySymbol]// "obj"
obj[Symbol('obj')]//undefined //因为Symbol('obj')===MySymbol //false
obj[s]//"ss"
obj.s//undefined
obj['ss']//"ss"
obj.ss//"ss"
obj.a//"a"
obj['a']//"a"
obj[fun]()// obj

obj[Symbol()]='fjka'//"fjka"
obj[Symbol()]//undefined

//Symbol遍历
var obj = {};
var a = Symbol('a');
var b = Symbol('b');
obj[a] = 'Hello';
obj[b] = 'World';
//Object.getOwnPropertySymbols()//获得对象中Symbol类型的属性的值
var objectSymbols = Object.getOwnPropertySymbols(obj);
console.log(objectSymbols);// [Symbol(a), Symbol(b)]

//遍历实例二
var obj = {};
var foo = Symbol("foo");
Object.defineProperty(obj, foo, {
    value: "foo bar",
});
for (var i in obj) {
    console.log(i); // 无输出
}
Object.getOwnPropertyNames(obj);// []
Object.getOwnPropertySymbols(obj);// [Symbol(foo)]