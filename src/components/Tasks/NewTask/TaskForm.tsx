import * as classes from './TaskForm.module.css';
import { FormEvent, useRef } from 'react';


const TaskForm = (props: {
  onEnterTask: (enteredValue: string) => void,
  loading: boolean,
}) => {
  const taskInputRef = useRef<HTMLInputElement | null>(null);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    let enteredValue;
    if (taskInputRef.current) {
      enteredValue = taskInputRef.current.value;
      if (enteredValue.trim().length > 0) {
        props.onEnterTask(enteredValue);
      }
    }

  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <input type='text' ref={taskInputRef} />
      <button className={'btn-lg btn btn-success'}>{props.loading ? 'Sending...' : 'Add Task'}</button>
    </form>
  );
};

export default TaskForm;
