import React, { useEffect, useState } from 'react';
import useHttpCC from '../../hooks/use-http-cc';
import Tasks from './Tasks';
import NewTaskCC from './NewTask/NewTaskCC';
import { TaskCl } from '../../store/ZCartContext';

let tlc: Array<TaskCl> = [];
let transformHandler = (tasko: TaskCl[]) => { };

//function Task() {
const TaskCC = () => {  
  //const [isLoading, setIsLoading] = useState(false);
  //const [error, setError] = useState('');
  const [tasks, setTasks] = useState(tlc);
  const { isLoading, error, sendRequest: fetchTasks } = useHttpCC(/*///tranformTasks*/);
  //let tranformHandler = (tasko: tv) => { };
  //const [transformHandler,setTransformHandler = useState(tHandler);

  useEffect(() => {
    //const transformTasks = /*///useCallback(*/ (tasko:tv) => {
    const transformTasks = /*useCallback(async*/(tasko:TaskCl[]) => {
      //console.log(tasko.constructor.name);
      console.log(tasko);
      //const lc:TaskCl[] = [];
      const transformation = tasko.map((choice: TaskCl) => {
        return {
          guid: choice.guid,
          id: choice.id,
          text: choice.text,
          description: choice.description,
          completed: choice.completed,
          value: choice.value,
          amount: choice.amount,
          created: new Date(`${choice.created}`),
          stamp: new Date(`${choice.stamp}`),
          userId: choice.userId,
        }
      })

      setTasks(transformation);
    }/*, [])*/;
    transformHandler = transformTasks;
    fetchTasks(
      {
        url: `http://pecan.local:2019/api/tasks`
        //url: `https://rauthonline-default-rtdb.firebaseio.com/tasks.json`
      },
      transformTasks
    );
  }, [fetchTasks]);

  const taskAddHandler = (task: TaskCl) => {
    console.log(task)
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  const fetcherHandler = () => {
    fetchTasks(
      { 
        url: `http://pecan.local:2019/api/tasks`
        //url: `https://rauthonline-default-rtdb.firebaseio.com/tasks.json` 
      }, 
      transformHandler
      );
  };

  return (
    <React.Fragment>
      <NewTaskCC onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetcherHandler}
      />
    </React.Fragment>
  );
}

export default TaskCC;
      /*let x = 0;
      //let tk:any;
      for (const tk in tasko) {
        console.log(tk);
        x++;
        let ys = `"${tk}"`;
        let xs = tasko[tk as any];
        let xst = xs.text;
        console.log(xst);
        //let tn = propName(tasko,`${tasko[tk]}`);
        lc.push({
          id: tk,
          text: tasko[tk]
        });
        //console.log(propName(tk));
      }
      */


  /*
var pn = propName(person, person.first_name); // returns 'first_name'
var pn = propName(person, person.address.country); // returns 'country'
  
  
  const fetchTasks = async() => {
setIsLoading(true);
setError('');
try {
const response = await fetch(
//'https://react-http-6b4a6.firebaseio.com/tasks.json'
'https://rauthonline-default-rtdb.firebaseio.com/tasks.json'
//'https://pecan.local:2019/api/tasks'
);

if (!response.ok) {
throw new Error('Request failed!');
}

const data = await response.json();

const loadedTasks = [];

for (const taskKey in data) {
loadedTasks.push({ id: taskKey, text: data[taskKey].text });
}

setTasks(loadedTasks);
} catch (err: unknown) {
const msg = (err as Error).message;
setError(`${msg}: Something went wrong!`);
}
setIsLoading(false);
};*/
/*
interface taskobj {
  id: string;
  //task: {
  text: string;
  //}
}

interface taskpac {
  tasks: taskobj[];
};
*/

/*
let v =  {text: "investigate excess function triggering"};
let q =  {text: "investigate excess function triggering"};
let r =  {text: "investigate excess function triggering"};


let pv =  [v,q,r]
let rv = {
  pv
}

type tv = typeof rv;

*/
/*
var res = '';
function propName(property: any, value:string) {
    for (var i in property) {
        if (typeof property[i] == 'object') {
            if (propName(property[i], value)) {
                return res;
            }
        } else {
            if (property[i] == value) {
                res = i;
                return res;
            }
        }
    }
    return undefined;
}
*/