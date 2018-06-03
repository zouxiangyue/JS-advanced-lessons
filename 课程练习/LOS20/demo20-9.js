//1.给定这样一个连字符串，var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
//写一个function提取上述字符串中的字符最终输出：[254,289,675]
var arr;
function numArr(str){
    arr=str.match(/\d+/g);
    for(var i=0;i<arr.length;i++){
        arr[i]=parseInt(arr[i])
    }
}
var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
numArr(s1);
console.log(arr);
/*function getArr(s){
    var arr=['','',''];
    var j=-1;
    for(var i=0;i<s.length;i++){
        if(Number(s[i])==s[i]){
            if(Number(s[i-1])==s[i-1])arr[j]+=s[i];
            else {
                j++;
                arr[j]+=s[i];
            }
        }
    }
    for(var i in arr){
        arr[i]=Number(arr[i]);
    }
    console.log(arr)
};
var s1 = "dgfhfgh254bhku289fgdhdy675gfh";
getArr(s1);
*/

//2.给定这样一个连字符串，var s2 = "get-element-by-id";
//写一个function转换为驼峰命名法形式的字符串输出：getElementById
function getTuofeng(str){
    var c;
    var re=/-/g;
    while(re.test(str)){
        c=str[re.lastIndex];
        c=c.toUpperCase();
        console.log(c);
        str=str.replace(/-./,c);
    }
    console.log(str);
}
var s2 = "get-element-by-id";
getTuofeng(s2);
/*
function fun(s){
    var arr=s.split('-');
    var str=arr[0]
     for(var i=1;i<arr.length;i++){
         arr[i]=(arr[i].charAt(0).toUpperCase())+arr[i].substr(1,arr[i].length-1);
         str+=arr[i]
     }
     console.log(str);
    
}
var s2 = "get-element-by-id";
fun(s2);



*/
//3.写出正则表达式，从一个字符串中提取链接地址。
//如var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
//写一个function从s3中提取出网址，输出数组：["www.baidu.com","www.edu2act.cn"]
var s3 = "测试<a href = http://www.baidu.com/>笔试</a> <a href = http://www.edu2act.cn/>笔试</a>正则";
function getA(str){
    var re=/w{3}.\w+.(cn|com)/g
    var arr=str.match(re);
    console.log(arr);
}
getA(s3);
// ["www.baidu.com", "www.edu2act.cn"]