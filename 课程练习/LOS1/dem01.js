a=1;
if(false){
    a=11;
}
console.log(a);//1

if(true){
    a=111;
};
console.log(a)//111

if(111==a){//当不小心少写一个=时，会报错；而a==111少写一个=时，a=111永true
    console.log("=");
}