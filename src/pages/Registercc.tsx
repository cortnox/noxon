import React, { SyntheticEvent, useState } from 'react';
import Card from '../components/UI/Card/Card';
import TextEmail from '../components/UI/Form/TextEmail';
import HashedPassword from '../components/UI/Form/HashedPassword';
import CheckBox from '../components/UI/Form/CheckBox';
import TextField from '../components/UI/Form/TextField';
import { Redirect } from 'react-router';
const Register = (props: {name:string, email:string, password:string}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  let [valid, setValid] = useState(false);
  //let [validClass,setValidClass] = useState('form-floating form-fl');
  valid=true;
  //setValid(valid);
  //setValid(true);

  const submit = async (e: SyntheticEvent) => {
    console.log("submitting.");
    e.preventDefault();
    //await fetch("http://pecan.local:2020/api/register", {
    const response = await fetch("http://pecan.local:2020/api/register", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        //"Access-Control-Allow-Origin":"*"
      },
      body: JSON.stringify( {
        name,
        email,
        password
      })
    });
    const content = await response.json();
    console.log(content);
    setRedirect(true);
  }
  if (redirect) {
    console.log("redirecting");
    return <Redirect to="/login"/>
  }


    return (
      <Card className="form-signin">
        <form onSubmit={submit}>
        <img className="mb-4" src="" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <TextField val={name} txt={'Name'} setTxt={setName} valid={valid} setValid={setValid}/>
        <TextEmail setTxt={setEmail} txt={email} val={email}/>
        <HashedPassword setTxt={setPassword} txt={password} val={password}/>
        <CheckBox cdName={'Remember Me?'}/>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </Card>

    );
}

export default Register;
/*

      <div className="form-signin">
        <form onSubmit={submit}>
        <img className="mb-4" src="" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <div className="form-floating">
          <input type="text" className="form-control" id="floatingName" placeholder="Your Name" required onChange={e => setName(e.target.value)}/>
          <label htmlFor="floatingName">Name</label>
        </div>
        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required onChange={e => setPassword(e.target.value)}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
        <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </div>

*/