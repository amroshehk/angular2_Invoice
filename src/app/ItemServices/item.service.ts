import { Injectable } from '@angular/core';
import { Item } from '../Item'
@Injectable()
export class ItemService {

  constructor() { }

  getItems() {
    const items: Item[] = [];

    items.push(
      new Item('Item 1', 50 , 3),
      new Item('Item 2', 150, 3),
      new Item('Item 3', 100,6));
    return items;
  }

}
