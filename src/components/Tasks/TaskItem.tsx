import classes from './TaskItem.module.css';
import { ReactNode } from 'react';

const TaskItem = (props: {
  tid: string;
  children: ReactNode
}) => {
  return <li
    className={classes.task}
    key={props.tid}
  >
    {props.children}
  </li>
};

export default TaskItem;