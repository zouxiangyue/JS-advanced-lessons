var i=1;
switch (i){
    case 3:
        console.log("case_111");
        
    case 2:
        console.log("case_222");
        
    case 1:
        console.log("case_333");
        
    default:
        console.log("case_default");
};//case_333，case_default
//case 1以及case 1以下的执行，直到遇见break；

var i=1;
switch (i){
    case 3:
        console.log("case_111");
        
    case 2:
        console.log("case_222");
        
    case 1:
        console.log("case_333");
        break;
    default:
        console.log("case_default");
    }//case_333