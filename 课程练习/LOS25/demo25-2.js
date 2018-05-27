//事件对象
//当事件发生时会产生对应的事件对象（如：鼠标事件对象、键盘事件对象等）
//事件对象（Event）包含对应事件的相关信息（如触发的元素、坐标信息、键值信息等）

window.onload=function(e){//把e去掉对后面没影响
    var div1=document.getElementById("div1");
    var div2=document.getElementById("div2");
    var div3=document.getElementById("div3");
    console.log(e,e.type);//Event  "load"
    console.log(e.target);//document
    console.log(this)//Window //this和e.target不一样
    div2.onclick=function(e){
        console.log(e,e.type);//MouseEvent "click"
        console.log(this,e.target)//此处this和e.target一样
    }
    //clientX：返回当事件被触发时，鼠标指针相对于浏览器的水平坐标。
    //clientY：鼠标指针的垂直坐标。
    div1.onclick=function(e){
        console.log(e);
        console.log(this,e.target.id);// <div id="div1"></div> "div1"
        console.log(e.clientX,e.clientY)
    }
    function foo(){
        /*console.log(e);
        console.log(e.__proto__);
        console.log(e.__proto__.__proto__);
        console.log(e.__proto__.__proto__.__proto__);//null
        console.log(e.__proto__.__proto__.__proto__.__proto__);//报错*/
        for(var k in e){
            console.log(k)
        };
        for(var k in e.__proto__){
            console.log(k)
        }
    };
    div3.onclick=foo;
}