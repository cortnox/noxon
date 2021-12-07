import * as classes from './Cart.module.css';
import CartItem from './CartItem';
import StockModal from '../UI/Modal/StockModal';
//import { useContext } from 'react';
import { AddressCl, CartState, OrderCl, useCart } from '../../store/ZCartContext';
//import CartContext from '../../store/jcart-context';
import type { Stock } from '../../store/ZCartContext';
import Checkout from './Checkout/Checkout';
import { useState } from 'react';
import CurrentUserSession from '../../util/CurrentUserSession';


const Cart = (
    props: { onClose: () => void },
    //{ handler }: { handler: Dispatch }
    ) => {
    const { state, dispatch } = useCart();
    const [checkout, setCheckout] = useState(false);
    const totalAmount = `$${state.totalAmount.toFixed(2)}`;
    const hasItems = state.items.length > 0;

    const submitHandler = async (addressData: AddressCl) => {
        //Temporary workaround to get user: this wil be stored in context upon login eventually.
        const response = await CurrentUserSession();
        const transformation = response.context;
        if (transformation && transformation.address && transformation.id) {
            transformation.address.street = addressData.street;
            transformation.address.suburb = addressData.suburb;
            transformation.address.city = addressData.city;
            transformation.address.country = addressData.country;
            transformation.address.postalcode = addressData.postalcode;
            transformation.address.name = addressData.name;
            state.userId = +transformation.id;
            fetch('http://pecan.local:2019/api/orders',
                {
                    method: 'POST',
                    body: JSON.stringify({ })
                    /*state as any*/
                }
            );
        }
    };

    const cartItems = (state.items &&
        <ul className={classes['cart-items']}>
            {state.items.map((item: Stock) => <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                handler={dispatch} 
                id={item.id} 
                item={item}                
            />
            )}
        </ul>
    );

    const orderHandler = () => {
        setCheckout(true);

    };
    const cancelHandler = (checkout: boolean) => {
        setCheckout(true);

    };

    const modalActions = (
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}> Close</button>
            {hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}
        </div>
    );

    return (
        <StockModal onToggle={props.onClose}>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div>
            {checkout &&
            <section>
                <Checkout onConfirm={submitHandler} onCancelCheckOut={props.onClose}/>
            </section>
            }
            {!checkout && modalActions}
        </StockModal>
    );
};

export default Cart; 

    /*const removeItem = (id: string) => {
        console.log(`Cart:removeItem:id:${id}`);
    };
    const addItem = (item: Stock) => {
        //state.addItem({ ...item, amount: 1 });
        console.log(`Cart:addItem:id:${item.id}`);
    };
    
                //onRemove={removeItem.bind(null, item.id)}
                //onAdd={addItem.bind(null, item)}
    */



/*{
            const removehandle = () => {
                handler({ type: 'REMOVE', id });
            }
        }
        {
            const addhandel = () => {
                handler({ type: 'ADD', item });
            }
        }
        
        */

        //state.removeItem(id);


/*

                {hasItems &&
                    <button classname={classes.button}>order</button>
                }
*/

/*const STATIC_STOCK = [
    {
        id: 'm1',
        name: 'Rhino Ryder',
        description: 'Finest fish and veggies',
        price: 22.99,
    }
];*/
/*{
        id: string;
        name: string;
        description: string;
        amount: number;
        price: number;
        {
                id: string;
                name: string;
                description: string;
                price: number;
                amount: number;
            }
        */
