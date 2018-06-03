//正则表达式RegExp对象(regular expression):
/*
正则表达式描述了字符的模式对象。

当您检索某个文本时，可以使用一种模式来描述要检索的内容。RegExp 就是这种模式。

简单的模式可以是一个单独的字符。

更复杂的模式包括了更多的字符，并可用于解析、格式检查、替换等等。

您可以规定字符串中的检索位置，以及要检索的字符类型，等等。
*/

/*
i :执行对大小写不敏感的匹配。
g :执行全局匹配（查找所有匹配而非在找到第一个匹配后停止）。
m :执行多行匹配。
 */
typeof RegExp;//"function"
RegExp instanceof Object;//true
//创建一个正则表达式
//字面值直接创建/pattern/attributes
var re1=/abc123/g
var re2=/[abc]\da?/gi

//构造器创建new RegExp(pattern, attributes);
//pattern可为字符串或正则表达式
var re3=new RegExp(/[0-9]a+(c|d)/gm);
var re4=new RegExp(/\\d\a*/gi);
var re5=new RegExp(/[0-9]a+(c|d)/,"gm")
typeof re5;//"object"
//pattern是字符串(普通字符)
var re5=new RegExp("jaslkfd","gm")
console.log(re5);// /jaslkfd/gm
var re6=new RegExp("/jaslkfd/","gm");// /\/jaslkfd\//gm

//不用new
var re7=RegExp(/^abb[0-9]/,"g");// /^abb[0-9]/g
/*
返回值:
一个新的 RegExp 对象，具有指定的模式和标志。
如果参数 pattern 是正则表达式而不是字符串，那么 RegExp() 构造函数将用与指定的 RegExp 相同的模式和标志创建一个新的 RegExp 对象。

如果不用 new 运算符，而将 RegExp() 作为函数调用，那么它的行为与用 new 运算符调用时一样，
只是当 pattern 是正则表达式时，它只返回 pattern，而不再创建一个新的 RegExp 对象。
 */



