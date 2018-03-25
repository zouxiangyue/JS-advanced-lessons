// && || 函数参数的默认值

function sum(a,b,c){
    a=a || 2;
    b=b || 4;
    c=c || 6;
    return a+b+c;
};
sum();//12
sum(1);//11
sum(1,2);//9
sum(1,2,3);//6
sum(0,0,0)//12,a,b,c的值仍是2,4,6，因此该函数不能传递0，null，undefined;

//优化
var sum = function(a,b,c){
    if(a!=false){a = a||4;}
    if(b!=false){b = b||4;}//(b!=false)&&(b=b||4);
    if(c!=false){c = c||6;}//(c!=false)&&(c=c||5);
    return a+b+c;
};
console.log(sum(1,2,3));
console.log(sum(1,2));
console.log(sum());
console.log(sum(1,0,0));