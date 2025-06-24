function student(name,address,education,marks){
    this.name=name;
    this.address=address;
    this.education=education;
    this.marks=marks;
}
var s1=new student("john","Hyd","MCA",85);
var s2=new student("jack","chennai","MBA",86);
var s3=new student("jhony","chennai","MCA",96);
var all=[s1,s2,s3];
for(let a of all){
    if(a.address=="chennai"){
        for(let key in a){
            console.log(key+":"+a[key]);
        }
    }
}