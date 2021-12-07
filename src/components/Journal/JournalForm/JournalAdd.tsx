import * as classes from './JournalAdd.module.css';
import React, { FormEvent, useRef } from 'react';
import { ToDoCl } from '../../../store/ZCartContext';


function JournalAdd(props: {
    onAddToDo: (todo: ToDoCl) => void,
}) {
    const titleRef = useRef<HTMLInputElement|null>(null);
    const descriptionRef = useRef<HTMLTextAreaElement|null>(null);
    const stampRef = useRef<HTMLInputElement|null>(null);
    const amountRef = useRef<HTMLInputElement|null>(null);

    function submitHandler(event: FormEvent) {
        event.preventDefault();
        let odo  = new ToDoCl("","",0);
        // could add validation here...
        const tir = titleRef.current;
        const dir = descriptionRef.current;
        const sir = stampRef.current;
        const air = amountRef.current;

        //if (tir & dir && sir && air) {
        //if (titleRef.current || descriptionRef.current || stampRef.current || amountRef.current) {
        if (tir) {
            odo.title = tir.value;//titleRef.current.value,
        }
        if (dir) {
            odo.description = dir.value;//titleRef.current.value,
        }
        if (sir) {
            odo.stamp = new Date(sir.value);//titleRef.current.value,
            console.log(sir.value);
        }
        if (air) {
            odo.amount = +air.value;//titleRef.current.value,
        }
        props.onAddToDo(odo);

    }

    return (
        <form onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input type='text' id='title' ref={titleRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='opening-text'>Description</label>
                <textarea rows={5} id='opening-text' ref={descriptionRef}></textarea>
            </div>
            <div className={classes.control}>
                <label htmlFor='date'>Date</label>
                <input type='date' id='date' ref={stampRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='amount'>amount</label>
                <input type='number' id='amount' ref={amountRef} />
            </div>
            <button >Add To Do</button>
        </form>
    );
}

export default JournalAdd;
 /*   function submitHandler(event: FormEvent) {
        event.preventDefault();
        let todo: ToDoCl;
        // could add validation here...
        const tir = titleRef.current;
        const dir = descriptionRef.current;
        const sir = stampRef.current;
        const air = amountRef.current;
        
        //if (titleRef.current || descriptionRef.current || stampRef.current || amountRef.current) {
        if (tir && dir && sir && air) {
        todo = {
            title: tir.value,//titleRef.current.value,
            description: dir.value,//descriptionRef.current.value,
            stamp: new Date(sir.value),//new Date(stampRef.current.value),
            amount: +air.value,//+amountRef.current.value,
            completed: false,
        };
        props.onAddToDo(todo);
        }
    }*/