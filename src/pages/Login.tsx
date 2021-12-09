import logo from '../logo.svg';
import React, { SyntheticEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import Card from '../components/UI/Card/Card';
import TextEmail from '../components/UI/Form/TextEmail';
import HashedPassword from '../components/UI/Form/HashedPassword';
import CheckBox from '../components/UI/Form/CheckBox';
import '../components/SignIn/SignIn.css';
import Modal from '../components/UI/Modal/Modal';
const Login = (
  props:{
    setName: (name:string) => void,
    email:string, password:string
  }) => {
  const [error, setError] = useState({
    title:'',
    content:'',
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const submit = async (e: SyntheticEvent) => {
    try {
      e.preventDefault();
      //await fetch("http://localhost:2020/api/login", {
      const response = await fetch("http://pecan.local:2020/api/login", {
      //const response = await fetch("http://pecan.local:2019/api/clients/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin":"*"
        },
        credentials: "include",
        body: JSON.stringify({
          email,
          password
        })
      });
      const content = await response.json();
      console.log(content);
      setRedirect(true);
      props.setName(content.name);
    } catch (e: unknown) {
      let result = (e as Error).message;
      if (e instanceof Error) {
        result = (e as Error).message; // works, `e` narrowed to Error
        console.log(result);
        setError({
          title: "An error occured.",
          content: `The system encountered an unexpected error:\n ${e} \n Please try again later.`,
        });
      }
    }
  }
  const errorHandler = () => {
    setError({
    title:'',
    content:'',
  })
}; 

  if (redirect) {
    return <Navigate to="/account"/>
  }
      //<Modal title={''} content={''}/>
    return (
      <div>
      {error.content && <Modal title={error.title} content={error.content} onConfirm={errorHandler}/>}
      <Card className="form-signin">
        <form onSubmit={submit}>
        <img className="mb-4" src={logo} alt="" width="72" height="57"/>
        <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

        <TextEmail setTxt={setEmail} val={email} txt={email}/>
        <HashedPassword setTxt={setPassword} val={password} txt={password}/>
        <CheckBox cdName={'Remember Me?'}/>


        <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </Card>
    </div>

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