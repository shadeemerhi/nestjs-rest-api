import { Injectable } from '@nestjs/common';
import { Item } from './interfaces/item.interface';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [
    {
      id: '3343434453213',
      name: 'Item One',
      qty: 100,
      description: 'This is item one',
    },
    {
      id: '239573201297',
      name: 'Item Two',
      qty: 159,
      description: 'This is item two',
    },
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find((item) => item.id === id);
  }
}
