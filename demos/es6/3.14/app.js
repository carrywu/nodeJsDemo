function Person(name,age){
    this.name = name
    this.age = age;
    this.greed = function(){
        console.log("hello,i am",this.name)
    }
}

function Student(name,age,sex){
    Person.call(this)
    this.name = name
    this.age = age
    this.sex=sex
}
let stud = new Student("lear",10,"male")
stud.greed();
// stud.getInfo()