
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar({ cartItem }) {
    return (

        <nav className="navbar">
            <ul className="nav-list-containet">
                <div className="nav-list">
                    <li>
                        <NavLink to="/" className="active-link">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" className="active-link">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" className="active-link">Contact</NavLink>
                    </li>
                </div>
                <div className='Mycart'>
                    <li>
                        <NavLink to="/mycart" className="active-link">MyCart
                            {
                                 cartItem?.length > 0 ? (<p>{cartItem.length}</p>) : ("") 
                            }


                        </NavLink>
                    </li>
                </div>
            </ul>
        </nav>
    );
}

export default Navbar;
