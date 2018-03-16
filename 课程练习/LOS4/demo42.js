//严格模式下全局变量需显式声明，
function s(){
    'use strict'
     a=0;
  };
  s();
  console.log(a);//报错

  function s(){
     a=0;//非严格模式下a可为全局变量
  };
  s();
  console.log(a);//0，不报错

  //严格模式下的this为undefined
  function this1(){
      'use strict'
      console.log(this);//undefined
  }
  this1();

  function this2(){
      console.log(this)//Window
  }

  //使用this判断函数是否为严格模式

  function str(){
    if(this==undefined)
      {console.log(true)
    }
    else {console.log(false)};
 };
 str();//false
'use strict'
 function str(){
    if(this==undefined)
      {console.log(true)
    }
    else {console.log(false)};
 };
 str();//true