//Array.map()
// map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// map() 方法按照原始数组元素顺序依次处理元素。
// 注意： map() 不会对空数组进行检测。
// 注意： map() 不会改变原始数组。
[1,2,3,4,5].map(function(x){
    return ++x;
 })
 //(5) [2, 3, 4, 5, 6]

//Map类似于对象,比对象的功能更强大
//Map 对象保存键值对。任何值(对象或者原始值) 都可以作为一个键或一个值。
var m=new Map([
    ['name','Jom'],
    [1,23]
])
m.size//2
console.log(m)//Map(2) {"name" => "Jom", 1 => 23}

var items = [
    ['name', '张三'],
    ['title', 'Author']
];
var map = new Map();
//Map.set为map添加键值对,返回map本身
items.map(([key, value]) => map.set(key, value));
console.log(map)
//Map(2) {"name" => "张三", "title" => "Author"}

var items = [
    ['name', '张三'],
    ['title', 'Author']
];
var map = new Map();
items.forEach(([key, value]) => map.set(key, value));
console.log(map)
//Map(2) {"name" => "张三", "title" => "Author"}

var map=new Map();
map.set(['a'],12);
map.get(['a'])
map.set('a',13) //Map(2) {Array(1) => 12, "a" => 13}
map.get('a')//13
//通过===判断某个键值是否存在
['a']===['a']//false

+0===-0//true
map.set(+0,1);
map.get(+0)// 1
map.set(-0,2);
map.get(+0) //2
map.get(-0) //2
map.get(0) //2

//虽然NaN不严格相等于自身，但Map将其视为同一个键（特例）
NaN===NaN//false
map.set(NaN,11);
map.set(NaN,12); //Map(4) {Array(1) => 12, "a" => 13, 0 => 2, NaN => 12}
map.get(NaN) //12

var a='a'
var map=new Map();
map.set(a,12);
map.get('a') //12
map.get(a) //12

var m=new Map([[null,12],[NaN,12],[false,12],[undefined,12]])
console.log(m);
//Map(4) {null => 12, NaN => 12, false => 12, undefined => 12}
m.get(null)//12
m.get(false)//12
m.get(undefined)//12

// set方法返回的是Map本身，因此可以采用链式写法
let map = new Map()
    .set(1, 'a')
    .set(2, 'b')
    .set(3, 'c');

// get方法读取key对应的键值，如果找不到key，返回undefined
var m = new Map();
var hello = function() {console.log("hello");};
m.set(hello, "Hello ES6!"); // 键是函数
m.get(hello); // Hello ES6!

//has方法 判断map中是否存在某个键值,返回布尔值
var m=new Map([
    [1,2],
    [null,23],
    [3,'b'],
])
m.has(1) //2
m.has(null) //23

//delete 删除某个键
m.delete(1);
m.has(1);//false

//clear 清除map
m.size //2
m.clear();
m.size //0