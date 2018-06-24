//ES中对默认值的设置
var sum=(a,b)=>{
    a=a || 1;
    b=b || 2;
    return a+b;
}
sum();//3
sum(0,0)//3 //存在缺陷,不是0+0;

//升级为
var sum=(a,b)=>{
    if(a!=false)a=a || 1;//(a!=false)&&(a=a || 1);
    if(b!=false)b=b || 2;//(b!=false)&&(b=b || 1);
    return a+b;
}

//ES6中对默认值的升级
//含有默认值的参数放在参数列表的后面,否则可能报错
var foo=(x,y=1,z=1)=>{
    return a+b+z;
}
foo(1);//3
foo(1,2,3)//6

var foo=(x=1,y=1,z)=>{
    return x+y+z;
}
foo(1)//NaN
foo(1,2)//NaN
foo(,,2)//报错
foo(1,2,3)//6