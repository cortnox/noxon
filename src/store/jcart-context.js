import React from 'react';

const JCartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
});

export default JCartContext;

/*
class StockItem {
  id: string;
  constructor(id:string) { 
    this.id = id 
 }  
  name: string;
  description: string;
  price: number;
}*/