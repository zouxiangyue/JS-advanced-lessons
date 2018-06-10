//Error及异常处理
//通过Error的构造器可以创建一个错误对象。
//当运行时错误产生时，Error的实例对象会被抛出

//try...catch语句将能引发错误的代码放在try块中，并且对应一个响应，然后有异常被抛出
try{//当try中的语句发生错误,会把错误的信息抛给catch,执行catch语句,若try中语句成功,则跳过catch
  var arr=new Array(-5);
}
catch(e){//e为catch块指定一个标识符，该标识符保存由throw语句指定的值,e为异常信息和原因
   console.log(e);//RangeError: Invalid array length
}
//
finally{//无论之前的try,catch如何,finally都会在下一个try之前执行
   console.log("finally")//finally
}


//下面是三种形式的try声明：(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/try...catch)
//catch或finaly至少一个
//1.try...catch
try{
  throw "error1";//throw new Error("error")
}
catch(e){
  console.log(e)//error1
}

//2.try...finally
try{
  throw "error2";
}
finally{
  console.warn("finally");
}

//3.try...catch...finally
try{
  throw "error3";
}
catch(e){
  console.error(e)//error3
}
finally{
  console.log("finally中可写如资源释放的语句");
};
//当发生异常时，可以使用finally子句使您的脚本以更优雅的方式失败；例如，进行通常的清理，您可能需要释放脚本已经绑定的资源。

//try中可以嵌套try
try{
  try{
    throw 'Error1';
  }
  catch(e){
    console.log(e);//Error1
    throw "Error2"
  }
  finally{
    console.log("finally1");
  };
}
catch(e){
  console.log(e)//Error2
}
finally{
  console.log('finally2')
}
//任何给定的异常只会被离它最近的封闭 catch (在异常语句的后面)块捕获一次


//如果try的catch-block中发生另一个异常，则包裹该try..catch的外部try-block中的剩余代码（或在主流中，如果不在外部try-block中）
//将不会执行，因为控制流会立即跳转到外部try的catch-block（或内部的错误发生器，如果不在try-block中）
