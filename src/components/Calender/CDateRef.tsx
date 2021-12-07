import React from 'react';
import './CDate.css';
const CDateRef = (props:{stamp:Date}) => {
//const CDate = (props:{date:Date, year: number, month:string, day:string}) => {
//const JournalItem = (props) => {
  const month = props.stamp ? props.stamp.toLocaleString('en-US', { month: 'long'}) : 'January';
  const day = props.stamp ? props.stamp.toLocaleString('en-US', { day: '2-digit'}) : '01';
  const year = props.stamp ? props.stamp.getFullYear() : '2019';
  //const month = '09';
  //const day = '08';
  //const year = '2020';
  //const year = props.stamp ? props.stamp.toLocaleString('en-US' ,{year: '4-digit'}) : '2019';
    return (
      <div className="expense-date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__day">{day}</div>
          <div className="expense-date__year">{year}</div>
      </div>
    );
}

export default CDateRef;

  //const expDate = new Date(2021,10,23);
  //const expDesc = "Errands";
  //const expAmount = "543.21";