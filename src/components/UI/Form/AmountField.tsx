import React, { BaseSyntheticEvent, useState } from 'react';
const TextField = (
    props: {
        val:string,
        num: string, 
        setNum: (num:string) => void 
    }) => {
      let [val, setVal] = useState("");
      const keytrack = (e:BaseSyntheticEvent) => {
        val=e.target.value;
        setVal(val);
        props.setNum(val);
        //e.target.value = val;
        //console.log(val);
      }
      const fid = `floating ${props.num}`
    return (
        <div className="form-floating">
          <input 
          type="number" 
          min="0.01" 
          step="0.01" 
          className="form-control" 
          id={fid} 
          placeholder={"00.00"} 
          value={props.val}
          onChange={keytrack}/>
          <label htmlFor={fid}>{props.num}</label>
        </div>
    );
}
export default TextField;
/**
    const [email, setEmail] = useState("");
 * 
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
 */
