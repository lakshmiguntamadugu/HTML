var student={
    studentFirstName:"john",
    studentLastName:"j",
    studentAddress:"Hyd",
    studentMarks:85,
    studentFullName:function(){
        return this.studentFirstName+this.studentLastName;
    }
}
console.log(student.studentFullName());