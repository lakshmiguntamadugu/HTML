var marvel=["Ironman","Thor","Capt America","Black Panther","Hulk","Dead Pool"];
var newarr=marvel
           .map(i=>i.length)
           .filter(i=>i%2==0)
           .reduce((acc,i)=>acc+i);

console.log(newarr);