//ES6对Object的扩展
//允许对象中直接写入变量和函数作为对象的属性和方法
//只写属性而不写属性时,属性值等于属性名代表的变量,无冒号

var name='jack'
var per={
    name,
    say(){
        console.log(this.name)
    }
};
per.say();//jack

//此方法用于函数的返回值
function foo(a,b){
    return {x,y}//等价于{x:x,y:y}
}
foo(1,2)//{x;1,y:2}

//ES6允许字面值定义对象时,用表达式作为对象的属性名

var pro='foo'
var obj={
    [pro]:true,
    ['ab']:123,
    c:34,
    ['s'+'ay'](){
       console.log('hello')
    }
};
obj.pro//undefined
obj[pro]//true
obj.foo//true
obj.ab//123
obj["ab"]//123
obj.c//34
obj;//{foo: true, ab: 123, c: 34, say: ƒ}

//注意，属性名表达式与简洁表示法，不能同时使用，会报错。
// 报错
var foo = 'bar';
var bar = 'abc';
// var baz = { [foo] };//报错

// 正确
var foo = 'bar';
var baz = { [foo]: 'abc'};//或var baz = { [foo]: bar};

//Object.is它用来比较两个值是否严格相等
Object.is(+0,-0)//false
Object.is(1,'1')//false
Object.is(1,1.0)//true
Object.is(NaN,NaN)//true
Object.is(null,null)//true
Object.is({x:1},{x:1})//false

+0===-0//true
1==='1'//false
1===1.0//true
NaN===NaN//false

//Object.assign方法用于对象的合并，将源对象（source）的所有可枚举属性，复制到目标对象（target）
var obj1={a:1,b:1,c:1};
var obj2={b:2};
var obj3={c:3};
Object.assign(obj1,obj2,obj3);//{a: 1, b: 2, c: 3}
console.log(obj1)//{a: 1, b: 2, c: 3}
//原对象的属性名与目标对象的属性名相同时,原对象的属性值覆盖掉目标对象的属性值(后面的属性值覆盖掉前面的)

//assign方法是浅拷贝,不是深拷贝
var obj={a:11}
var obj2={a:33,b:{c:44}}
Object.assign(obj,obj2);
obj.c===obj2.c//true

//Object.getPrototypeOf()、Object.setPrototypeOf()方法
var obj = Object.create({x:1,y:2});
console.log(Object.getPrototypeOf(obj));//{x: 1, y: 2}
Object.setPrototypeOf(obj,{z:3});
console.log(Object.getPrototypeOf(obj));//{z: 3}

//属性结构赋值
var obj={a:1,b:2}
var obj2=Object.create(obj);
obj2.c=3;
Object.keys(obj2);//["c"]
Object.values(obj2)//[3]
obj2//{c: 3}
'a' in obj2;//true
obj2.__proto__//{a: 1, b: 2}

//Object.entries()
var object1 = { foo: 'bar', baz: 42 };
console.log(Object.entries(object1)[1]);//["baz", 42]

const object2 = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(object2)[2]);
// ["2", "c"]

const object3 = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(object3)[0]);
//["2", "b"]

var obj = { foo: 'bar', baz: 42 };
Object.entries(obj);// [ ["foo", "bar"], ["baz", 42] ]
for(var [k,v] of Object.entries(obj)){ //解构赋值
    console.log(k,v);
}
//foo bar
//baz 42