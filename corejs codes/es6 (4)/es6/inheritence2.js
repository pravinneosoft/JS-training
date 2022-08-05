class Person 
{
    constructor(fname,lname){
        this.fname=fname;
        this.lname=lname;
    }
    getFullName(){
        return `${this.fname} ${this.lname}`
    }
}
class Employee extends Person 
{
    constructor(fname,lname)
    {
        super(fname,lname)
    }
}
let employee=new Employee("sumit","lname");
console.log(employee.getFullName());