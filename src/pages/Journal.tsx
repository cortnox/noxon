//import '../components/Journal/Item/JournalItem.css';
//import '../components/Journal/Item/JournalItem';
//import JournalItem from '../components/Journal/JournalItem/JournalItem';
//import JournalForm from '../components/Journal/JournalForm/JournalForm';
//import JournalFilter from '../components/Journal/JournalFilter/JournalFilter';
import '../components/Journal/Journal.css';
import Card from '../components/UI/Card/Card';
import JournalNew from '../components/Journal/JournalForm/JournalNew';
import JournalItems from '../components/Journal/JournalItem/JournalItems';
import React, { useState } from 'react';
import { ToDoCl } from '../store/ZCartContext';

const xJs: Array<ToDoCl> = [
  {id:"j3",title: "Task 0", description:"description", amount: 12.87,stamp: new Date(2021,2,17)},
  {id:"j2",title: "Task 1", description:"description", amount: 54.43,stamp: new Date(2021,2,13)},
  {id:"j1",title: "Task 2", description:"description", amount: 22.26,stamp: new Date(2021,2,12)},
];

const Journal = (
  props:{
    name: string
  }) => {
  const [Js,setJs] = useState(xJs);

  const commitJournal = /*async*/ (dataEntry: any) => {
    console.log("Commiting Journal =>");
    //setJs([dataEntry, ...Js]);
    setJs((pJ:any) => {
      console.log(`set previous j ${pJ}`);
      return [dataEntry, ...pJ];
    });
    console.log("Journal");
    console.log(dataEntry);
  }

    return (
      <Card className="expenses">
        <h2> Journal {props.name ? props.name : "You aren't authenticated."}</h2>
        <JournalNew onCommitForm2={commitJournal}/>
        <JournalItems items={Js}/>
      </Card>
    );
}

export default Journal;
/*

        <JournalFilter/>
*/
//
  //const expDate = new Date(2021,10,23);
  //const expDesc = "Errands";
  //const expAmount = 543.21;