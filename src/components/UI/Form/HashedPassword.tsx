import React, { BaseSyntheticEvent, useState } from 'react';
const HashedPassword = (
    props: {
        val:string,
        txt: string, 
        setTxt: (txt:string) => void 
    }) => {
      let [val, setVal] = useState("");
      const keytrack = (e:BaseSyntheticEvent) => {
        val=e.target.value;
        setVal(val);
        props.setTxt(val);
        //e.target.value = val;
        console.log(val);
      }
    return (
        <div className="form-floating">
          <input 
          type="password" 
          className="form-control" 
          id="floatingPassword" 
          placeholder="Password" 
          onChange={keytrack}
          value={props.val}
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
    );
}
export default HashedPassword;
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
