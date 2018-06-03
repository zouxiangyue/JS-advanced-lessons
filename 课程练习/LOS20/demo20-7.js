/**
1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
2、联通号段有130，131，132，145，155，156，176，185，186
3、电信号段有133，153，177，180，181，189
 */
var Numbers=[
    13426561991,13026561991,13326561991,15326561991,
    17726561991,14526561991,13226561991,13526561991,
    13626561991,10026561991,15726561991,15926561991,
    18626561991,18226561991,18926561991,110
]
var CMCC = [];//移动
var CUCC = [];//联通
var CTCC = [];//电信
var Others = [];//其他号码
//利用RegExp,写一段代码，将对应的号码段存储到对应的数组中
function arrNum(arr){
    var j1=0,j2=0,j3=0,j4=0;
    for(var i=0;i<arr.length;i++){
        if(/\b13/.test(arr[i]+'')){
            if(/\b..[4-9]/.test(arr[i]+'')){
                CMCC[j1]=arr[i];
                j1++;
            }
            else if(/\b..(0|[1-2])/.test(arr[i]+'')){
                CUCC[j2]=arr[i];
                j2++;
            }
            else{
                CTCC[j3]=arr[i];
                j3++;
            }
        }
        else if(/\b14/.test(arr[i]+'')){
            if(/\b..7/.test(arr[i]+'')){
                CMCC[j1]=arr[i];
                j1++;
            }
            else{
                CTCC[j3]=arr[i];
                j3++;
            }
        }
        else if(/\b15/.test(arr[i]+'')){
            if(/\b..[0-2][7-9]/.test(arr[i]+'')){
                CMCC[j1]=arr[i];
                j1++;
            }
            else if(/\b..(5|6)/.test(arr[i]+'')){
                CUCC[j2]=arr[i];
                j2++;
            }
            else{
                CTCC[j3]=arr[i];
                j3++;
            }
        }
        else if(/\b17/.test(arr[i]+'')){
            if(/\b..8/.test(arr[i]+'')){
                CMCC[j1]=arr[i];
                j1++;
            }
            else if(/\b..6/.test(arr[i]+'')){
                CUCC[j2]=arr[i];
                j2++;
            }
            else{
                CTCC[j3]=arr[i];
                j3++;
            }
        }
        else if(/\b18/.test(arr[i]+'')){
            if(/\b..([3-4]|[7-8])/.test(arr[i]+'')){
                CMCC[j1]=arr[i];
                j1++;
            }
            else if(/\b..[5-6]/.test(arr[i]+'')){
                CUCC[j2]=arr[i];
                j2++;
            }
            else{
                CTCC[j3]=arr[i];
                j3++;
            }
        }
        else{
            Others[j4]=arr[i];
            j4++;
        }
    }
}
/*
1、移动号段有134,135,136,137,138,139,147,150,151,152,157,158,159,178,182,183,184,187,188
2、联通号段有130，131，132，145，155，156，176，185，186
3、电信号段有133，153，177，180，181，189
 */
for(var i=0;i<Numbers.length;i++){
    if(/\b(1((3[4-9])|(47)|(5[0-27-9])|(78)|(8[2-378])))\d{8}/.test(Numbers[i]+'')){
        CMCC.push(Numbers[i])
    }
    else if(/\b(1(3[0-2]|45|5[5-6]|76|8[5-6]))\d{8}/.test(Numbers[i]+'')){
        CUCC.push(Numbers[i])
    }
    else if(/\b(1(33|53|77|80|81|89))/.test(Numbers[i]+'')){
        CTCC.push(Numbers[i]);
    }
    else{
        Others.push(Numbers[i])
    }
};
console.log(CMCC);
console.log(CUCC);
console.log(CTCC);
console.log(Others);
