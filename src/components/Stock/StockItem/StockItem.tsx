import * as classes from './StockItem.module.css';
//import { useContext } from 'react';
import StockItemForm from "./StockItemForm";
import { Stock, useCart } from '../../../store/ZCartContext';
    //{ handler }: { handler: Dispatch }
            //handler({ type: 'ADD', item });


let item:Stock;

const StockItem = (
    props: {
        id: string,
        name: string,
        description: string,
        price: number,
    },
    //{ handler }: { handler: Dispatch }
) => {
    const {dispatch} = useCart();
    item = {
        id: props.id,
        name: props.name,
        description: props.description,
        amount: 1,
        price: props.price

    }  //const cartCtx = useContext(CartContext);
    console.log(item);
    return (
        <li className={classes.meal}>
            <div>
                <div>
                    <h3>{props.name}</h3>
                </div>
                <div className={classes.desciption}>{props.description}</div>
                <div className={classes.price}>{props.price.toFixed(2)}</div>
            </div>
            <div>
                <StockItemForm item={item} handler={dispatch}/>
            </div>
        </li>
    );
}

export default StockItem;
                /*id={props.id} onAddToCart={() => handler({type:'ADD',item:item})}*/
        /*cartCtx.addItem({
            id: props.id,
            name: props.name,
            description: props.description,
            amount: amount,
            price: props.price

        });*/