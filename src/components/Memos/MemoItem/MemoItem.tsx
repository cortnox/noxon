import React from 'react';

import './MemoItem.css';

const MemoItem = (
//const MemoItem: React.FC<Props>  = ({
  props:{
    id:string,
    text:string,
    onDelete:(id:string)=> void,
    //children: JSX.Element,
    children?: React.ReactNode,
  }) => {
  // const [deleteText, setDeleteText] = useState('');

  const deleteHandler = () => {
    // setDeleteText('(Deleted!)');
    props.onDelete(props.id);
  };

  return (
    <li className="goal-item" onClick={deleteHandler}>
      {props.children}
    </li>
  );
};

export default MemoItem;

/*
type Props = {
  title: string,
};
const Page: React.FC<Props> = ({
  title,
  children,
}) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

Explicitly defining the children prop type
Using JSX.Element
Let’s try JSX.Element for starters:

type Props = {
  title: string,
  children: JSX.Element,
};
const Page = ({ title, children }: Props) => (
  <div>
    <h1>{title}</h1>
    {children}
  </div>
);

* */
