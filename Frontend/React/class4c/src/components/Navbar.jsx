// import { Link } from 'react-router-dom';

import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        // this is a first way to make navbar 
        // <nav className="navbar">
        //     <ul className="nav-list">
        //         <li><Link to="/">Home</Link></li>
        //         <li><Link to="/about">About</Link></li>
        //         <li><Link to="/contact">Contact</Link></li>
        //     </ul>
        // </nav>

        //this is the second way to make navbar f
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
