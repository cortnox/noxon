import { useCallback, useEffect, useState } from "react";
//import JournalList from "../components/Journal/JournalList/JournalList";
import { ToDoCl } from "../../store/ZCartContext";
import Modal from "../UI/Modal/Modal";
import JournalAdd from "../Journal/JournalForm/JournalAdd";
import ToDoList from "./ToDoList";
/*const xJs = [
  { id: 0, title: "Task 0", amount: 12.87, date: new Date(2021, 2, 17) },
  { id: 1, title: "Task 1", amount: 54.43, date: new Date(2021, 2, 13) },
  { id: 2, title: "Task 2", amount: 22.26, date: new Date(2021, 2, 12) },
];*/

//let fget: string = '';

const ToDo = () => {
  const tdl: Array<ToDoCl> = [];
  const [list, setList] = useState(tdl);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  //const [fetched, setFetched] = useState(fget);
  //const [count, setCount] = useState(0);


  const fetchListHandler = useCallback(async () => {//const fetchListHandler = async () => {  //async function fetchListHandler() {    //(    //async() => {
    setLoading(true);
    setError('');
    try {
      //if (fetched.trim().length > 0) {//console.log(`evading sideffect.`);//setLoading(false);//return;//} else {
      const stimulus = await fetch('http://pecan.local:2019/api/todos');
      if (!stimulus.ok) {
        throw new Error(`the system encountered and error whilst fetching data from the server:`);
      }
      console.log(stimulus);
      console.log(`data fetched once.`)
      const response = await stimulus.json();
      console.log(response);

      const transformation = response.map((choice: ToDoCl) => {
        return {
          guid: choice.guid,
          id: choice.id,
          title: choice.title,
          description: choice.description,
          completed: choice.completed,
          value: choice.value,
          amount: choice.amount,
          created: new Date(`${choice.created}`),
          stamp: new Date(`${choice.stamp}`),
          userId: choice.userId,
        }
      })
      //setFetched('not-forgotten');
      //fget = fetched;
      setList(transformation);
      setLoading(false);
      //}
    } catch (err: unknown) {
      //setFetched('');
      const msg = (err as Error).message;
      setError(msg);
      setLoading(false);
    }
    setLoading(false);
    //}
    //)()
  }, []);

  useEffect(() => {
    //const timer = setTimeout(async () => {
      fetchListHandler();
    //}, 600);
  }, [fetchListHandler]);

  //const exitHandler = () => {
    //console.log(`awaiting response`)
  //}
  const emptyHandler = () => {
    setLoading(!loading);
    setError('');
  };
  async function addToDoHandler(todo: ToDoCl) {
    console.log(todo);
    //const [count, setCount] = useState(0);
    const stimulus = await fetch('http://pecan.local:2019/api/todos', {
      method: 'POST',
      body: JSON.stringify(todo),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const response = await stimulus.json();
    console.log(response);
    const newt: ToDoCl = {
      guid: response.guid,
      id: response.id,
      title: response.title,
      description: response.description,
      completed: response.completed,
      value: response.value,
      amount: response.amount,
      created: new Date(`${response.created}`),
      stamp: new Date(`${response.stamp}`),
      userId: response.userId,
    };
    list.push(newt);
    fetchListHandler();
  }

    /*const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 600);*/
  return (
    <>
      <section>
        <JournalAdd onAddToDo={addToDoHandler} />
        <button onClick={fetchListHandler}>Fetch List</button>
      </section>
      <section>
        {!loading && list.length > 0 && <ToDoList items={list} />}
        {loading && <Modal onConfirm={emptyHandler} title={`loading...`} content={`please wait.`} />}
        {!loading && error && <Modal onConfirm={emptyHandler} title={`error`} content={`the system encountered an unexpected error.: ${error}`} />}
        {!loading && list.length === 0 && !error && <p>no content found</p>}
      </section>
    </>
  );

}

export default ToDo;
/*

        //<ToDoList items={list} />
Synchrounous Approach
    const fetchListHandler = () => {
    fetch('http://pecan.local:2019/api/todos').then(stimulus => {
      return stimulus.json()
    }).then(response => {
      const transformation = response.map((choice: ToDoCl) => {
        return {
          guid: choice.guid,
          id: choice.id,
          title: choice.title,
          description: choice.description,
          completed: choice.completed,
          value: choice.value,
          amount: choice.amount,
          created: choice.created,
          stamp: choice.stamp,
          userId: choice.userId,
        }
      })
      setList(transformation);
    }); //then define a function if a response is got (promise is kept)
  }
  Async

  const fetchListHandler = async() => {
    await fetch('http://pecan.local:2019/api/todos').then(stimulus => {
      return stimulus.json()
    }).then(response => {
      const transformation = response.map((choice: ToDoCl) => {
        return {
          guid: choice.guid,
          id: choice.id,
          title: choice.title,
          description: choice.description,
          completed: choice.completed,
          value: choice.value,
          amount: choice.amount,
          created: choice.created,
          stamp: choice.stamp,
          userId: choice.userId,
        }
      })
      setList(transformation);
    }); //then define a function if a response is got (promise is kept)
  }
  Async II

  const fetchListHandler = async() => {
    const stimulus = await fetch('http://pecan.local:2019/api/todos');
    const response = await stimulus.json();
    const transformation = await response.map((choice: ToDoCl) => {
        return {
          guid: choice.guid,
          id: choice.id,
          title: choice.title,
          description: choice.description,
          completed: choice.completed,
          value: choice.value,
          amount: choice.amount,
          created: choice.created,
          stamp: choice.stamp,
          userId: choice.userId,
        }
      })
      setList(transformation);
  }
  */