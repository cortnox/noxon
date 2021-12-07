import * as classes from './Counter.module.css';
import type { Dispatch } from '../../store/CounterContext'

const CounterControl = ({ handler }: { handler: Dispatch }) => {
    return (
        <div
            className={classes.controls}>
            <button
                onClick={() => { handler('INCREMENT') }}
                className={classes.counter}>
                +
            </button>
            <button
                onClick={() => { handler('DECREMENT') }}
                className={classes.counter}>
                -
            </button>
        </div>
    );
};

export default CounterControl;