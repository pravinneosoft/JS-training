class Car 
{
    constructor(speed){
        this.speed=speed;
    }
    acc(){
        this.speed+=100;
    }
    checkspeed(){
        console.log(`The speed is ${this.speed}`)
    }
}
let obj=new Car(50);
obj.checkspeed();
obj.acc();
obj.checkspeed();