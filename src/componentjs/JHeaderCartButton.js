import { useContext, useEffect, useState } from 'react';

//import CartIcon from '../Cart/CartIcon';
import CartIcon from '../components/Cart/CartIcon';
//import CartContext from '../../store/cart-context';
import CartContext from '../store/jcart-context';

import classes from './Layout/HeaderCartButton.module.css';

const JHeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const { items } = cartCtx;
  const numberOfCartItems = items.reduce((curNumber, item) => {
    curNumber += item.amount;
    return curNumber;
  }, 0);

  const btnClasses = `${classes.button} ${btnIsHighlighted ? classes.bump : ''}`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 600);

    setBtnIsHighlighted(true);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default JHeaderCartButton;
