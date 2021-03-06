import React from "react";
import { Link } from 'react-router-dom';
import DropDownBar from "./DropDownBar";
const NavAuthBar = () => {
    const dropDrownHandler = () => {

    };
    return (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
        <Link to="/" className="nav-link active" aria-current="page" >Home</Link>
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
        <Link to="/account/counter" className="nav-link active" aria-current="page">Counter</Link>
        </li>
        <li className="nav-item">
        <Link to="/account/todos" className="nav-link active" aria-current="page">To Dos</Link>
        </li>
        <li className="nav-item">
        <Link to="/account/tasks" className="nav-link active" aria-current="page">Tasks</Link>
        </li>
        <DropDownBar navHandler={dropDrownHandler}/>
    </ul>
    );
}

export default NavAuthBar;