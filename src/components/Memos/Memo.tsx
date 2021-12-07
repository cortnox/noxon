import './Memo.css';
import React, { useState } from 'react';

import MemoList from './MemoList/MemoList';
import MemoInput from './MemoInput/MemoInput';
//import Modal from '../components/UI/Modal/Modal';

const Memo = () => {
  const [memos, setMemos] = useState([
    { text: 'Do all exercises!', id: 'g1' },
    { text: 'Finish the course!', id: 'g2' },
  ]);

  const addMemoHandler = (enteredText:string) => {
    setMemos(prevMemos => {
      const updatedMemos = [...prevMemos];
      updatedMemos.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedMemos;
    });
  };

  const deleteItemHandler = (memoId:string) => {
    setMemos(prevMemos => {
      const updatedMemos = prevMemos.filter(memo => memo.id !== memoId);
      return updatedMemos;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No memos found. Maybe add one?</p>
  );

  if (memos.length > 0) {
    content = (
      <MemoList items={memos} onDeleteItem={deleteItemHandler} />
    );
  }

  return (
    <div>
      <section id="goal-form">
        <MemoInput onAddMemo={addMemoHandler} />
      </section>
      <section id="goals">
        {content}
        {/* {courseMemos.length > 0 && (
          <CourseMemoList
            items={courseMemos}
            onDeleteItem={deleteItemHandler}
          />
        ) // <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
        } */}
      </section>
    </div>
  );
};

      //<Modal title={'An error occured.'} content={'The system encountered an unexpected error. Please try again later.'}/>
export default Memo;
