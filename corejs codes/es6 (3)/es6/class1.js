class Person {
    constructor(fname) {
        this.name = fname;
        console.log("constructor : "+this.name)
    }
    getName() {
        return this.name;
    }
}
let obj = new Person("Sumit");
let obj1 = new Person("Sumit");
 console.log(obj.getName());
 console.log(obj.name)
 console.log(obj1.name)