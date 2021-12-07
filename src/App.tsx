import React, { useCallback, useEffect, useState } from 'react';
//import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import '../node_modules/hls.js/dist/hls.js';
import Login from './pages/Login';
import Navigation from './components/UI/Navigation/Navigation';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Account from './pages/Account';
import Register from './pages/Register';
import Journal from './pages/Journal';
import Logout from './pages/Logout';
import Memo from './components/Memos/Memo';
import Stock from './pages/Stock';
import SignInII from './componentjs/SignInII/SignInII';
import Counter from './components/Counter/Counter';
import ToDo from './components/ToDo/ToDo';
import TaskCC from './components/Tasks/TaskCC';
//import '../node_modules/hls.js/dist/hls.min.js.map ';

let namec: string;

function App() {
  const [name, setName] = useState(namec);
  const [authenticated, setAuthenticated] = useState(false);
  const [error, setError] = useState({
    title: '',
    content: '',
  });


  const fetchUserHandler = useCallback(async () => {
    try {
      console.log(`Getting user session:`);
      const response = await fetch("http://pecan.local:2020/api/user", { //const response = await fetch("http://localhost:2020/api/register", {//method:"POST",
      //const response = await fetch("http://pecan.local:2019/api/clients/client", { //const response = await fetch("http://localhost:2020/api/register", {//method:"POST",
        headers: {
          "Content-Type": "application/json",
          //"Access-Control-Allow-Origin":"*"
        },
        //credentials: "include", //body: JSON.stringify({//email,//password//})
        //mode:"no-cors",
        
      });
      const content = await response.json();
        setName(content.name);
        namec = content.name;
      if (content.name && content.name.trim() !== '') {
        setAuthenticated(true);
        console.log(`SideEffect has detected a session with ${namec}`);
      }
      //console.log(`Fetched the the following content: `);
      //console.log(content);
    } catch (e: unknown) {
      setAuthenticated(false);
      setName('');
      //let result = (e as Error).message;
      if (e instanceof Error) {
        //result = (e as Error).message; // works, `e` narrowed to Error
        setError({
          title: "An error occured.",
          content: `The system encountered an unexpected error:\n ${e} \n Please try again later.`,
        });
        console.log(error);
      }
    }
  }, [])
  useEffect(() => {
    fetchUserHandler();
  }, [fetchUserHandler]);


  return (
    <div className="App">
      <BrowserRouter>
        <Navigation name={name} setName={setName} authenticated={authenticated} />
        <main>
          <Route path="/" exact component={() => <Home name={name} />} />
          <Route path="/login" component={() => <Login setName={setName} email={''} password={''} />} />
          <Route path="/register" component={() => <Register name={''} email={''} password={''} />} />
          <Route path="/account" exact component={() => <Account name={name} />} />
          <Route path="/account/journal" exact component={() => <Journal name={name} />} />
          <Route path="/account/memo" exact component={() => <Memo />} />
          <Route path="/account/stock" exact component={() => <Stock />} />
          <Route path="/account/signinii" exact component={() => <SignInII />} />
          <Route path="/account/counter" exact component={() => <Counter />} />
          <Route path="/account/todos" exact component={() => <ToDo />} />
          <Route path="/account/tasks" exact component={() => <TaskCC />} />
          <Route path="/logout" exact component={() => <Logout />} />
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
//export default React.memo(App);
/**/
/*<Route path="/register" component={Register}/>


    useEffect(() => {
      if (name) {
        console.log("A Repeated Side Effect has been disabled. Optimisation: Skipping SideEffect");
        return;
      } else {
        (
          async () => { //
            console.log(`Asyncronous Loop Detected:`);
            const response = await fetch("http://pecan.local:2020/api/user", { //const response = await fetch("http://localhost:2020/api/register", {//method:"POST",
              headers: {
                "Content-Type": "application/json",
                //"Access-Control-Allow-Origin":"*"
              },
              credentials: "include", //body: JSON.stringify({//email,//password//})
            });
            const content = await response.json();
            if (content.name) {
              setName(content.name);
              namec = content.name;
              console.log(`SideEffect has has detected a session with ${namec}`);
              setAuthenticated(true);
            }
            console.log(`Fetched the the following content: `);
            console.log(content);
          }
        )();
      }
    }, [name]);

*/