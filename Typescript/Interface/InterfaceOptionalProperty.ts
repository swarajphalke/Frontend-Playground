interface Product{
    name:string;
    price:number;
    description?:string; //optional
}

const item1: Product = {
    name:"Headphones",
    price:2999
}

const item2 : Product = {
    name:"Mobile",
    price:8500,
    description:"Filler text is text that shares some characteristics of a real written text, but is random or otherwise generated."
}
console.log(item1);
console.log(item2);
