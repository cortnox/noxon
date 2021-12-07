import React, { useState } from 'react';
//import JournalItem from './JournalItem';
import JournalFilter from '../JournalFilter/JournalFilter';
import JournalList from '../JournalList/JournalList';
import JournalChart from '../JournalChart/JournalChart';
import { ToDoCl } from '../../../store/ZCartContext';
const JournalItems = (
    props:{
        //name: string,:w:::
        items:ToDoCl[]
    }) => {
        const [filter,setFilter] = useState("2021");
        //
        /*const filterHandler = (s:::electedYear: React.SetStateAction<string>) => {
            setFilter(selectedYear);
        };*/
        const filteredJournals = props.items.filter((journal:ToDoCl) => {
            return journal.stamp.getFullYear().toString() === filter;
        });


        return (
        <div>
            <JournalFilter 
            val={filter}
            txt={'Year'}
            setTxt={setFilter}/>
            <JournalChart items={filteredJournals}/>
            <JournalList items={filteredJournals}/>
        </div>
            );
        }

export default JournalItems;


//{journalContent}

            /*{
            filteredJournals.length === 0 &&  
            <p>no journals found.</p>
            }
            {
            filteredJournals.length > 0 && 
            filteredJournals.map(
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
            }*/




/*
            <JournalItem 
            name={props.name}
            title={props.items[0].title}
            amount={props.items[0].amount}
            date={props.items[0].date}
            />
            <JournalItem 
            name={props.name}
            title={item[1].title}
            amount={item[1].amount}
            date={item[1].date}
            />
            <JournalItem 
            name={props.name}
            title={item[2].title}
            amount={item[2].amount}
            date={item[2].date}
            />
* */