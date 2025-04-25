interface Animal {
    name:string;
    sound():void;
}

class Dogg implements Animal{
    name:string;

    constructor(name:string){
        this.name=name;
    }
    sound():void{
        console.log(`${this.name} says bhooh!` );
        
    }
}

const myDog = new Dogg("Rex");
myDog.sound();