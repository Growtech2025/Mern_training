import React from 'react';
import './admin.css'; // External CSS for styling
import Navbar from '../components/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { changeinfo } from '../slices/Adminslice';

const Admin = () => {
  const dispatch = useDispatch();
  const fname = useSelector((state) => state.admin.name);
  const mail = useSelector((state) => state.admin.email);
  const mobile = useSelector((state) => state.admin.phone);
  const photo = useSelector((state) => state.admin.image);

  function handleChange() {
    console.log("clicked");
    dispatch(changeinfo());
  }

  return (
    <div>
      <Navbar />
      <div className="admin-container">
        <h1 className="admin-heading">Welcome to Admin</h1>

        <p className="admin-info"><strong>Name:</strong> {fname}</p>
        <p className="admin-info"><strong>Email:</strong> {mail}</p>
        <p className="admin-info"><strong>Phone:</strong> {mobile}</p>

        <img className="admin-image" src={photo} alt="Admin" />

        <button className="admin-button" onClick={handleChange}>
          Change
        </button>
      </div>
    </div>
  );
};

export default Admin;
