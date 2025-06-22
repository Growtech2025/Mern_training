import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [role, setRole] = useState('user'); // default role
  const navigate = useNavigate();

  const handleClick = () => {
    const newRole = role === 'admin' ? 'user' : 'admin';
    setRole(newRole);

    // Navigate to '/' for admin, '/user' for user
    navigate(newRole === 'admin' ? '/' : '/user');
  };

  return (
    <nav className="navbar">
      <div className="logo">MyApp</div>
      <button className="toggle-btn" onClick={handleClick}>
        Go to {role === 'admin' ? 'User' : 'Admin'}
      </button>
    </nav>
  );
};

export default Navbar;
