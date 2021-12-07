import React, { BaseSyntheticEvent, useState } from 'react';
import './JournalFilter.css';

const Filter = (props: {
  val:string,
  txt: string,
  setTxt: (txt:string) => void
}) => {
  let [val, setVal] = useState("");
  const keytrack = (e:BaseSyntheticEvent) => {
    val=e.target.value;
    setVal(val);
    props.setTxt(val);//e.target.value = val;//console.log(val);
    console.log(val);
  }
  const fid = `floating${props.txt}`;
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label htmlFor={fid}>{props.txt}</label>
        <select 
        id={fid}
        name={props.txt}
        onChange={keytrack}
        value={props.val}
        >
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
          <option value='2019'>2019</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;