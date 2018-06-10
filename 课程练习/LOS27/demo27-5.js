//let,const不能重复声明

var a=0;
let a=0;//报错,a重复声明

let b=0;
let b=0;//报错

let c=0;
var c=0;//报错

var d=0;
var d=0;//不报错

const x=0;
const x=1;//报错

var y=0;
const y=1;//报错
