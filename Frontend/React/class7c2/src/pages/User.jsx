import React from 'react';
import './user.css'; // ✅ Import the CSS file
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { changeinfo } from '../slices/Userslice';

const User = () => {
  const dispatch = useDispatch();
  const fname = useSelector((state) => state.user.name);
  const mail = useSelector((state) => state.user.email);
  const mobile = useSelector((state) => state.user.phone);
  const photo = useSelector((state) => state.user.image);

  function handleChange() {
    console.log("clicked");
    dispatch(changeinfo());
  }

  return (
    <div>
      <Navbar />
      <div className="user-container">
        <h1 className="user-heading">Welcome to User</h1>
        <p className="user-info"><strong>Name:</strong> {fname}</p>
        <p className="user-info"><strong>Email:</strong> {mail}</p>
        <p className="user-info"><strong>Phone:</strong> {mobile}</p>
        <img className="user-image" src={photo} alt="User" />
        <button className="user-button" onClick={handleChange}>
          Change
        </button>
      </div>
    </div>
  );
};

export default User;
