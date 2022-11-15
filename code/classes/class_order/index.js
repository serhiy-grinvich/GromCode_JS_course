/* eslint-disable strict */
// eslint-disable-next-line strict

'use strict';

/**
 * @field {string} id
 * @field {number} price
 * @field {date} dateCreated
 * @field {boolean} isConfirmed
 * @field {date} dateConfirmed
 * @field {string} city
 * @field {string} type
 */
/* export */ class Order {
  constructor(price, city, type) {
    this.id = Math.random().toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = '';
    this.city = city;
    this.type = type;
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    this.dateConfirmed = new Date();
    this.isConfirmed = true;
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}
const oredered1 = new Order();
