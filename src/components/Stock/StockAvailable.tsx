import * as classes from './StockAvailable.module.css';
import React, { useCallback, useEffect, useState } from 'react';
import Card from '../UI/Card/Card';
import StockItem from './StockItem/StockItem';
import { Stock } from '../../store/ZCartContext';
import ModalLoader from '../UI/Modal/ModalLoader';
import Modal from '../UI/Modal/Modal';
const srstock: Array<Stock> = [];
const StockAvailable = () => {
  const [list, setList] = useState(srstock);
  const [loading, setLoading] = useState(false);
  //const [error, setError] = useState('');
  const [error, setError] = useState({
    title: '',
    content: '',
  });

  const fetchAvailableStock = useCallback(async () => {
    try {
      //.catch(
      //(err: unknown) => {
      //});
      setLoading(true);
      console.log(`Performing request check.`)
      const stimulus = await fetch('http://pecan.local:2019/api/stocks');
      if (!stimulus.ok) {
        console.log(`error`);
        setLoading(false);
        throw new Error('Request Failed.');
      }
      console.log(stimulus);
      const response = await stimulus.json();
      const transformation = response.map((choice: Stock) => {
        return {
          guid: choice.guid,
          id: choice.id,
          category: choice.category,
          code: choice.code,
          name: choice.name,
          description: choice.description,
          price: choice.price,
          quantity: choice.quantity,
          amount: choice.amount,
          userId: choice.userId,
          created: new Date(`${choice.created}`),
          stamp: new Date(`${choice.stamp}`),
        }
      });
      setList(transformation);
      setLoading(false);

    } catch (err: unknown) {
      setLoading(false);
      if (err && err instanceof Error) {
        setError({
          title: "An error occured.",
          content: `The system encountered an unexpected error: ${err}. Please try again later.`,
        });
        //setError((err as Error).message);
        console.log(error);
      }
    }
  }, []);


  useEffect(() => {
    fetchAvailableStock()
  }, [fetchAvailableStock]);
  //}, []);
  //trigger sideeffect /fetching web data/when page loads and compondent is loaded for the the first time or a dependency changes


  const stocklist = list.map(
    (stock: Stock/*{
  id: string;
  name: string;
  description: string;
  price: number;
}*/

    ) => <StockItem
        id={stock.id}
        name={stock.name}
        description={stock.description}
        price={stock.price}
        key={stock.id}
      />
  );
  //<li>{jstock.name}</li>);
  const confirmHandler = () => {
    setError({
      title: '',
      content: ''
    });
    setLoading(true);
    fetchAvailableStock();
    setLoading(false)
  };

  /*if (error) {
    setLoading(false);
    <Modal title={'An Error Occurred.'} content={`The System encountered an unexpected error.${error}`} onConfirm={confirmHandler} />
  }*/


  if (loading) {
    return (
      <ModalLoader /*title={''} content={''}*/ />
    );
  }

  return (
    <>
      {error.title.length > 0 && <Modal
        title={'An Error Occurred.'}
        content={`The System encountered an unexpected error.${error.content}`}
        onConfirm={confirmHandler} />}
      <section className={classes.meals}>
        <Card className={''}>
          <ul>
            {stocklist}
          </ul>
        </Card>
      </section>
    </>
  );
};

export default StockAvailable;

/*
      <StockItem

        key={stock.id}
        stock={stock}      />
      });  //
{
          id: '',
          name: '',
          description: '',
          price: 0
 {
        id: string;
        name:string;
        description:string;
        price:number;
      }       }
*/

/*id: string;
constructor(id: string) {
  this.id = id
}
name: string;
constructor(name: string) {
  this.name = name
}
description: string;
constructor(description: string) {
  this.description = description
}
price: number;
constructor(price: number) {
  this.price = price
}*/

/*const STATIC_STOCK: Array<Stock> = [
  {
    id: 'm1',
    name: 'Rhino Ryder',
    description: 'Finest fish and veggies',
    price: 22.99,
    amount: 1
  },
  {
    id: 'm2',
    name: 'Girl Scout Cookies',
    description: 'A german specialty!',
    price: 16.5,
    amount: 1
  },
  {
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    amount: 1
  },
  {
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    amount: 1
  },
];
*/