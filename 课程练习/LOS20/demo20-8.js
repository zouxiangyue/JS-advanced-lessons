//使用正则表达式和数组相关的方法，将邮箱进行分类,要求分为4类，并存在4个对应的数组中
var emails = [
    "Ky-D1zU@sina.cn", "jzX4xq@gmail.cn", "J8XNzf7SQV@sohu.com.cn",
    "TSmA4xX@sohu.com.cn", "yDzwr@msn.cn", "l7bSnfYDz-3OO@sina.cn",
    "uavXW@sina.com", "w65FgY5@gmail.cn", "wY6iRUCr@126.com.cn",
    "Gy0GKnygcG@sina.com.cn", "SoMUWIfO@qq.com", "DGOoczUOLl36Oh@163.cn",
    "QP8ENE@gmail.com.cn", "la4-Qu7xxn@qq.com.cn", "_IKhiFMI-rL@sohu.com"
];

var sohuArray = [];
var sinaArray = [];
var qqArray = [];
var otherArray = [];
for(var i=0;i<emails.length;i++){
    if(/sina/.test(emails[i])){
        sinaArray.push(emails[i])
    }
    else if(/sohu/.test(emails[i])){
        sohuArray.push(emails[i])
    }
    else if(/qq/.test(emails[i])){
        qqArray.push(emails[i])
    }
    else{
        otherArray.push(emails[i]);
    }
}
console.log(sohuArray);
console.log(sinaArray);
console.log(qqArray);
console.log(otherArray);
