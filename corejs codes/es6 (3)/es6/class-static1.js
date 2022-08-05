class Person {
    static count=0;
    constructor(name)
    {
        this._name=name;
    }
    getName(){
        return this._name;
    }
    static xyz(gender){
       let name=gender=="male" ? "Sumit" :"Ruhi";
       console.log(name)
       console.log(Person.count++)
    }
}
let obj=new Person("sumit")
console.log(obj.count)
Person.xyz("male");
console.log(Person.count)

