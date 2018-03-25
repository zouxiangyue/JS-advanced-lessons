var arr=[1,2,3,4];
arr instanceof Array;//true
arr.x=6;
arr instanceof Array;//true
arr.x=6;
arr instanceof Object;//true
arr;//(4) [1, 2, 3, 4, x: 6]