//RegExp相关属性
/**
RegExp.prototype.constructor创建该正则对象的构造函数。

RegExp.prototype.global是否开启全局匹配，也就是匹配目标字符串中所有可能的匹配项，而不是只进行第一次匹配。

RegExp.prototype.ignoreCase在匹配字符串时是否要忽略字符的大小写。

RegExp.prototype.lastIndex下次匹配开始的字符串索引位置

RegExp.prototype.multiline是否开启多行模式匹配（影响 ^ 和 $ 的行为）。

RegExp.prototype.source正则对象的源模式文本。
 */
var re=new RegExp(/abc/gim);
re.exec('jdfkajfabcjfk');
console.log(re.lastIndex,re.global,re.ignoreCase,re.multiline,re.source)
//true true true "abc"

//lastIndex下次匹配开始的字符串索引位置
var re1=/ab/
console.log(re1.test('abcdabcd'),re1.lastIndex)//true 0
console.log(re1.test('abcdabcd'),re1.lastIndex)//true 0
console.log(re1.test('abcdabcd'),re1.lastIndex)//true 0
console.log(re1.test('abcdabcd'),re1.lastIndex)//true 0

var re2=/ab/g
console.log(re2.test('abcdabcd'),re2.lastIndex)//true 2
console.log(re2.test('abcdabcd'),re2.lastIndex)//true 6
console.log(re2.test('abcdabcd'),re2.lastIndex)//false 0//当把整个字符串找完后，lastIndex=0;
console.log(re2.test('abcdabcd'),re2.lastIndex)//true 2
//LastIndex发生了改变

while (re1.test("aaa")){
    console.log(re.lastIndex);//每次执行后从index=0开始重新匹配//无限循环
}
while (re2.exec("aaa")){
    console.log(re2.lastIndex);//每次执行后从lastInddex开始匹配
}
//1,2,3

//注：第一次查找和第二次查找的的re 和 str都指向同一块区域时，第二次才从lastIndex开始找
var re=/a/g
var str='abcabc'
console.log(re.exec(str))//["a", index: 0, input: "abcabc", groups: undefined]
console.log(re.exec(str))// ["a", index: 3, input: "abcabc", groups: undefined]

/j/g.exec('afsdjadsj');//["j", index: 4, input: "afsdjadsj", groups: undefined]
/j/g.exec('afsdjadsj');//["j", index: 4, input: "afsdjadsj", groups: undefined]

//globol是否开启全局，第二次就从lastIndex的位置开始找
var re3=/abc/;
var re4=/abc/g
console.log(re3.global);//false
console.log(re4.glabal);//true
