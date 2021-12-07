import React from 'react';
import { ToDoCl } from '../../../store/ZCartContext';
import JournalItem from '../JournalItem/JournalItem';
import './JournalList.css';

const JournalList = (props:{items:ToDoCl[]}) => {
    //let journalContent = <p>no journals found.</p>;
    if (props.items.length === 0) {
        return (<h2 className="expenses-list__fallback">no journals found.</h2>);
    } 
    return (
    <ul className="expenses-list">
        {
        props.items.map(
            (jitem: ToDoCl) => (
                <JournalItem
                //id={jitem.id}
                title={jitem.title}
                amount={jitem.amount}
                stamp={jitem.stamp} //name={props.name}
                key={jitem.guid}
                />
            ))
        }
        </ul>
    );
};

export default JournalList;
/*
        let journalContent = <p>no journals found.</p>;
        if (filteredJournals.length > 0) {
            journalContent = filteredJournals.map(
                        /*async* /(jitem: 
                            {
                                id:number;
                                title: string;
                                amount: number;
                                date: Date;
                            }) => <JournalItem
                    id={jitem.id}
                    title={jitem.title}
                    amount={jitem.amount}
                    date={jitem.date}
                    //name={props.name}
                    key={jitem.id}
                    />)
                }
*/