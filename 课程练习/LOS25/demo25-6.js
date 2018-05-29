//DOM事件对象的属性，方法和事件流
/**
 target属性
 bubbles:bubbles 事件属性返回一个布尔值，如果事件是起泡类型，则返回 true，否则返回 fasle
 cancelable:如果用preventDefault() 方法可以取消与事件关联的默认动作，则为 true，否则为 fasle
 stopPropagation():用于阻止事件冒泡
 */

 //IE中的事件对象
 /**
  cancelBubble属性：设置为false表示不阻止冒泡，true为阻止冒泡
  returnValue属相：用于组织事件的默认行为，设为false表示阻止
  */
window.onload=function(){
    var div3=document.getElementById("div3");
    var div4=document.getElementById("div4");
    var div5=document.getElementById("div5");
    var a=this.document.getElementById('a');
    div3.addEventListener('click',function(e){
        console.log('div3');
    },false);
    div4.addEventListener('click',function(e){
        console.log('div4');
        console.log(e.bubbles,e.cancelable,e.cancelBubble)//true true false
        e.stopPropagation();
        //e.cancelBubble=true;//老IE浏览器阻止冒泡
        console.log(e.bubbles,e.cancelable,e.cancelBubble)//true true true
    },false);
    div5.addEventListener('click',function(e){
        console.log('div5');
        console.log(e.bubbles,e.cancelable,e.cancelBubble)//true true false
        console.log(this.hidden)//false//隐藏效果
    },false)
    a.addEventListener('click',function(e){
        console.log('a');
        e.preventDefault()//链接不再跳转
        //e.returnValue=false;//老IE组织事件的默认行为
        console.log(e.cancelable)//true
    });
    //div5 div4

    /*
   div3.addEventListener('click',function(e){
       console.log('div3');
   },true);
   div4.addEventListener('click',function(e){
       console.log('div4');
       console.log(e.bubbles,e.cancelable,e.cancelBubble)//true true false
       e.stopPropagation();
      // e.cancelBubble();//老IE浏览器
       console.log(e.bubbles,e.cancelable,e.cancelBubble)//true true true
   },true);
   div5.addEventListener('click',function(e){
       console.log('div5');
       console.log(e.bubbles,e.cancelable,e.cancelBubble)//true true false
   },true)
   a.addEventListener('click',function(e){
       console.log('a');
       e.preventDefault()//链接不再跳转
       console.log(e.cancelable)//true
   });
   //div3,div4
   //阻止了div5的输出
   */
};

