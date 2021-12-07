import { createContext } from "react";
import React from 'react';
//import { type } from "os";
export class Stock {
  id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
  constructor(name: string) {
    this.name = name
  }
};

const z = new Stock('');

export type CartClassStateType = typeof Stock;
export type ZStock = typeof z;


//type UseCartContextResult = ReturnType<typeof CartContext>

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item: {
  id: string;
  name: string;
  description: string;
  amount: number;
  price: number;
}) => { 
    console.log(`from cart context:  ${item}`)
  },
  removeItem: (id: string) => { },
});

export default CartContext;

/*

  constructor(id: string) {
    this.id = id
  }
{
    id: string;
    name: string;
    description: string;
    amount: number;
    price: number;
  }
*/