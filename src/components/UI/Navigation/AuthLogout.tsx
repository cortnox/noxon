import { SyntheticEvent } from 'react';
import { Link } from 'react-router-dom';
const AuthLogout = (props:{
    onClick: (e:SyntheticEvent) => void ,
}) => {


    
    return (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
            <Link to="/logout" className="nav-link active" aria-current="page" href="/logout" onClick={props.onClick}>Logout</Link>
            </li>
        </ul>
    );
}

export default AuthLogout;