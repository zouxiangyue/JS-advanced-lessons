//对象的创建三种方式

//使用构造函数
function obj(name,id){
    this.name=name;
    this.id=id;
    function f(){
        console.log('learn');
    }
};
var object=new obj('lily',1);

var student={
    name:'lily',
    id:1,
    f:function(){
        console.log('learn');
    }
}

var obj=new Object;
obj.name='lily';
obj.id=1;
obj.f=function(){
    console.log('learn');
};

obj.name;//访问属性，obj['name']
obj.f();//访问方法,obj['f']()
obj.age=18;//添加属性,obj['age']=18
obj.f1()=function(){
    console.log('run');
}//添加方法，obj['f1']=function(){};

delete obj.name;//删除属性

//遍历
for(var i in obj){
    console.log(obj[i]);
}
