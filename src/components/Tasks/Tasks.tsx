import classes from './Tasks.module.css';
import Section from '../UI/Section/Section';
import TaskItem from './TaskItem';
import { TaskCl } from '../../store/ZCartContext';

const Tasks = (props: {
  error: string,
  onFetch: () => void,
  items: TaskCl[],
  loading: boolean,
}) => {
  let taskList = <h2>No tasks found. Start adding some!</h2>;

  if (props.items.length > 0) {
    taskList = (
      <ul>
        {props.items.map(
          (task: TaskCl) => (
            <TaskItem
              tid={task.id ? task.id : `${props.items.length+1}`}
              key={task.id}
            >
              {task.text}
            </TaskItem>
          ))}
      </ul>
    );
  }

  let content = taskList;

  if (props.error) {
    content = <button onClick={props.onFetch}>Try again</button>;
  }

  if (props.loading) {
    content = <p>Loading Tasks</p>;
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
