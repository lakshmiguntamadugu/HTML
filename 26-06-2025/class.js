class mainclass{
    #firstname;
    constructor(firstname,lastname,age){
        this.#firstname=firstname;
        this.lastname=lastname;
        this.age=age;
    }
    greet(){
        console.log(`${this.#firstname} ${this.lastname} is ${this.age} years old`);
    }
}
var m1=new mainclass("john","j",27);
m1.greet();