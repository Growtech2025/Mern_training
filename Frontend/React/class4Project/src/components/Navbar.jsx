
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (

        <nav className="navbar">
            <ul className="nav-list">
                <li>
                    <NavLink to="/" ClassName="active-link">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" ClassName="active-link">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" ClassName="active-link">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
