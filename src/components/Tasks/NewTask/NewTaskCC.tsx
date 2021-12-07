//import { useState } from 'react';
import { TaskCl } from '../../../store/ZCartContext';

import Section from '../../UI/Section/Section';
import TaskForm from './TaskForm';
import useHttpCC from '../../../hooks/use-http-cc';
//let x =9;
let transformHandler = (tasko: TaskCl) => { };
const NewTaskCC = (props: {
  onAddTask: (task: TaskCl) => void
}) => {
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState('');
  const { isLoading, error, sendRequest: sendTask } = useHttpCC();
  //const createTask = (tdata: Taskobj) => {
  const createTask = (tdata: any) => {
    //x++
    //const generatedId:string = `${tdata.constructor.name}`; // firebase-specific => "name" contains generated id
    //const createdTask:TaskCl = { id: generatedId, text: tdata.text };
    //console.log(tdata);
    //props.onAddTask(createdTask);
    props.onAddTask(tdata);
  };

  //const enterTaskHandler = async (taskText: string) => {
  const enterTaskHandler = async (tb: TaskCl) => {
    //let tb:TaskCl = {text:taskText, id:''};
    //tb.text = taskText;
    tb.created = new Date(Date.now());
    //tb.description = "";
    //tb.amount = 0;
    //tb.completed = false;
    //tb.guid = undefined;
    //tb.id = undefined;
    //console.log(tb);
    sendTask(
      {
        //url: 'https://rauthonline-default-rtdb.firebaseio.com/tasks.json',
        url: `http://pecan.local:2019/api/tasks`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: tb as any//{ text: taskText } as any,//`${tb}`,
      },
      createTask.bind(null, tb)
    );

  };
  transformHandler = enterTaskHandler
  const enterHandler = (taskText:string) => {
    const tb: TaskCl = {
      id: '',
      text: taskText,
    };
    sendTask(
      {
        //url: 'https://rauthonline-default-rtdb.firebaseio.com/tasks.json',
        url: `http://pecan.local:2019/api/tasks`,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: tb as any//{ text: taskText } as any,//`${tb}`,
      },
      transformHandler//createTask.bind(null, tb)
    );

  };

  return (
    <Section>
      <TaskForm onEnterTask={/*enterTaskHandler*/enterHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTaskCC;

/*setIsLoading(true);
setError('');
try {
  const response = await fetch(
    //'https://react-http-6b4a6.firebaseio.com/tasks.json',
    'https://rauthonline-default-rtdb.firebaseio.com/tasks.json',
    {
      method: 'POST',
      body: JSON.stringify({ text: taskText }),
      headers: {
        'Content-Type': 'application/json',
      },
    },
    createTask
  );

  if (!response.ok) {
    throw new Error('Request failed!');
  }

  const data = await response.json();

  const generatedId = data.name; // firebase-specific => "name" contains generated id
  const createdTask = { id: generatedId, text: taskText };

  props.onAddTask(createdTask);
} catch (err: unknown) {
  let msg = (err as Error).message;
  setError(`Something went wrong! ${msg}`);
}
setIsLoading(false);*/