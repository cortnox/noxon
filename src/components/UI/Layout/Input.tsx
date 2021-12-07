import React from 'react';
const classes = require('./Input.module.css');

const Input = React.forwardRef(
    (props: {
        label: string,
        input: any,
    },
        ref: React.ForwardedRef<any>
    ) => {
        return (
            <div className={classes.input}>
                <label htmlFor={props.input.id}>{props.label}</label>
                <input {...props.input} ref={ref} />
            </div>
        );
    });

export default Input;