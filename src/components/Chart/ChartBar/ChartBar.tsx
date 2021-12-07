import React from 'react';
import './ChartBar.css';

const ChartBar = (
    props:{
        label:string,
        value:number,
        max:number
    }) => {
        //let beaver = 2;
        let barLevel = `0%`;
        if (props.max > 0) {
            barLevel = `${Math.round((props.value/props.max) * 100)}%`;
        }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill"
                style={{height: barLevel}}
                ></div>
                <div className="chart-bar__label">{props.label}</div>
            </div>
        </div>
    );
};

export default ChartBar;