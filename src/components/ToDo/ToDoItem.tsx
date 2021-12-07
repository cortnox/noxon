import '../Journal/JournalItem/JournalItem.css';
//import CDate from '../../Calender/CDate';
import React, { useState } from 'react';
import Card from '../UI/Card/Card'
import CDateRef from '../Calender/CDateRef';
const ToDoItem = (
  props:{
    //id: string,
    //name: string, 
    title:string, 
    amount:number, 
    stamp:Date
  }) => {
  let cc = 0;
  let [counter,setCounter] = useState(cc);
  //let title = props.title;
  const [title,setTitle] = useState(props.title);
  console.log(props.stamp);
  const editClicked = () => {
    //cc++;
    counter += 1; // cc;
    let ntitle = `updated ${counter}`;
    setTitle(ntitle);
    console.log(ntitle);
    setCounter(counter);
  }
    return (
      <li>
        <Card className="expense-item">
          <div className="expense-item__description">
          <CDateRef stamp={props.stamp}/>
          <h2> {title}</h2>
          <div className="expense-item__price">${props.amount}</div>
          <button onClick={editClicked}>Edit</button>
          </div>
        </Card>
      </li>
    );
}

export default ToDoItem;

//const JournalItem = (props) => {
  //const month = props.date.toLocaleString('en-US', { month: 'long'});
  //const day = props.date.toLocaleString('en-US', { day: '2-digit'});
  //const year = props.date.getFullYear();
  //const expDate = new Date(2021,10,23);
  //const expDesc = "Errands";
  //const expAmount = "543.21";
  //<h2>{props.date.toISOString()}</h2>
  //<h2>JournalItem {props.name ? props.name : "You're not authenticated."}</h2>