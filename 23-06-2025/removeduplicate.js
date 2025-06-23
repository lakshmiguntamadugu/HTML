var arr=[1,2,'2',7,7,12,30,42,30];
var newarr=arr.filter((ele,ind)=>arr.indexOf(ele)==ind);
console.log(newarr);
console.log(arr.length-newarr.length);