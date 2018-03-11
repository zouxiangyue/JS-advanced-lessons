var str="abcdefg";
//string.concat("s")拼接字符串
str.concat("aa")//abcdefgaa;
//string.slice(index1,index2)从下标为index1开始，在下标为index2结束截取字符串，不包含下标为index2的字符,index2可省略
str.slice(2,4)//cd
str.slice(4)//efg
str.slice(-6,4);//实质是silce(1,4)length+index1（index2）//bc
str.slice(-6)//bcdefg

string.split('s',shu)//以's'为界，分割有shu个的数组
var str="abcabg";
str.split('b')//["a","ca","g"]
str.split('b',1)//["a"]
str.split('b',4)//["a","ca","g"]

string.charAt(index)//返回下标为index的字符
str.charAt(4)//e
str.charAt(2)//b
 
//从下标为1开始找字符串ab，返回ab开始下标
str.indexOf('ab',1)//3

var str="  abcd bfg \t\n";
str.trim();//返回已移除前导空格、尾随空格和行终止符的原始字符串

var str="abcdefg";
str.substr(2,4)//cdefg，
str.string(2,4)//4是结束的位置，//cd