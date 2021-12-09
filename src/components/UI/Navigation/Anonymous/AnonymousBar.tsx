import { Link } from 'react-router-dom';
const AnonymousBar = () => {
    return (
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
        <li className="nav-item">
        <Link to="/login" className="nav-link active" aria-current="page">Login</Link>
        </li>
        <li className="nav-item">
        <Link to="/register" className="nav-link active" aria-current="page" >Register</Link>
        </li>
    </ul>
    );
}

export default AnonymousBar;