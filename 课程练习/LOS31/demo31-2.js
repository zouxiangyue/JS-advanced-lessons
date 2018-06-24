var obj={
    name:'Jack',
    add(a,b){
        console.log(a+b)
    }
};
obj.add(1,2);//3
//再添加一个方法
obj.add=function(){
    console.log('覆盖了前面');
}
obj.add();// 覆盖了前面
obj.add(1,2);//覆盖了前面

//在ES5中在为对象添加新的属性时,若是使用一个别人定义的对象时,很有可能添加一个属性名与原来的重复,
//此时会破坏原有的属性
//因此在添加属性时,使用独一无二的Symbol类型,则解决这一问题
var obj={
    name:'Jack',
    say(){
        console.log(this.name)
    }
};
obj.Symbol['say']=function(){
    console.log(this.name)
}

//使用Symbol是用[]，而不是用点操作符
var MySymbol=Symbol('foo');
//第一种
var obj={}
obj[MySymbol]='hello';
//第二种
var obj={
    [MySymbol]:'hello'
}
//第三种
Object.defineProperty(a, mySymbol, { value: 'Hello!' });
obj[MySymbol]//'hello'



