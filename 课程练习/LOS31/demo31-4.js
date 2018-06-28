//ES6新增数据结构Set
//类似于数组,但是成员都是唯一的,无重复
//用new生成Set对象
//通过add方法向Set里加入成员
let s1=new Set([1,2,3,3,4,4,5]);
console.log(s1);//Set(5) {1, 2, 3, 4, 5}

var s2 =new Set();
s2.add()
console.log(s2)//Set(1) {1}
[1,2,3,4,2,3,4].map(x=>s2.add(x))
console.log(s2)//Set(4) {1, 2, 3, 4}

//ES6新增数据结构Set
//类似于数组,但是成员都是唯一的,无重复
//用new生成Set对象
//通过add方法向Set里加入成员
let s1=new Set([1,2,3,3,4,4,5]);
console.log(s1);//Set(5) {1, 2, 3, 4, 5}

var s2 =new Set();
s2.add(5);
console.log(s2);//Set(1) {5}
[1,2,3].map(x=>s2.add(x));
console.log(s2);//(4) {5, 1, 2, 3}

//遍历
for(var i of s2){
    console.log(i);//5 1 2 3
}

console.log(...s2);//5 1 2 3

// 去除数组的重复成员
[...new Set([1,2,3,3])]// [1, 2, 3]

var s=new Set();
s.add({}).add({}).add(1).add(2);
s.size;//4  //{}=={} //false
s.has({}) //false
s.has(1) //true
s.delete({}) //false //删除失败
s.delete(1) //true  //删除成功
s.has(1) //false   

//Array.from方法可以将Set结构转为数组。
var items = new Set([1, 2, 3, 4, 5]);
var array = Array.from(items); //[1,2,3,4,5]
//将数组转换为Set
[...new Set([1,2,3])]//[1,2,3]
console.log(...new Set([1,2,3]))// 1 2 3

//Set.key(),Set.values(),Set.entries()
var set=new Set([1,2,3,4]);
console.log(set.keys(),typeof set.keys());
console.log(set.values(),typeof set.values())
console.log(set.entries(),typeof set.entries())
//SetIterator {1, 2, 3, 4} "object"
//SetIterator {1, 2, 3, 4} "object"
//SetIterator {1, 2, 3, 4} "object"
for(var i of set.entries()){
    console.log(i)
}
 //(2) [1, 1]
 //(2) [2, 2]
 //(2) [3, 3]
 //(2) [4, 4]

 var set = new Set([1, 2, 3]);
set.forEach((value, key) => console.log(value * 2) );
 //2 4 6
//不改变原值
for(var i of set.entries()){console.log(i)};// (2) [1, 1] (2) [2, 2] (2) [3, 3]

// set应用案例 并集、交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
// 并集
let union = new Set([...a, ...b]);
// Set {1, 2, 3, 4}
// 交集
let intersect = new Set([...a].filter(x => b.has(x)));
// set {2, 3}


