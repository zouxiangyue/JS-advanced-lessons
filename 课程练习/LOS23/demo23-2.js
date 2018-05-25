//JSON.stringify() 方法是将一个JavaScript值(对象或者数组)转换为一个 JSON字符串

//序列化对象、数组、数值、字符串、布尔值和 null 
JSON.stringify({x:2,y:"abc"});//"{"x":2,"y":"abc"}"
JSON.stringify([1,2,'a']);//"[1,2,"a"]"
JSON.stringify(123);//"123"
JSON.stringify('stringify');//""stringify""
JSON.stringify(false);//"false"
JSON.stringify(2<3 && null)//"null"
JSON.stringify(2<3 && 2===2)//"true"
JSON.stringify(null);//"null"
//单独的数值,布尔值,字符串和null都加了"",在数组或是对象属性值里的数值,布尔值,字符串和null不用再加""

//undefined,任意函数和symbol 值在序列化过程中会被忽略（出现在非数组对象的属性值中时）或者被转换成 null（出现在数组中时）
JSON.stringify(undefined);//undefined
JSON.stringify({x:undefined});//"{}"
JSON.stringify([undefined]);//"null"

//Object,Function等都是构造函数(可用new方法)
//在对象中被忽略
JSON.stringify({x1:Object,x2:Function,x3:Date,x4:Error,x5:Array,x6:Number})//"{}"
JSON.stringify({Math})//"{"Math":{}}"//Math是对象
JSON.stringify({x1:Math})//"{"x1":{}}"
JSON.stringify({Object,Function,Date,Error,Array,Number})//"{}"
JSON.stringify({Object,Function,Date,Error,Array,Number,Math})//"{"Math":{}}"
JSON.stringify({Object,Function,Date,Error,Array,Number,'x':2})//"{"x":2}"
//其转换为null
JSON.stringify([Object,Function,Date,Error,Array,Number])//"[null,null,null,null,null,null]"
JSON.stringify([Object,Function,Date,Error,Array,Number,Math])//"[null,null,null,null,null,null,{}]"
JSON.stringify([1,2,'Object',Object,{x:Function}])//"[1,2,"Object",null,{}]"
JSON.stringify([1,2,'Object',Object,{x:function(){console.log('xx')}}])//"[1,2,"Object",null,{}]"

//Symbol(参考https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol)
JSON.stringify(Symbol());//undefined
JSON.stringify([Symbol()]);//"[null]"

var obj={
    name:'json',
    age:20,
    x:[2.4,'false',true,null,Function,undefined,function(){}],
    y:[3,4,{z:false},"djfkla",[{},symbol("")]],
    a:{x:3,y:Array},
    b:function(){
        console.log(this.name)
    }
}
var json4=JSON.stringify(obj);
console.log(json4);
//{"name":"json","age":20,"x":[2.4,"false",true,null,null,null,null],"y":[3,4,{"z":false},"djfkla",[{},null]],"a":{"x":3}}
console.log(typeof json4);//string
console.log(json4 instanceof Object);// false

//布尔值、数字、字符串的包装对象在序列化过程中会自动转换成对应的原始值
JSON.stringify([new Number(1.2),new String('kaf'),new Boolean(1>2)])//"[1.2,"kaf",false]"
JSON.stringify([new Array(1),new String('kaf'),new Boolean(1>2)])//"[[null],"kaf",false]"
JSON.stringify([new Object,new String('kaf'),new Boolean(1>2)])//"[{},"kaf",false]"
JSON.stringify([new Function,new String('kaf'),new Boolean(1>2)])//"[null,"kaf",false]"
JSON.stringify([new Array(1,2),new String('kaf'),new Boolean(1>2)])//"[[1,2],"kaf",false]"

//所有以 symbol 为属性键的属性都会被完全忽略掉，即便 replacer 参数中强制指定包含了它们。
JSON.stringify(
    { [Symbol.for("JSON")]:'JSON'},
    function(k,v){
        if(typeof k=="symbol"){
                return "is a Symbol"
        }
    }
)//undefined

//enumerable,configurable,writable等属性特性会被忽略,value值会显示
var obj=Object.create(null,
    {
        x:{
            value:1,
            enumerable:false,
            writable:true,
        },
        y:{
            value:2,
            enumerable:true,
            writable:true,
            configurable:false
        }
    }
);
JSON.stringify(obj)//"{"y":2}"