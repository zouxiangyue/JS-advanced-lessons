//有函数嵌套时,不进行作用域的传递
var point={
    x:0,
    y:0,
    moveTo: function(x,y){
       function moveToX(){
           this.x=x
       }
       function moveToY(){
           this.y=y;
       };
       moveToX();
       moveToY();
    }
}
point.moveTo(1,2);
console.log(point);//{x: 0, y: 0, moveTo: ƒ}
console.log(window.x,window.y)//1 2
//嵌套中moveToX和moveToY作为一般函数处理,其this指向全局对象window

//使用变量软绑定(that或self)
var point={
    x:0,
    y:0,
    moveTo: function(x,y){
        var that=this;//使that指向point
       function moveToX(){
           that.x=x
       }
       function moveToY(){
           that.y=y;
       };
       moveToX();
       moveToY()
    }
}
point.moveTo(1,2);
console.log(point);//{x: 1, y: 2, moveTo: ƒ}

//使用bind进行硬绑定
var point={
    x:0,
    y:0,
    moveTo: function(x,y){
       function moveToX(){
           this.x=x
       }
       function moveToY(){
           this.y=y;
       };
       moveToX.bind(point)();
       moveToY.bind(point)();
    }
}
point.moveTo(1,2);
console.log(point);//{x: 1, y: 2, moveTo: ƒ}

//使用call,apply的方法间接调用
var point={
    x:0,
    y:0,
    moveTo: function(x,y){
       function moveToX(){
           this.x=x
       }
       function moveToY(){
           this.y=y;
       };
       moveToX.call(point);// moveToX.call(this),moveToX.apply(this)
       moveToY.call(point);// moveToY.call(this),moveToY.apply(this)
    }
}
point.moveTo(1,2);
console.log(point);//{x: 1, y: 2, moveTo: ƒ}
