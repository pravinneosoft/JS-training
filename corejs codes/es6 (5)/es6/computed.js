        let name="fullname"; 
        class Person {
          constructor(fname,lname){
            this.fname=fname;
            this.lname=lname;
          }
          get[name](){
            return `${this.fname} ${this.lname}`
          }
        }
        let person=new Person("sumit","joshi");
        console.log(person.fullname);