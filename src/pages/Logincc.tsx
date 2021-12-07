import React, { SyntheticEvent, useState } from 'react';
import { Redirect } from 'react-router-dom';
import Card from '../components/UI/Card/Card';
import TextEmail from '../components/UI/Form/TextEmail';
import HashedPassword from '../components/UI/Form/HashedPassword';
import CheckBox from '../components/UI/Form/CheckBox';
import '../components/SignIn/SignIn.css';
import logo from '../logo.svg';
const Login = (
  props:{
    setName: (name:string) => void,
    email:string, password:string
  }) => {
  const [txt, setTxt] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const submit = async (e:SyntheticEvent) => {
    e.preventDefault();
    //await fetch("http://localhost:2020/api/login", {
    const response = await fetch("http://pecan.local:2020/api/login", {
        method:"POST",
        headers:{
          "Content-Type":"application/json",
          //"Access-Control-Allow-Origin":"*"
        },
        credentials: "include",
        body: JSON.stringify( {
          email,
          password
        })
      });
      const content = await response.json();
      console.log(content);
      setRedirect(true);
      props.setName(content.name);
  }
  if (redirect) {
    return <Redirect to="/account"/>
  }
    return (
      <Card className="form-signin">
        <form onSubmit={submit}>
        <img className="mb-4" src="" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <TextEmail setTxt={setEmail} val={email} txt={email}/>
        <HashedPassword setTxt={setPassword} val={password} txt={password}/>
        <CheckBox cdName={'Remember Me?'}/>


        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </Card>

    );
}

export default Login;
/*
      <div className="form-signin">
        <form onSubmit={submit}>
        <img className="mb-4" src="" alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
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
      </form>
    </div>        
    <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={e => setEmail(e.target.value)}/>
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"/> Remember me
          </label>
        </div>
*/