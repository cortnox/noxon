import logo from '../logo.svg';
import Button from '../components/UI/Button/Button';
import React, { BaseSyntheticEvent, useState } from 'react';
import Card from '../components/UI/Card/Card';
import TextEmail from '../components/UI/Form/TextEmail';
import HashedPassword from '../components/UI/Form/HashedPassword';
import CheckBox from '../components/UI/Form/CheckBox';
import TextField from '../components/UI/Form/TextField';
//import '../components/UI/Form/TextField.css';
import { Navigate } from 'react-router';
const Register = (
  props: {
    name:string, 
    email:string, 
    password:string
    //onAddName: (name:string) => void
  }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  let [valid, setValid] = useState(true);
  //let [validClass,setValidClass] = useState('form-floating form-fl');
  //valid=true;
  //setValid(valid);
  //setValid(true);

  const submit = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    if (name.length === 0) {
      valid = false;
      setValid(valid);
      console.log(valid);
      //validClass = `form-floating form-fl invalid`;
      return;
    } else {
      valid = true;
      setValid(valid);
      console.log(valid);
      //validClass = `form-floating form-fl`;
    }
    setName(name);
    setValid(valid);

    console.log("submitting.");
    //await fetch("http://pecan.local:2020/api/register", {
    const response = await fetch("http://pecan.local:2020/api/register", {
    //const response = await fetch("http://pecan.local:2019/api/clients/register", {
      method:"POST",
      headers:{
        "Content-Type":"application/json",
        "Access-Control-Allow-Origin":"*"
      },
      credentials: "include",
      body: JSON.stringify( {
        name,
        email,
        password
      }),
    });
    const content = await response.json();
    console.log(content);
    setRedirect(true);
  }
  if (redirect) {
    console.log("redirecting");
    return <Navigate to="/login"/>
  }


    return (
      <Card className="form-signin">
        <form onSubmit={submit}>
        <img className="mb-4" src={logo} alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign up</h1>
        <TextField 
        val={name} 
        txt={'Name'} 
        valid={valid} 
        setValid={setValid}
        setTxt={setName} 
        />
        <TextEmail setTxt={setEmail} txt={email} val={email}/>
        <HashedPassword setTxt={setPassword} txt={password} val={password}/>
        <CheckBox cdName={'Remember Me?'}/>
        <Button className="w-100 btn btn-lg btn-primary" type="submit">Submit</Button>
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