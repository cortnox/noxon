import * as classes from './StockModal.module.css';
import { Fragment } from 'react';
import ReactDOM from 'react-dom';


const StockBackdrop = (props:{
    onToggle: () => void,
}) => {
    return (
        <div className={classes.backdrop} onClick={props.onToggle}/>
    );

};

const StockModalOverlay = (props: any) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const portalElement = document.getElementById(`overlay-stock`) as HTMLElement;

const StockModal = (props: {
    onToggle: () => void,
    children: React.ReactNode,
}) => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<StockBackdrop onToggle={props.onToggle}/>, portalElement)}
            {ReactDOM.createPortal(<StockModalOverlay>{props.children}</StockModalOverlay>, portalElement)}
        </Fragment>
    );
};

export default StockModal;