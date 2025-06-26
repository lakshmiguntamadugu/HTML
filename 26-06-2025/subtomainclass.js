class mainclass{
    greet(){
        console.log(`Hello world`);
    }
}
class sub extends mainclass{
    wish(){
        console.log("Good morning");
    }
    greet(){
        super.greet();
        console.log("How are you!...")
    }
}
var s1=new sub();
s1.greet();
s1.wish();