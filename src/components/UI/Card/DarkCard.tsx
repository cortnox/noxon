import classes from './Card.module.css';

import React from 'react';
const DarkCard = (props:{className:string, children:any}) => {
    const classes = `darc ${props.className}`;
    
    return (
      <div className={classes}>{props.children}</div>
    );
}
//
export default DarkCard;
