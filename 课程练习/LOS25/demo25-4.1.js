/*3.DOM2级事件处理程序(IE不兼容)
  addEventListenner()
  removeEventListner();
  三个参数:
      要处理的事件名(onclick)
      作为事件处理程序的函数
      布尔值:false事件冒泡(兼容各大浏览器)//可省略，默认为false
            true事件捕获
*/
window.onload=
function(){
    var btn1=document.getElementById('btn1');
    var btn2=document.getElementById('btn2');
    var box=document.getElementById('box');
    function showBox(){
        alert('DOM2级事件的box')
    }
    function showMes(){
       alert('DOM2级事件!');
   };
   function showThis(){
       alert(this);
   }
   //所有事件名去on,函数无括号,false可省略，默认为false
   btn1.addEventListener('click',showMes,false);
   box.addEventListener('click',showBox,false);
   //依次:DOM2级事件! DOM2级事件的box
    
   /*
   //删除事件(无法用btn1.onclick=null;删除)
   btn1.removeEventListener('click',showMes,false)
   */

   /*
   //向同一节点（同一btn1）再添加一个相同事件(同为click)
   btn1.addEventListener('click',showMes,false);
   btn1.addEventListener('click',showThis,false);
   //依次：DOM2级事件!  [object HTMLButtonElement]
   */

   /*
   //DOM0级事件中往同一节点添加同一事件（函数不同）
   btn1.onclick=function(){
       console.log(this);
   };
   btn1.onmousemove=function(){
       console.log("onmousemove事件")//被覆盖
   }
   btn1.onclick=function(){
       console.log('覆盖了前一个onclick事件')
   }
   //onmousemove事件  覆盖了前一个onclick事件
   */
}

//IE事件处理程序（与DOM2级事件不同）
/*
attachEvent()添加事件
detachEvent()删除事件
接收的两个参数：事件处理的名称和事件处理程序的函数，无false或true参数
（不使用三个参数的原因：IE8以及更早的浏览器只支持事件冒泡）
*/
window.onload=function(){
    var btn3=document.getElementById('btn3');
    function getMes(){
        alert("IE浏览器"+'e.type='+e.targrt+' e.type='+e.type);
    };
    btn3.attachEvent('onclick',getMes);//所用事件加'on';
    //删除事件
    btn3.detachEvent('onclick',showMes)
}
