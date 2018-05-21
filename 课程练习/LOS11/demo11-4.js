//解决变量共享
for (var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);//5 5 5 5 5
    }, 0);
}
/*
setTimeout是异步执行的，毫秒后向任务队列里添只有主线上的全部执行完才会执行任务队列里的任务，
所以当主线程for循环执行完之后 i 的值为5，这个时候再去任务队列中执行任务，i全部为5；
*/

for(var i=0;i<5;i++){
    (function(j){
        setTimeout(function() {
            console.log(j);//0 1 2 3 4
        }, 0);
    }(i));
}
//扩展
/*或用let代替var
for (let i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);//0 1 2 3 4
    }, 0);
}
 */