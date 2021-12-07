import * as classes from './StockItemForm.module.css';
import { FormEvent, useRef, useState } from "react";
import Input from "../../UI/Layout/Input";
//import StockItem from "./StockItem";
import type { Stock, Dispatch } from '../../../store/ZCartContext';



        //onAddToCart: (amount: number) => void,
        //ref: React.MutableRefObject<undefined>,


const StockItemForm = (
    //{ handler }: { handler: Dispatch },
    { handler, item }: { handler: Dispatch, item: Stock },
) => {
    const [valid, setValid] = useState(true);
    const amountInputRef = useRef<HTMLInputElement>();
    const submit = (e: FormEvent) => {
        console.log('submitted')
        e.preventDefault();
        const air = amountInputRef.current;
        if (air) {
            console.log(air)
            const enteredAmount = air.value;
            const enteredAmountN = +enteredAmount;
            item.amount = +enteredAmount;
            item.DAmount = +enteredAmount;
            if (enteredAmount.trim().length === 0 || enteredAmountN < 1 || enteredAmountN > 5) {
                setValid(false);
                return;
            }
            //props.onAddToCart(enteredAmountN);
            handler({ type: 'ADD', item });
        }

    };
    //let item:Stock = props.item;
    return (
        <form className={classes.form} onSubmit={submit}>
            <Input
                label={'Amount'}
                input={{
                    id: `amount_${item.id}`,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',

                }}
                ref={amountInputRef}
            />
            <button /*onClick={() => handler({ type: 'ADD', item })}*/> + </button>

            {!valid && <p>Please enter a valid amount (1-5).</p>}
        </form>
    );
};

export default StockItemForm;