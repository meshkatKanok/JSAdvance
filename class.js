class Student{
    constructor(sid,sname){
        this.id=sid;
        this.name=sname;
        this.school="pailot school"
    }
}

const student1= new Student(12,"khairul");
const student2=new Student(22,"mahia");
const student3=new Student(23,"kanok")
console.log(student1.id,student2.school,student3);
