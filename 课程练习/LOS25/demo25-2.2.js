//event.target和this的区别
//event.target指向最具体的那个节点，this实际事件发生的那个节点
window.onload=function(e){
    var div3=document.getElementById("div3");
    console.log('e.target='+e.target);
    console.log('this='+this);
   // e.target=[object HTMLDocument]
   // this=[object Window]
    function showEvent(e){
        console.log('e.target='+e.target);
        console.log('this='+this)
    };
    document.onclick=showEvent;
    body.onclick=showEvent;
    div3.onclick=showEvent;
    /**
     e.target=[object HTMLDivElement]
     this=[object HTMLDivElement]
     e.target=[object HTMLDivElement]
     this=[object HTMLBodyElement]
     e.target=[object HTMLDivElement]
     this=[object HTMLDocument]
     */
}
 