import * as classes from './HeaderCartButton.module.css';
import CartIcon from './CartIcon';
import type { State, Stock } from '../../store/ZCartContext';
import { useCart } from '../../store/ZCartContext';
const CartButton = (
    props: { onClick: () => void },
    { totalAmount }: State,
) => {
    const { state } = useCart();
    let nCartItems = 0;
    if (state.items) {
        nCartItems = state.items.reduce((current: number, item: Stock) => {
            console.log(current,item)
            return (current + item.amount);
        },
            0
        );

    }
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Cart</span>
            <span className={classes.badge}>{nCartItems}</span>
        </button>
    );
};

//<span className={classes.badge}>{totalAmount}</span>
export default CartButton;
//this section of code needs to be added into the ZCartProvider - inside the return just reflect the next update value...
/*const cartCtx:CartState = useContext(ZCartContext);
console.log(`CartButton:${cartCtx.items}`);
const { items } = cartCtx;
const nCartItems = cartCtx.items.reduce((current:number, item:Stock) => {
    return (current + item.amount);
},
    0
);*/