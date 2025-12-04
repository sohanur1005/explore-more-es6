class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    sleep(){
        console.log(`Sleeping now ${this.name}`);
    }
}

const sohanur=new Person('Sohanur Rahman',23)
const rahman=new Person('Rahman Bintea',25)
console.log(sohanur)
console.log(rahman)
sohanur.sleep();