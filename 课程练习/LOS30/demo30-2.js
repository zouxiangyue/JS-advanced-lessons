//箭头函数的this和普通函数的this
function foo(){
    console.log(this)//Window
};
var foo=()=>this//window

function foo() {
    setTimeout(function(){
        console.log('id:', this.id);// id: 21
    }, 1000);
    console.log('id:', this.id);//id: 42
}
var id = 21;
foo.call({ id: 42 });

function foo() {
    function f(){
        console.log(this)//window
        console.log('id:', this.id);//id:21
    };
    f();
    console.log(this)//this指向对象{id:42}
    console.log('id:', this.id);//id:42
}
var id = 21;
foo.call({ id: 42 });

function foo() {
    return function(){
        return function() {
            return function(){
                console.log('id:', this.id);
            };
        };
    };
}
var id=0;
var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 0
var t2 = f().call({id: 3})(); // id: 0
var t3 = f()().call({id: 4}); // id: 4

// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象
function foo() {
    return ()=>{
        return () =>{
            return ()=>{
                console.log('id:', this.id);
            };
        };
    };
}
var id=0;
var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1


function f() {
        return () => {
            return () => {
                console.log('id:', this.id);
            };
        };
    }
var id=1;
f()()()//id: 1

//箭头函数没有this指针,实质是引用外层的this,所以当然也就不能用call()、apply()、bind()这些方法去改变this的指向

// 箭头函数有几个使用注意点。
// （1）函数体内的this对象，就是定义时所在的对象，而不是使用时所在的对象。
// （2）不可以当作构造函数，也就是说，不可以使用new命令，否则会抛出一个错误。
// （3）不可以使用arguments对象，该对象在函数体内不存在。如果要用，可以用Rest参数代替。
// （4）不可以使用yield命令，因此箭头函数不能用作Generator函数



