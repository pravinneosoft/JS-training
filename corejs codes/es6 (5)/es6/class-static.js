class Person {
    constructor(name)
    {
        this._name=name;
    }
    getName(){
        return this._name;
    }
    static xyz(){
        return "Neosoft"
    }
}
console.log(Person.xyz());
let obj=new Person("Sumit")
console.log(obj.getName());
