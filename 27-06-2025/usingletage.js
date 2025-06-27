var age=17;
let ageCheck=new Promise((res,rej)=>{
    if(age>=18){
        res("eligible for voting")
    }
    else{
        rej("not eligible")
    }
})
ageCheck
.then((msg)=>console.log(msg))
.catch((err)=>console.log("Error:"+err))
.finally(()=>console.log("Thank you!...."))