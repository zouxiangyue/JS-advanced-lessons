//兼容浏览器
//1.使用函数判断能力
window.onload=function(){
    var btn1=document.getElementById('btn1');
    var btn2=document.getElementById('btn2');
    var box=document.getElementById('box');
    //对浏览器支持进行判断，添加事件
    function showMes(e){
        alert(e.type);
    }
    function addEvent(ele,type,fun){
        if(ele.addEventListener){
           ele.addEventListener(type,fun,false)
        }
        else if(ele.attachEvent){
           ele.attachEvent('on'+type,fun);
        }
        else{
           ele['on'+type]=fun;
        }
    };
    function removeEvent(ele,type,fun){
        if(ele.removeEventListener){
            ele.removeEventListener(type,fun,false);
        }
        else if(ele.detachEvent){
            ele.detachEvent('on'+type,fun)
        }
        else{
            ele['on'+type]=null;
        }
    }
    //添加事件
    addEvent(btn2,'click',showMes);
    removeEvent(btn2,'click',showMes);

//2.使用对象判读能力
  var eventUtil={
    addHandler:function(element,type,Handler){
        if(element.addEventListener){
            element.addEventListener(type,Handler,false)
         }
         else if(element.attachEvent){
            element.attachEvent('on'+type,Handler);
         }
         else{
            element['on'+type]=Handler;
         }
    },
    removeHandler:function(element,type,Handler){
        if(element.removeEventListener){
            element.removeEventListener(type,Handler,false);
        }
        else if(element.detachEvent){
            element.detachEvent('on'+type,Handler)
        }
        else{
            element['on'+type]=null;
        }
    }
  };
  eventUtil.addHandler(btn3,'mousemove',showMes);
  eventUtil.removeHandler(btn3,'mousemove',showMes);
}