'use strict';
class Storage {
  constructor(input) {
    this.items = input;
  }
  getItems() {
    return this.items;
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(item) {
    if (this.items.includes(item)) {
      this.items.splice(items.indexOf(item), 1);
    } else {
      console.log('This item cannot be deleted because it was not found');
    }
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);
