//函数对象的属性,访问器属性
var obj={
    _x:11,
    get x(){
        return this._x;
    },
    set x(val){
        this._x=val;
    }
};
console.log(obj.x);//调用obj里的函数x();11
obj.x=22//调用obj的函数x(val),改变_x
//若改为obj.x()=22或obj.x(22)都报错
console.歧义log(obj.x,obj._x);//22 22
obj.hasOwnProperty("x");//访问器属性,true
obj.hasOwnProperty("_x");//数据属性,true

var obj={
    x:11,
    get x(){
        return this.x;
    },
    set x(val){
        this.xx=val;
    }
};
console.log(obj.x)//报错,x有歧义

var obj={
    _x:11,
    get x(){
        return this._x;
    },
};
console.log(obj.x);//11
obj.x=22;//只读无法修改_x;
console.log(obj.x,obj._x);//11,11

var p1={
    _name:'Tom',
    _age:20,
    set age(val){
        if(val>0 && val<100){
            this._age=val;
        }
        else{console.log("请重置")}
    },
    get age(){
        return this._age;
    }
}
p1.age=23;//调用age(val),age();23
p1.age=200;//请重置


