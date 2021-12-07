//import React, { /*BaseSyntheticEvent,*/ useState } from 'react';
const CheckBox = (props:{
  cdName:string 
  //val:string, 
  //setVal:(cdn:string) => void 
}) => {
    //const [condition, setCondition] = useState(false);
    //let [val, setVal] = useState("");

    return (
        <div className="checkbox mb-3">
          <label>
            <input 
            type="checkbox" 
            value={props.cdName} 
            /> {props.cdName}
          </label>
        </div>
    );
}
export default CheckBox;
/**    const keytrack = (e:BaseSyntheticEvent) => {
      val=e.target.value;
      setVal(val);
      props.setVal(val);
      //e.target.value = val;
      console.log(val);
    }
            checked={true}
            onChange={keytrack}
 * 
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>


        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="nameexample.com" onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
 */
