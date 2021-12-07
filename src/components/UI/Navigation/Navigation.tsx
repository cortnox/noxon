//import { Fragment } from 'hls.js';
//import DropDownBar from './DropDownBar';
import React, { Fragment, SyntheticEvent, useState } from 'react';
import { /*Link,*/ Redirect } from 'react-router-dom';
import NavAuthBar from './NavAuthBar';
import AnonymousBar from './Anonymous/AnonymousBar';
import Anonymous from './Anonymous/Anonymous';
import AuthLogout from './AuthLogout';
import SearchBar from './Anonymous/SearchBar';
import BrandBar from './BrandBar';
const Nav = (
    props: {
        name: string,
        authenticated: boolean,
        setName: (name: string) => void
    }) => {
    const [exited, setExited] = useState(false);
    const [error, setError] = useState({
        title: '',
        content: '',
    });
    const logout = async (e: SyntheticEvent) => {
        props.setName('');
        setExited(true);
        e.preventDefault();
        try {
            await fetch("http://pecan.local:2020/api/logout", {
            //await fetch("http://pecan.local:2019/api/clients/logout", {
                //const response = await fetch("http://localhost:2020/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                credentials: "include",
            });
        } catch (e: unknown) {
            //let result = (e as Error).message;
            if (e instanceof Error) {
                //result = (e as Error).message; // works, `e` narrowed to Error
                setError({
                    title: "An error occured.",
                    content: `The system encountered an unexpected error:[${e}] Please try again later.`,
                });
                console.log(error);
            }
            props.setName('');
            setExited(true);
            return;

        }
    }

    let nav;
    let menu = (<AnonymousBar />);
    let leftmenu = (<Anonymous />);
    let searchform = (<SearchBar />);
    //if (props.name === undefined || props.name === "") {
    if (!props.name) {
        console.log(`Rerunning Asyncronous SideEffect => ${props.name}`);
        leftmenu = (<Anonymous />);
        menu = (<AnonymousBar />);
    } else {
        //console.log(`Navigation Session: ${props.name}`);
        leftmenu = (<NavAuthBar />);
        menu = (<AuthLogout onClick={logout} />);
    }
    nav = (
        <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
            <div className="container-fluid">
                <BrandBar />
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    {leftmenu}
                    {searchform}
                    {menu}
                </div>
            </div>
        </nav>
    );
    if (exited) {
        console.log("redirecting");
        return (
            <Fragment>
                {nav}
                {<Redirect to="/logout" />}
            </Fragment>
        );
    }

    //{<Redirect to="/login" /> && <Redirect to="/logout" />}
    //{<Redirect to="/logout" />}
    return (
        <Fragment>
            {nav}
        </Fragment>
    );
}

export default Nav;
//export default memo(Nav);
/*
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
                <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="/">Home</Link>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/">    |</a>
                </li>
                <li className="nav-item">
                <a className="nav-link disabled" href="/">    |</a>
                </li>
                <li className="nav-item">
                <Link to="/account" className="nav-link active" aria-current="page">Account</Link>
                </li>
                <li className="nav-item">
                <Link to="/account/journal" className="nav-link active" aria-current="page">Journal</Link>
                </li>
                <li className="nav-item">
                <Link to="/account/memo" className="nav-link active" aria-current="page">Memo</Link>
                </li>
                <li className="nav-item">
                <Link to="/account/stock" className="nav-link active" aria-current="page">Stock</Link>
                </li>
                <li className="nav-item">
                <Link to="/account/signinii" className="nav-link active" aria-current="page">Sign In</Link>
                </li>
                <li className="nav-item">
                <Link to="/account/counter" className="nav-link active" aria-current="page">Counter</Link>
                </li>
                <li className="nav-item">
                <Link to="/account/todos" className="nav-link active" aria-current="page">To Dos</Link>
                </li>
                <DropDownBar navHandler={}/>
            </ul>
* */