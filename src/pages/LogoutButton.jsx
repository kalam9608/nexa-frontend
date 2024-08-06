import axios from 'axios'
import React from 'react'
import { useDispatch } from 'react-redux';
import { logout } from '../store/authSlice';
import { useNavigate } from 'react-router-dom';

function Logout({ children }) {
  const dispatch = useDispatch();
  const navigate=useNavigate();

  const logoutHander = async () => {

    try {
      const token = localStorage.getItem("token");

      const response = await fetch("/api/v1/users/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${token}`,
        },
      });

      dispatch(logout());

      const result = await response.json();

        if(result.success){
          navigate("/login")
        }
    } catch (error) {
      throw error
    }
  }

  return (
    <button type='submit' onClick={logoutHander} style={{ color: 'black', fontSize: "10px", padding: "0px 10px", borderRadius: "10px", border: "none" }}>{children}</button>
  )
}

export default Logout