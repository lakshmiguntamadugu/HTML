let pro=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("the promise success")
    },5000)
});
function hello(){
    console.log("Hello world")
    let res=pro;
    console.log(res);
    console.log("completed")
}
hello();