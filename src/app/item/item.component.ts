import { Component, OnInit } from '@angular/core';
import {Item} from '../Item'
import { ItemService } from "../itemServices/item.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers:[ItemService]
})
export class ItemComponent implements OnInit {
  items: Item [] = []
  inputerror:boolean;
  reinputitem:boolean;

  constructor( private dataSerive: ItemService) { 
    this.items = dataSerive.getItems();

    
  }

  ngOnInit() {

  }

  // deleteAll(checked:boolean) {
  //   var x=this;
  //    this.items.forEach( function (arrayItem)
  //   {
  //     x.removeItem(arrayItem)

  //   }); 
  // }

  removeItem(item: Item) {
    this.items = this.items.filter(  t => t !== item);
  }

  addNewItem(name: string,price:number ,count:number){
          
    var i;
     this.reinputitem=false;
     for (i = 0; i < this.items.length; i++)
       {
    if( name  ==  this.items[i].getName() )
      this.reinputitem=true;

      }
     
        if(name !="" && !this.reinputitem  )
    {this.items.push(new Item(name,price,count));
     this.inputerror=false;
    }
    else if(name !="" && this.reinputitem )
      this.inputerror=false;
    else
      this.inputerror=true; 
  }

  getTotal()
{ 
  
 var totale=0;
//   for ( Item item in this.items) {

//     totale+= item;

// }
this.items.forEach( function (arrayItem)
{
    totale += arrayItem.price*arrayItem.count;

});
    return totale;

}



  // getTotale()
  // {
  //    total :number ;

  //   return total;
  // }

  // handleKeyUp(ev) {
  //   if (ev.which === 13){
  //     this.addNewItem(ev.target.value,);
  //     ev.target.value = ''
  //   }
  // }

}
