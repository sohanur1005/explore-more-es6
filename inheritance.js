class Vehicle{
    constructor(name,price){
        this.name=name;
        this.price=price;
    }
    move(){
        console.log('Gari chole na chole na chole na re');
    }
}

class Bus extends Vehicle{
    constructor(name,price,sea,ticketPrice){
       super(name,price);
       this.seat=this.seat;
       this.ticketPrice=ticketPrice;
    }
    
}

class Truck extends Vehicle{
    constructor(name,price,load){
        super(name,price);
        this.load=load;
    }
}

