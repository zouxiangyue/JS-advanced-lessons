/*
使用正则表达式的方法
exec	一个在字符串中执行查找匹配的RegExp方法，它返回一个数组（未匹配到则返回null）(包含匹配到的字符串，以及相关属性)。
test	一个在字符串中测试是否匹配的RegExp方法，它返回true或false。
match	一个在字符串中执行查找匹配的String方法，它返回一个数组或者在未匹配到时返回null。
search	一个在字符串中测试匹配的String方法，它返回匹配到的位置索引，或者在失败时返回-1。
replace	一个在字符串中执行查找匹配的String方法，并且使用替换字符串替换掉匹配到的子字符串。
split	一个使用正则表达式或者一个固定字符串分隔一个字符串，并将分隔后的子字符串存储到数组中的String方法。
*/

//RegExp.prototype.exec()
var re1=/a./gi
var str1='this is an apple!';
re1.exec(str1);
//["an", index: 8, input: "this is an apple!", groups: undefined]
var a=re1.exec(str1);
console.log(a);
//["ap", index: 11, input: "this is an apple!", groups: undefined]
alert(a);//ap
re1.exec('this is brein')//null

var regex1=RegExp('foo*','g');
var str1='foot football foooo';
var arr;
while((arr=regex1.exec(str1))!=null){
    console.log('found='+arr[0],'next:'+regex1.lastIndex)
}
/**
found=foo next:3
found=foo next:8
found=foooo next:19
 */
//RegExp.prototype.test()
/a*(b|c)/gi.test('abbcdaaabcabc');//true
/abcd/g.test('abcabc')//false

console.log(/oo\B/.test("moon"));//true
console.log(/oon\B/.test("moon"));//false
console.log(/oo\B/.test("moon"));//true
console.log(/\Boo\B/.test("moon"));//false

//String.prototype.match()//将所用能匹配的字符串放入数组，返回一个数组
'abcdefdbacfg'.match(/a?(b|c)/g)// ["ab", "c", "b", "ac"]
'abcdefdbacfg'.match(/a?(b|c)/)//["ab", "b"]//不是全局，只查找一次
'abced'.macth(/ef/gi)//null//找不到返回null

console.log("moon".match(/oon\B/));//null
console.log("moo".match(/\Boo\B/));//null

//String.prototype.replace(regex,newstr)
//regex:一个RegExp 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
//newstr:用于替换掉第一个参数在原字符串中的匹配部分的字符串
'abcabcdef'.replace(/ab/g,'a1b1');//"a1b1ca1b1cdef"
'abcabcdef'.replace(/ab/,'a1b1');//"a1b1cabcdef"

//\b放在字符或字符串的前面，匹配前边界，放在后面，匹配后边界
"moon".replace(/\bm/,'a')//"aoon"
"moon".replace(/m\b/g,'a')//"moon"//无变化
"moon".replace(/n\b/g,'a')//"mooa"
"moon".replace(/\bmoo/,'a')//"an"
"moon".replace(/oon\b/,'a')//"ma
"moon".replace(/\Bo/,'a')//"maon"
"moon".replace(/o\B/,'a')//"maon"
"moon".replace(/o\B/g,'a')//"maan"
"moon".replace(/oo\B/,'a')//"man"
"moon".replace(/moo\B/g,'a')//"man"
"moon".replace(/moo\B/g,'a')//"an"
"moon".replace(/\Boon/g,'a')//"ma"

"1m2o3o4n5".replace(/.\d/g,'d')//"1dddd"
"1m2o3o4n5".replace(/\d/g,'d')//"dmdododnd"
"1m2o3o4n5".replace(/\D/g,'d')//"1d2d3d4d5"

"sdafsa sdfea2s".replace(/a\ds/g,"*");//"sdafsa sdfe*"
"sdafsa sdfea23s".replace(/\d/g,"*");//"sdafsa sdfea**s"
"sdafsa sdfea23s".replace(/\d/,"*");//"sdafsa sdfea*3s"
"sdafsa sdfea23s".replace(/[0-9]/,"*");//"sdafsa sdfea*3s"

"sdafsa sdfea2s".replace(/a\ws/g,"*");//"sd*a sdfe*"
"sdafsa sdfea2s".replace(/a\Ws/g,"*");//"sdafs*dfea2s"

//将下列文章中 单独的大写C统一改为大写D，要求其他的c不受影响

'Chaude and Cold A patron in Montreal cafe turned on a tap in the washroom and got scalded. "This is an outrage," he complained. "The faucet marked C gave me boiling water.""But, Monsieur, C stands for chaude - French for hot. You should know that if you live in Montreal.""Wait a minute," roared the patron. "The other tap is also marked C.""Of course," said the manager, "It stands for cold. After all, Montreal is a bilingual city."'.repalce(/C/g,D)
 
//String.prototype.split()
'xayazam'.split(/a/,2)//(2) ["x", "y"]
'xayazam'.split(/a/g)//(4) ["x", "y", "z", "m"]
'xayazam'.split(/a/)//(4) ["x", "y", "z", "m"]

//匹配一个非单词边界  /\B../匹配"noonday"中得'oo', 而/y\B./匹配"possibly yesterday"中得’ye‘
console.log("noonday".match(/\B../));
console.log(/\B../.test("noonday"));

//String.prototype.search();
console.log("a1b2c3d4".search(/1/));//返回index 1
console.log("a1b2c3d4".search(/f/));//返回index -1 
console.log("a1b2c3d4".search(/\d/g));//返回index 1 
console.log("a1b2c3d4".search(/\d\w/g));//返回index 1 

var re=/\d/g;
var str='a1b2c3d4';
console.log(re.search(str))//返回index 1
console.log(re.search(str))//返回index 2