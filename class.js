class Product{
    country='Bangladesh'
    constructor(name){
        this.name=name;
    }
    speak(talk){
        console.log(`Talking about ${talk}`)
    }
}
const lenovo=new Product('Le Le Lenevo')
console.log(lenovo)

lenovo.speak('My Career')


class Teacher{
    constructor(name,subject){
        this.name=name;
        this.subject=subject;
    }
    teach(){
        console.log('Sir is teaching Math')
    }
}
const  tapan=new Teacher('Shahjahan Tapan','Physics')
console.log(tapan)
const rashid=new Teacher('Rashid','English')
console.log(rashid)
 