import * as classes from './Counter.module.css';
import type { State } from '../../store/CounterContext';
const CounterDisplay = ({ count } : State) => {
    return (
        <div className={classes.display}>{count}</div>
    );
};

export default CounterDisplay;