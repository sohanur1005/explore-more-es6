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
console.log(sohanur)
sohanur.sleep();