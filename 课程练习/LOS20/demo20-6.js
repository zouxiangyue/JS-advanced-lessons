//贪婪模式和费贪婪模式
//默认为贪婪模式
'12345abcdef'.replace(/\d{1,}\w{2,4}/,0)//"0ef"//贪婪模式，最大可能的匹配最多
//加?改为非贪婪模式
'12345abcdef'.replace(/\d{1,}?\w{2,4}?/,0)//"045abcdef"
'12345abcdef'.replace(/\d{1,}?\w{2,4}?/g,0)//"00bcdef"
'1234534566'.replace(/\d{1,}?/g,0)//"0000000000"

//分组(),(m|n)
console.log("NameNameName_11111".replace(/Name{3}/,"X"));//NameNameName_11111
console.log("NameNameName_11111".replace(/(Name){3}/,"X"));//X_11111

console.log("a1b2c3d4e5".replace(/[a-z]\d{3}/,"X"));//a1b2c3d4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3}/,"X"));//Xd4e5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}/,"X"));//Xe5
console.log("a1b2c3d4e5".replace(/([a-z]\d){3,4}?/,"X"));//Xd4e5

"abcdefghijk".replace(/abcde|fghijk/g,"X");//XX
"abcdefghijk_abcdehijk_abcfghijk".replace(/abc(de|fg)hijk/g,"X");//abcdefghijk_X_X

//练习：
//将"xxabccxxdexx"替换为"yyabccxxdeyy"
"xxabccxxdexx".replace(/\bxx|xx\b/g,'yy')
"xxabccxxdexx".replace(/^xx|xx$/g,'yy')
//"yyabccxxdeyy"

"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");//"10/23/2017"
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$2/$3/$1");//"23/$3/10"
"2017-10-23".replace(/\d{4}-\d{2}-\d{2}/,"$1/$2/$3");//"$1/$2/$3"

"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$1/$2/$3");//"2017/10/23"
"2017-10-23".replace(/(?:\d{4})-(\d{2})-(\d{2})/,"$1/$2/$3");//"10/23/$3"
"2017-10-23".replace(/(\d{4})-(\d{2})-(\d{2})/,"$2.$3.$1");//"10.23.2017"

//转义字符\,写在需要转义字符的前面
console.log(/^ab$/.test("ab"));//true
console.log(/^(ab)$/.test("(ab)"));//false
console.log(/^(ab)/.test("(ab)"));//false
console.log(/^(ab)$/.test("ab"));//true
console.log(/^\(ab\)$/.test("(ab)"));//true

//正则前瞻，了解即可 判断后边是否满足断言
console.log("a23*4vv".replace(/\w(?=\d)/g,"X"));//XX3*4vv 正项前瞻//匹配后面是数字的单个字符
console.log("a23*4v8".replace(/\w(?=\d)/g,"X"));//XX3*4X8
console.log("a23*4v8".replace(/\w(?!\d)/g,"X"));//a2X*XvX 负项前瞻//匹配后面不是数字的单个字符