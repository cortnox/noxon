import classes from './Modal.module.css';
import React, { Fragment } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
//const styles = require('./Modal.module.css');
import ReactDOM from 'react-dom';
const Backdrop = (props:{
    //onConfirm: () => void,
}) => {
    return (
        <div className={classes.backdrop} /*onClick={props.onConfirm}*//>
    );
};
const ModalOverlay = (
    props:{
        title:string,
        content:string,
        //onConfirm: () => void,
    }) => {
    return (
        <Card className={classes.loader}>
            <header className={classes.header}>
                <h3><code style={{background:'#444'}}>{`.`}</code></h3>
            </header >
            <div className={classes.content}>
                <span>
                    <p>{props.content}</p>
                </span>
            </div>
            <footer className={classes.actions}>
            </footer>
        </Card>
    );
};

                /*<Button onClick={props.onConfirm}>Okay</Button>*/
const ModalLoader = (
    props:{
        //title:string,
        //content:string,
        //onConfirm: () => void,
    }) => {
    return (
        /*onConfirm={props.onConfirm}*/
    <Fragment>
        {ReactDOM.createPortal(
        <Backdrop />, 
        document.getElementById('backdrop-root') as HTMLElement)}
        {ReactDOM.createPortal(
        <ModalOverlay 
        /*onConfirm={props.onConfirm}*/
        title={``/*props.title*/} 
        content={``/*props.content*/}
        />, 
        document.getElementById('overlay-root') as HTMLElement)}
    </Fragment>
    );
};

export default ModalLoader;