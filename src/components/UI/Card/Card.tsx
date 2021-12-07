import classes from './Card.module.css'; 
import React from 'react';
const Card = (props:{className:string, children:any}) => {
    const classesx = `card ${props.className}`;
    
    return (
      <div className={classesx}>{props.children}</div>
    );
}
//
export default Card;
