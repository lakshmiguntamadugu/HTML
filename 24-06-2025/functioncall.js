var student={
    studentFirstName:"john",
    studentLastName:"j",
    studentAddress:"Hyd",
    studentMarks:85,
    studentFullName:function(city){
        return this.studentFirstName+this.studentLastName+"from"+city;
    }
}
var student2={
    studentFirstName:"jack",
    studentLastName:"k",
}
console.log(student.studentFullName.call(student2,"Hyd"));