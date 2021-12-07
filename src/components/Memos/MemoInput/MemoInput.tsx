import React, { BaseSyntheticEvent, useState } from 'react';

import Button from '../../UI/Button/Button';
import './MemoInput.css';
//import classes from '../../UI/Form/TextField.module.css';
import TextField from '../../UI/Form/TextField';
//import TextFieldJ from '../../UI/Form/TextFieldJ';

const MemoInput = (
  props:{
    onAddMemo: (enteredValue:string) => void
}) => {
  const [enteredValue, setEnteredValue] = useState('');
  let [validEntry, setValidEntry] = useState(true);
  //let [validClass,setValidClass] = useState('form-floating form-fl');

  /*const memoInputChangeHandler = (event:BaseSyntheticEvent) => {
    if (event.target.value.trim().length > 0) {
      setValidEntry(true);
    } else {
      setValidEntry(false);
    }
    setEnteredValue(event.target.value);
  };*/

  const formSubmitHandler = (event:BaseSyntheticEvent) => {
    console.log('formSubmitHandler');
    event.preventDefault();
    if (enteredValue.length === 0) {
      validEntry = false;
      setValidEntry(false);
      console.log(validEntry);
      //validClass = `form-floating form-fl invalid`;
      return;
    } else {
      validEntry = true;
      setValidEntry(validEntry);
      console.log(validEntry);
      //validClass = `form-floating form-fl`;
    }
    props.onAddMemo(enteredValue);
    setEnteredValue('');
  };

  return (
    <form onSubmit={formSubmitHandler}>

      <TextField 
      val={enteredValue} 
      txt={'Memo'} 
      valid={validEntry} 
      setValid={setValidEntry} 
      setTxt={setEnteredValue} 
      />

      <Button type="submit">Add Memo</Button>
    </form>
  );
};

export default MemoInput;
/*
      setTxt={setEnteredValue} 
*
      <div className={`form-control ${validEntry ? '' : 'invalid'}`}>
        <label>Memo</label>
        <input  type="text" onChange={memoInputChangeHandler} />
      </div>
      <TextFieldJ 
      val={enteredValue} 
      txt={'Memo'} 
      valid={validEntry} 
      setValid={setValidEntry} 
      setTxt={setEnteredValue} 
      />
      //validClass = `form-floating form-fl`;
      //validClass = `form-floating form-fl invalid`;
      //validClass = `form-floating form-fl ${!props.valid ? 'invalid': ''}`;
        style={{
            color: !(validEntry) ? 'red' : 'inherit'
          }}
style={{
            borderColor: !(validEntry) ? 'red' : 'inherit',
            background: !(validEntry) ? '#ff001840' : 'inherit'
          }} */