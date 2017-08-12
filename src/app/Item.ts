
export class Item {

    constructor (public name: string,
        public price : number ,
         public count:number) 
         {
    }

    toString () {
        return `Item, name: ${this.name}, price: ${this.price}, count: ${this.count}.`
    }
getName(){
return   this.name;
}
getPrice(){
return   this.price;
}
getCount(){
return   this.count;
}

    // setCompleted(checkd: boolean){
    //     this.completed = checkd;
    // }
    
}
