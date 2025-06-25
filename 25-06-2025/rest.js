function add(bs,...arr){
    return `Hey ${bs} sum is ${arr.reduce((acc,i)=>acc+i)}`;
}
console.log(add("Bhaskara",5,7));
console.log(add(5,7,6,5,7,963,12));