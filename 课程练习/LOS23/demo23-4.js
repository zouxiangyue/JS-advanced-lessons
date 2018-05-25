//JSON,parse(text,reviver)
//text:要被解析成JavaScript值的字符串,与stringify的作用相反
var j1=JSON.parse('{}');console.log(typeof j1)//object
JSON.parse('"abc"')//"abc" //JSON.parse(""abc"")//会报错
JSON.parse('false')//false
JSON.parse('null')//null

//text中出现了不应该出现在JSON字符串中那些(undefined,函数,Symbol),会报错
JSON.parse('[undefined,null,Object]')//报错

//reviver函数,从最最里层的属性开始，一级级往外，最终到达顶层(相当于树的后根遍历)
//如果 reviver 返回 undefined，则当前属性会从所属对象中删除，如果返回了其他值，则返回的值会成为当前属性新的属性值
//最外层的key=""
JSON.parse('{"x":1,"y":{"a":"a","b":false,"c":[null,true]}}',
  function(k,v){
    if(typeof(v)==="string"){
      console.log(k,v);
      return undefined;//
    }
    else{
      console.log(k,v);
      return v;
    }
  }
)
/*
 x
 a
 b
 0
 1
 c
 y
   //空白
 */