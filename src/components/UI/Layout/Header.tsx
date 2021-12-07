import * as classes from './Header.module.css';
import logo from '../../../logo.svg';
import React, { Fragment } from 'react';
import CartButton from '../../Cart/CartButton';
//import { useCart } from '../../../store/ZCartContext';
//import HeaderCartButton from '../../Cart/CartButton';

const Header = (props:{
  onCartToggle:() => void,
}) => {
  //const { state, dispatch } = useCart();
    return (
        <Fragment>
            <header className={classes.header}>
              <h1>Stock</h1>
              <CartButton onClick={props.onCartToggle}/>
            </header>
            <div className={classes['main-image']}>
              <img src={logo}alt='A atom that moved so fast into your brain! You failed to see it move!!!'/>
            </div>
        </Fragment>
    );
};

export default Header;
/*
    const [error,setError] = useState({
        title:'',
        content:'',
    });
    try {

    } catch (e: unknown) {
    let result = (e as Error).message;
    if (e instanceof Error) {
      result = (e as Error).message; // works, `e` narrowed to Error
      console.log(result);
      setError({
        title: "An error occured.",
        content: `The system encountered an unexpected error:\n ${e} \n Please try again later.`,
      });
    }
  }
*/