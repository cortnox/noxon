import React from 'react';

const classes = require('./StockSummary.module.css');

const  StockSummary = () => {
    return (
        <section className={classes.summary}>
            <h2>Standard Stock, delivered to you.</h2>
            <p>
              Choose your desired stock from our 
              broad selection of available items 
              and promptly fulfill your exhausted 
              depletions with our variety.
            </p>
            <p>
              All our Stock items are composed with 
              industry standard components and solutions, 
              just-in-time and of course by a heterogenious team of experienced 
              scientists and engineers!</p>
        </section>
    );
};

export default StockSummary;
/*
    const [error,setError] = useState({
        title:'',
        content:'',
    });
    try {

    } catch (e: unknown) {
    let result = (e as Error).message;
    if (e instanceof Error) {
      result = (e as Error).message; // works, `e` narrowed to Error
      console.log(result);
      setError({
        title: "An error occured.",
        content: `The system encountered an unexpected error:\n ${e} \n Please try again later.`,
      });
    }
  }*/