/*
事件流:描述的是从页面接受事件的顺序

事件冒泡:事件最开始有最具体的元素(文档中嵌套层次最深的那个节点)
接收,然后逐级向上传播至那个最不具体的节点(文档)

事件捕获:与事件冒泡相反,事件有最不具体的元素逐级向下至最具体的元素
*/
window.onload=function(){
    var div3=document.getElementById("div3");
    var btn=document.getElementById("btn");
    var a=document.getElementById("a");
    function printDoc(){
        console.log('document');
    }
    function printBody(){
        console.log('body');
    }
    function printDiv3(){
        console.log('div3')
    };
    function printBtn(){
        console.log('btn')
    }

    //true:相当于树的先根遍历
    //false:相当于树的后根遍历
    document.addEventListener('click',printDoc,false);
    document.body.addEventListener('click',printBody,false);
    div3.addEventListener('click',printDiv3,false);
    btn.addEventListener('click',printBtn,false);
    //btn div3 body document
    
   document.addEventListener('click',printDoc,true);
   document.body.addEventListener('click',printBody,false);
   div3.addEventListener('click',printDiv3,true);
   btn.addEventListener('click',printBtn,false);
   //document div3 btn body
   
}