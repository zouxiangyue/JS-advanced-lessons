// 同步:任务A和任务B同节奏进行,存在两个任务相互等待
// 异步:任务A和任务B各做各的,互不干涉,不互相等待;

//同步函数的回调(普通函数)//顺序执行
function fun(callback, a) {
    callback();
    console.log(a);
  }
  function f() {
    console.log('回调函数')
  }
  fun(f, 1)
  
  //异步函数回调(事件监听函数)
  function fun() {
    for(var i=0;i<5;i++){
      console.log(i);
      setTimeout(function(){
        console.log(i)
      },1000)
    }
  };
  fun()//异步执行 输出全是4
  
  function f(a) {
    for (var i = 0; i < 5; i++) {
      console.log('a*i='+a*i);
      var speed = Math.random() * 100000;
      setTimeout(function (a) {
        console.log('The timeOut is' + speed)
      }, speed);
    }
  }
  f(1);
  
  
  
  // Ajax实现异步通信,其核心为XMLHttpRequest
  // XMLHttpRequest对象实现异步
  //   少部分的页面数据可与服务器进行交互，不必加载整个页面
  
  // http是一种无状态的协议，与服务器建立不持久的连接
  
  // 计算机通过网络进行通信的规则，请求服务和信息
  
  
  // XMLHttpRequest
  // open(method,url,async),async是同步(true)请求还是异步(false)
  // 默认为true
  
  //  send(str)可以不填写或null;
  // 用readyState.onreadystatechange属性监听服务器响应请求的变化
  