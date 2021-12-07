import React from 'react';
import { ToDoCl } from '../../../store/ZCartContext';
import Chart from '../../Chart/Chart';
const JournalChart = (
    props:{
        items: ToDoCl[]/*[{
            label:string,
            amount:number,
            stamp:Date,
        }]*/
}) => {
    const vectorset = [
        {label:"J a n",value:0},
        {label:"F e b",value:0},
        {label:"M a r",value:0},
        {label:"A p r",value:0},
        {label:"M a y",value:0},
        {label:"J u n",value:0},
        {label:"J u l",value:0},
        {label:"A u g",value:0},
        {label:"S e p",value:0},
        {label:"O c t",value:0},
        {label:"N o v",value:0},
        {label:"D e c",value:0}
    ];
    //if (!(props.items.length === 0)) {
    for (const j of props.items) {
        const month = j.stamp.getMonth();
        //if (vectorset[j].value != undefined) {
        vectorset[month].value += j.amount;
        //}
    }
    //}
    return (
        <div>
         <Chart 
         xset={vectorset}         
         />   
        </div>
    );
};

export default JournalChart;