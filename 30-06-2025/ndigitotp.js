function generateOTP(n){
    var str="";
    for(let i=0;i<n;i++){
        str+=Math.round(Math.random()*9);
    }
      return str;
}
console.log(generateOTP(4));