class Person {
    constructor(name)
    {
        this._name=name;
    }
    get name(){
        return this._name;
    }
    set name(newName){
        this._name=newName
    }
}
let person=new Person("Sumit Joshi");
console.log(person.name);//call getter
person.name="ANil singh";//call setter
console.log(person.name);