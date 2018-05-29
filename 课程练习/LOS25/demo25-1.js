//JS事件:JS事件是浏览器或用户自身执行的某种动作(DOM和BOM)
//常见事件:load、click、mouseover、keydown、keyup
function foo(e){
    alert(e,e.target)
}
window.onload=function(){//页面加载事件
    console.log("window onload");
    var div1=document.getElementById("div1");
    div1.onclick=function(e){
         console.log("div1 onclick")
         foo(e);
    }
}
//页面未加载完,无法识别div2,报错
/*
var div2=document.getElementById("div2");
div2.onmousemove=function(){
    alert('报错')
}
*/
