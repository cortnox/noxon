import classes from './CartItem.module.css';
import { Dispatch, Stock } from '../../store/ZCartContext';

const CartItem = (
  { handler, id, name, price, amount, item }: { handler: Dispatch, id :string ,name :string, price : number, amount:number, item: Stock },

  ) => {
  const nprice = `$${price.toFixed(2)}`;
  const onAddHandler = () => {
    item.DAmount = 1;
    handler({type:'ADD', item});
  };  
  const onRemoveHandler = () => {
    //item.amount = 1;
    item.DAmount = -1;
    handler({type:'REMOVE', id});
  };
  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{item.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{nprice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemoveHandler}>−</button>
        <button onClick={onAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
/*

        <button onClick={() => handler({ type: 'REMOVE', id })}>−</button>
        <button onClick={() => handler({ type: 'ADD', item })}>+</button>
{
    id: string;
    name: string;
    description: string;
    amount: number;
    price: number;
  }
*/