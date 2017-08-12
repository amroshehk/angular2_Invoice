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
  
  constructor( private dataSerive: ItemService) { 
    this.items = dataSerive.getItems();
  }

  ngOnInit() {

  }

  // completeAll(checked:boolean) {
  //   this.items.forEach( task => task.setCompleted(checked))
  // }

  removeItem(item: Item) {
    this.items = this.items.filter(  t => t !== item);
  }

  addNewItem(name: string,price:number ,count:number){
    this.items.push(new Item(name,price,count));
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
