//JSON.stringify(value,replacer,space)的replacer和space参数

//replacer参数可以是一个函数或者一个数组
//若为函数,将被序列化的值的每个属性都会经过该函数的转换和处理,含有两个参数key和value,
//由外向内遍历(类似于树的先根遍历)
/*
如果返回一个 Number, 转换成相应的字符串被添加入JSON字符串。
如果返回一个 String, 该字符串作为属性值被添加入JSON。
如果返回一个 Boolean, "true" 或者 "false"被作为属性值被添加入JSON字符串。
如果返回任何其他对象，该对象递归地序列化成JSON字符串，对每个属性调用replacer方法。除非该对象是一个函数，这种情况将不会被序列化成JSON字符串。
如果返回undefined，该属性值不会在JSON字符串中输出。

注:当replacer为函数时,key和value的值可被修改
 */
JSON.stringify({'1':1,'2':2,'3':3,'4':4},
            function(key,value){
                //if(typeof(value==="number")){key='0',value=0}//key和value的值被修改
                console.log('k='+key,value);
                return value;
            }
)
/*
key=  {1: 1, 2: 2, 3: 3, 4: 4}//key=空格
key=1 1
key=2 2
key=3 3
key=4 4
"{"1":1,"2":2,"3":3,"4":4}"
 */

JSON.stringify(
    {
      x:1,
      y:Symbol('foo'),
      [Symbol.for('JSON')]:'JSON',
      str:'replace',
      arr:[11,22,[undefined,false,Symbol('JSON')]]
    },
    function(k,v){
        if(typeof v==="number"){
            return undefined
        }
        else{
            return v
        }
    }
)
//"{"str":"replace","arr":[null,null,[null,false,null]]}"

var j1=JSON.stringify(
    {
      x:1,
      y:2,
      str:'replace',
      arr:[11,22,[undefined,false,Symbol('JSON')]]
    },
    function(k,v){
        if(typeof k==="string"){
            return undefined
        }
        else{
            return v
        }
    }
)
console.log(j1)//undefined
/*
第一次传入的k="",v={x:1,y:2,str:'replace',arr:[11,22,[undefined,false,Symbol('JSON')]]},
执行else,返回v=undefined,原序列化字符串整个被修改为undefined,而在对象的序列化中,undefined会被忽略
所以再向内无法找到k,v,则退出函数,最终只是输出undefined
*/

//value为数组
//注意: 不能用replacer方法，从数组中移除值(values)，如若返回undefined或者一个函数，将会被null取代。
JSON.stringify(['1',1,2,3],
            function(key,value){//key为下标,value为数组元素
                if(typeof value==="number"){value=0;console.log(key,value)};
                return value;
            }
)
/*
1 0
2 0
3 0
"["1",0,0,0]"
*/

//如果replacer是一个数组，只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中
JSON.stringify({name:'JSON',age:18},['name'])//"{"name":"JSON"}"


//space参数指定缩进用的空白字符串，用于美化输出(空格("  "),数字,字母,'\t'(缩进),'\n'(换行))
JSON.stringify({x:1,y:1},null,3)
/*
"{
   "x": 1,//前面3个空格
   "y": 1
}"
*/