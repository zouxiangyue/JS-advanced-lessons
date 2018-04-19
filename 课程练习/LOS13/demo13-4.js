//通过字面值创建对象
var obj={
    num:1,
    str:'Sherly',
    show:function(){
        console.log(this.num,this.str);
    }
}
//create创建对象
obj1=Object.create(obj);
obj1.age=17;
for(var i in obj1){
    console.log(i,obj[i]);
}
//构造函数创建
function per(name,id){
    this.name=name;
    this.id=id;
}
per.prototype.show=function(){
    console.log(this.name,this.id);
}
var p1=new per('Tom',11);
