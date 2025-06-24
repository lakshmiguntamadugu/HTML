var student={
    studentFirstName:"john",
    studentLastName:"j",
    studentAddress:"Hyd",
    studentMarks:85,
    studentFullName:function(location,city){
        return this.studentFirstName+this.studentLastName+`from ${location} in ${city}`;
    }
}
var student2={
    studentFirstName:"jack",
    studentLastName:"k",
}
fullname=student.studentFullName.bind(student2,"gachibowli","Hyd")
console.log(fullname());