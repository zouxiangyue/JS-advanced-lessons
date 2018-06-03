//[]

console.log("12345667".replace(/[3-9]/gi,"X"));
console.log("absxsdfe123Ab".replace(/[a-f1-9]/gi,"X"));//a-f和1-9中的都替换
console.log("absxsdfe123Ab".replace(/[a-f][1-9]/gi,"X"));//把e1替换
console.log("absxsdfe1Q2e3Ab".replace(/[a-f][1-9][A-Z]/gi,"X"));//e1Q e3A替换
/*
12XXXXXX
XXsxsXXXXXXXX
absxsdfX23Ab
absxsdfX2Xb
*/

console.log("2017-10-23".replace(/[0-9]/g,"X"));//XXXX-XX-XX
console.log("2017-10-23".replace(/-/g,"X"));// 2017X10X23
console.log("2017-10-23".replace(/\d-/g,"X"));// 201X1X23
console.log("2017-10-23".replace(/[0-9-]/g,"X"));//XXXXXXXXXX

"sdaf12s2a sdfea23s".replace(/[a-zA-Z_0-9]/,"*");//"*daf12s2a sdfea23s"
"sdaf12s2a sdfea23s".replace(/[a-zA-Z_0-9]/g,"*");//"********* ********"
"sdaf12s2a sdfea23s".replace(/[a-zA-Z0-9]/g,"*");//"********* ********"

//\d、\D、\w、\W、\s、\S 用[]表示
"sdaf12s2a sdfea23s".replace(/[0-9]/g,"*")//\d
"sdaf12s2a sdfea23s".replace(/[^0-9]/g,"*")//\D
"sdaf12s2a sdfea23s".replace(/[a-zA-Z0-9_]/g,"*")//\w(字母，数字，下划线)
"sdaf12s2a sdfea23s.%".replace(/[^a-zA-Z0-9_]/g,"*")//\W，匹配空格 .%//"sdaf12s2a*sdfea23s**"
"sdaf12s2a sdfea23s".replace(/[ ]/g,"*")//\s // "sdaf12s2a*sdfea23s"
"sdaf12s2a sdfea23s".replace(/[^ ]/g,"*")//"********* ********"

//. 关于除了\n和\r以外的所有字符
// /[a-z][0-9][^\n\r]/=/[a-z][0-9]./
'asd1a0\n\rdef z9\rioasd'.match(/[a-z][0-9][\n\r]/gi)//(2) ["a0↵", "z9"]
'asd1a0\n\rdef z9\rio3asd'.match(/[a-z][0-9][^\n\r]/gi)//(2) ["d1a", "o3a"]
'asd1a0\n\rdef z9\rio3asd'.match(/[a-z][0-9]./gi)//(2) ["d1a", "o3a"]

//^ $ \b \B等边界匹配
console.log("is This is a Boy is".replace(/is/g,0));//0 Th0 0 a Boy 0
console.log("is This is a Boy is".replace(/^is/g,0));//0 This is a Boy is
console.log("is This is a Boy is".replace(/is^/g,0));//is This is a Boy is
console.log("This is a Boy is".replace(/is$/g,0));// This a Boy 0
console.log("is This is a Boy is".replace(/$is/g,0))//is This is a Boy is

console.log("This is a Boy is".replace(/is\b/g,0));//is This is a Boy is
console.log("This is a Boy is".replace(/is\B/g,0));//This is a Boy is
console.log("This is a Boy is".replace(/\bis/g,0));//This 0 a Boy 0
console.log("This is a Boy is".replace(/\Bis/g,0));//Th0 is a Boy is

console.log("This is a Boy is".replace(/^is$/g,0));//This is a Boy is
console.log("This is a Boy ais".replace(/is\b/g,0));//Th0 0 a Boy a0
console.log("This is a Boy ais".replace(/\Bis\b/g,0));//Th0 is a Boy a0

//思考如何匹配 12345789abcdef34534789ede
'12345789abcdef34534789ede'.match(/\d+/g)
//(2) ["12345789", "34534789"]
'12345789abcdef34534789ede'.match(/\d{8}/g)
//(2) ["12345789", "34534789"]
'12345789abcdef34534789ede'.match(/\w/g)
//(25) ["1", "2", "3", "4", "5", "7", "8", "9", "a", "b", "c", "d", "e", "f", "3", "4", "5", "3", "4", "7", "8", "9", "e", "d", "e"]
'12345789abcdef34534789ede'.match(/\w+/g)
//["12345789abcdef34534789ede"]
'12345789abcdef34534789ede'.match(/[0-9]+/g)
//(2) ["12345789", "34534789"]
'12345789abcdef34534789ede'.match(/[^0-9]+/g)
//(2) ["abcdef", "ede"]
'afg12345789abcdef34534789ededfa'.match(/\d{8}[^\d]{6}\d{8}[^\d]{3}/g)
//["12345789abcdef34534789ede"]


//量词 注意*在这里是量词，不是充当通配符，充当通配符的是 .
//? 出现0次或1次（最多出现1次）
console.log("AaBbAb_AaaBbbAba".replace(/Aa?/g,0));//0Bb0b_0aBbb0ba
console.log("AaBbAb_AaaBbbAba".replace(/Aa?B?/gi,0));//0b0_00bb00

//+ 出现1次或多次（至少出现1次）相当于{1,}
console.log("AaBbAb_AaaBbbAba".replace(/Aa+/g,0));//0BbAb_0BbbAba
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,}/g,0));//0BbAb_0BbbAba

//* 出现0次或多次（任意次）相当于{0,}
console.log("AaBbAb_AaaBbbAba".replace(/Aa*/g,0));//0Bb0b_0Bbb0ba
console.log("AaBbAb_AaaBbbAba".replace(/Aa{0,}/g,0));//0Bb0b_0Bbb0ba

//{n} 出现n次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1}/g,0));//0BbAb_0aBbbAba
console.log("AaBbAb_AaaBbbAba".replace(/Aa{2}/g,0));//AaBbAb_0BbbAba

//{n,m} 出现n到m次
console.log("AaBbAb_AaaBbbAba".replace(/Aa{1,2}/g,0));//0BbAb_0BbbAba
console.log("AaBbAb_AaaBbbAbaAaaaa".replace(/Aa{1,4}/g,0));//0BbAb_0BbbAba0

//{n,} 出现至少n次
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,}/g,0));//AaBbAb_0BbbAba000
console.log("AaBbAb_AaaBbbAbaAaaaaaaAaaAaaa".replace(/Aa{2,4}/g,0));//AaBbAb_0BbbAba0aa00


//注意：0到n次的写法{0,n}而不是{,n}
console.log("AaBbAb_AaaBbbAba".replace(/Aa{0,3}/g,0))//0BbAb_0BbbAba
console.log("AaBbAb_AaaBbbAba".replace(/Aa{,3}/g,0))//AaBbAb_AaaBbbAba,此时无改变

//思考：
var reg = /d{20}\w\d?\w+\d*\w{3,5}\d{3,}/;
//匹配字母d20次，单字字符一个，数字0或1个，单字字符1或多个，数字0或多个，单个字符3到5个，数字至少3个的字符串
'jdfladddddddddddddddddddddddd_1abcdefg123456xyz90876'.match(reg)//"jdfla0"




