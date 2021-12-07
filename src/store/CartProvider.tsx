import { useReducer, ReactNode } from 'react';

import CartContext from './cart-context';

const defaultCartState = { //{object} that cart item manager will use to update state
  items: [],
  totalAmount: 0
};

export type StateCart = typeof defaultCartState;

const cartReducer = (state: any, action: any) => { //cart item manager function
  if (action.type === 'ADD' && state && action) {
    const xitem = state.items.findIndex(
      (item: {
        id: string;
        name: string;
        description: string;
        amount: number;
        price: number;
      }) => item.id === action.item.id);
    const xcartitem = state.items[xitem];
    const updatedNet = state.totalAmount + action.item.price * action.item.amount;
    //let updateditem;
    let updateditems;

    if (state.items && xcartitem) {
      const updateditem = {
        ...xcartitem,
        amount: xcartitem.amount + action.item.amount
      };
      updateditems = [...state.items];
      updateditems[xitem] = updateditem;
    } else {
      //updateditem = {...action.item};
      updateditems = state.items.concat(action.item);
    }

    return {
      items: updateditems,
      totalAmount: updatedNet,
    };
  }
  if (action.type === 'REMOVE' && state && action) {//console.log(`REMOVE dispatched`);
    const xitem = state.items.findIndex(
      (item: {
        id: string;
        name: string;
        description: string;
        amount: number;
        price: number;
      }) => item.id === action.id);
    //if (xitem) {console.log(`index is${xitem}`);
    const xcartitem = state.items[xitem];//console.log(`xcartitem is${xcartitem}`);console.log(`amount is${xitem}`);
    const updatedNet = state.totalAmount - xcartitem.price;//console.log(`updatedNet is${updatedNet}`);
    let updateditems;
    //const lastamount = (xcartitem.amount === 1);//console.log(`lastamount is${lastamount}`);//if (xcartitem.amount === 1) {
    if (xcartitem.amount === 1) {
      updateditems = state.items.filter(
        (item: {
          id: string;
          name: string;
          description: string;
          amount: number;
          price: number;
        }) => item.id !== action.id);
    } else {
      const updateditem = { ...xcartitem, amount: xcartitem.amount - 1 };
      updateditems = [...state.items];
      updateditems[xitem] = updateditem;//console.log(`updated item is${updateditem}`);
    }
    return {
      updated: updateditems,
      totalAmount: updatedNet,
    };
    //}

  }
  return (defaultCartState); //new state snapshot returns {defaultState}
};

/*class stockclass {
  id: string;
  name: string;
  description: string;
  price: number;
}
{
        id: string;
        name: string;
        description: string;
        amount: number;
        price: number;
      }
*/

const CartProvider = (props: { children: ReactNode }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  ); //point at cart manager function

  const addToCart = (item: {
    id: string;
    name: string;
    description: string;
    price: number;
  }) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };



  const removeFromCart = (id: string) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addToCart,
    removeItem: removeFromCart,
  }
  return (
    <CartContext.Provider value={cartContext}>
      {props.children} 
    </CartContext.Provider>
  );
};

export default CartProvider;
/*
const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedTotalAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount
    };
  }

  return defaultCartState;
};
const CartProvider = (props) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item: item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id: id });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
*/