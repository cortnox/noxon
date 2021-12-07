import React from 'react';
import './Chart.css';
import ChartBar from './ChartBar/ChartBar';

const Chart = (props:{
    xset:any
}) => {
    const vectors = props.xset.map(
        (vector:{
            label:string;
            value:number;
            max:number;
        }) => vector.value
        );
    const total = Math.max(...vectors);
    return (
        <div className="chart">
            {props.xset.map(
                (vector: {
                    label:string;
                    value:number;
                    max:number;

                }) => 
                <ChartBar
                label={vector.label}
                value={vector.value}
                max={total}
                key={vector.label}
                />)}
            
        </div>
    );
};

export default Chart;