class mainclass{
    constructor(firstname){
        this.firstname=firstname;
    }
    greet(){
        console.log(`Hello world`);
    }
}
class sub extends mainclass{
    constructor(firstname,age){
        super(firstname);
        this.age=age;
    }
    wish(){
        console.log(`${this.firstname} is ${this.age} years old`);
    }
    
}
var s1=new sub("john",35);
s1.greet();
s1.wish();