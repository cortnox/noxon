import React from 'react';

import MemoItem from '../MemoItem/MemoItem';
import './MemoList.css';
/*
    items:[{
      text:string,
      id:string,
    }],
*/
const MemoList = (
  props:{
    items:any,
    onDeleteItem: (id:string) => void
  }) => {
  return (
    <ul className="goal-list">
      {props.items.map(
        (memo:{
          id:string;
          text:string;
        }) => (
        <MemoItem
          key={memo.id}
          id={memo.id}
          text={memo.text}
          onDelete={props.onDeleteItem}
        >
          {memo.text}
        </MemoItem>
      ))}
    </ul>
  );
};

export default MemoList;
