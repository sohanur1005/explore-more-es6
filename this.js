class Person{
    constructor(name,age,location){
        this.name=name;
        this.age=age;
        this.location=location;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
}

const sohanur=new Person('Sohanur Rahman',23,'Dhaka')
const rahman=new Person('Rahman Bintea',25,'Rajshahi')
console.log(sohanur)
console.log(rahman)
sohanur.sleep();