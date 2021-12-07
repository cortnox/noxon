import React, { Fragment } from 'react';
import Card from '../Card/Card';
import Button from '../Button/Button';
//const styles = require('./Modal.module.css');
import * as styles from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop = (props:{
    onConfirm: () => void,
}) => {
    return (
        <div className={styles.backdrop} onClick={props.onConfirm}/>
    );
};
const ModalOverlay = (
    props:{
        title:string,
        content:string,
        onConfirm: () => void,
    }) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <code style={{background:'#444'}}>{props.title}</code>
            </header >
            <div className={styles.content}>
                <span>
                    <p>{props.content}</p>
                </span>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onConfirm}>Okay</Button>
            </footer>
        </Card>
    );
};
const Modal = (
    props:{
        title:string,
        content:string,
        onConfirm: () => void,
    }) => {
    return (
    <Fragment>
        {ReactDOM.createPortal(
        <Backdrop 
        onConfirm={props.onConfirm}
        />, 
        document.getElementById('backdrop-root') as HTMLElement)}
        {ReactDOM.createPortal(
        <ModalOverlay 
        onConfirm={props.onConfirm} 
        title={props.title} 
        content={props.content}
        />, 
        document.getElementById('overlay-root') as HTMLElement)}
    </Fragment>
    );
};

export default Modal;