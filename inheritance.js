class Parent{
    constructor(){
        this.fatherName="Achwerznegger"
    }
}
class Child extends Parent {
    constructor(name){
        super();
        this.name=name;

    }
}
const baby=new Child("Arnold");
const baby2=new Child("kanok")
console.log(baby);