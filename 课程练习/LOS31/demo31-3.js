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