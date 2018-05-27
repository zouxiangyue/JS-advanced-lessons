/*3.DOM2级事件处理程序(IE不兼容)
  addEventListenner()
  removeEventListner();
  三个参数:
      要处理的事件名(onclick)
      作为事件处理程序的函数
      布尔值:false事件冒泡(兼容各大浏览器)
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
   //所有事件名去on,函数无括号
   btn1.addEventListener('click',showMes,false);
   box.addEventListener('click',showBox,false)
   //依次:DOM2级事件! DOM2级事件的box
   /*
   btn1.addEventListener('click',showMes,true);
   box.addEventListener('click',showBox,true);
   依次:DOM2级事件的box DOM2级事件!
    */
   //删除事件(无法用btn1.onclick=null;删除)
   //btn1.removeEventListener('click',showMes,false)

   //IE事件处理程序
}