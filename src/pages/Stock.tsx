import React, { useState, Fragment } from 'react';
import Header from '../components/UI/Layout/Header';
import Stocks from '../components/Stock/Stocks';
import Cart from '../components/Cart/Cart';
//import ZCartProvider, { useCart } from '../store/ZCartContext';
const Stock = () => {
    //const { state, dispatch } = useCart();
    const [cartVisible, setCartVisible] = useState(false);
    const showCart = () => {
        setCartVisible(true);
    };
    const hideCart = () => {
        setCartVisible(false);
    };
    return (
        <>
            {cartVisible && <Cart onClose={hideCart} />}
            <Header onCartToggle={showCart} />
            <main>
                <Stocks />
            </main>
        </>
    );
};

//<ZCartProvider>
//</ZCartProvider>
export default Stock;