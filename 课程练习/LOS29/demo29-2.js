//在ES5中,RegExp构造函数函数创建对象,
//第一种情况:第一个参数是字符串,第二个参数是修饰符
new RegExp('abc','gi')// /abc/gi
new RegExp('abc')// /abc/

//第二种是第一个参数是正则表达式,没有第二个参数修饰符
new RegExp(/abc/);// /abc/
new RegExp(/abc/gi);// /abc/gi

//而ES6的补充,
//出现第三种,允许第一个是正则表达式,还有第二个参数修饰符
new RegExp(/ab/,'i')// /ab/i
new RegExp(/ab/gi,'i')// /ab/i //前面的修饰符会被第二个参数里的修饰符覆盖掉

//ES6中的（粘连sticky）修饰符
var str='aaa_aa_a';
var re1=/a+/g;
console.log(re1.exec(str))//aaa
console.log(re1.exec(str))//aa
console.log(re1.exec(str))//a
console.log(re1.exec(str))//null
var re2=/a+/y;
console.log(re2.exec(str))//aaa
console.log(re2.exec(str))//null
console.log(re2.exec(str))//aaa
console.log(re2.exec(str))//null

//上面代码有两个正则表达式，一个使用g修饰符，另一个使用y修饰符。
// 这两个正则表达式各执行了两次，第一次执行的时候，两者行为相同，剩余字符串都是_aa_a。
//由于g修饰没有位置要求(即剩余字符串中只要出现a,则会返回)，所以执行会返回结果，
//而y修饰符要求匹配必须从头部开始(即剩余字符串的第一个位置要是a,则返回,否则返回null,下一次查找从头开始)，所以第二次和四次返回null

//ES6中的sticky,sourse,flags
var re=/abcde/gimy
console.log(re.sticky);//true
console.log(re.source)//abcde
console.log(re.flags)//gimy