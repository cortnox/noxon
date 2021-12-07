import { Fragment } from 'react';
import StockSummary from './StockSummary';
import StockAvailable from './StockAvailable';
//import ZCartProvider, { useCart } from '../store/ZCartContext';
//import { useCart } from '../../store/ZCartContext';

const  Stocks= () => {
    return (
        <Fragment>
            <StockSummary/>
            <StockAvailable/>
        </Fragment>
    );
};

export default Stocks;