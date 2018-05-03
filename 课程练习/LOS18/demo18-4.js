//多维数组
//矩形数组
var arr=new Array(5);
for(var i=0;i<arr.length;i++){
    arr[i]=new Array(5);
    for(var j=0;j<arr[i].length;j++){
        arr[i][j]=i+''+j;
    };
    console.log(arr[i]);
}
/*
(5) ["00", "01", "02", "03", "04"]
(5) ["10", "11", "12", "13", "14"]
(5) ["20", "21", "22", "23", "24"]
(5) ["30", "31", "32", "33", "34"]
(5) ["40", "41", "42", "43", "44"]
 */

//交错数组
var arr=new Array(5);
for(var i=0;i<arr.length;i++){
    arr[i]=new Array(i);
    for(var j=0;j<arr[i].length;j++){
        arr[i][j]=i+''+j;
    };
    console.log(arr[i]);
}
/*
(0)[]
(1)["10"]
(2) ["20", "21"]
(3) ["30", "31", "32"]
(4) ["40", "41", "42", "43"]
 */