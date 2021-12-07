import React, { BaseSyntheticEvent, useState } from 'react';
const TextField = (
    props: {
        val:string,
        txt: string, 
        setTxt: (txt:string) => void 
    }) => {
      let [val, setVal] = useState("");
      const keytrack = (e:BaseSyntheticEvent) => {
        val=e.target.value;
        props.setTxt(e.target.value);
        setVal(val);
        //e.target.value = val;
        console.log(val);
      }
      const fid = `floating${props.txt}`;
    return (

        <div className="form-floating">
          <input 
          type="text" 
          className="form-control" 
          id={fid} 
          placeholder={props.txt} 
          value={val}
          onChange={keytrack}
          />
          <label htmlFor={fid}>{props.txt}</label>
        </div>
    );
}
export default TextField;
/**
          <input type="text" className="form-control" id={fid} placeholder={props.txt} onChange={e => props.setTxt(e.target.value)}/>
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
