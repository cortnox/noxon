import React, { useEffect, useState } from 'react';

import Login from './Login/JLogin';
import Home from './Home/JHome';
import MainHeader from './MainHeader/JMainHeader';

function SignInII() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const userloggedin = localStorage.getItem('isLoggedIn');
    if (userloggedin){
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {

    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', true);
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </React.Fragment>
  );
}

export default SignInII;
