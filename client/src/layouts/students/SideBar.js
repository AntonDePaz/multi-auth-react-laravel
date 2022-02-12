import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/auth';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import hasToken from '../auth';


export const SideBar = () => {
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth);
    const [ user, setUser] = useState();
    const navigate = useNavigate();

    useEffect(()=>{
        if(hasToken()){
            setUser(hasToken())
        }else{
            setUser(false) 
          //  setName('')
        }

    },[auth])

    // useEffect(()=>{
    //     if(localStorage.getItem('authtoken')){
    //         if(state.users.length !== 0){
    //             setUser(state.items.firstname+' '+state.items.lastname);
    //         }
    //     }else{
    //         setUser('');
    //     }
    // },[state]);

        const submitLogout = () => {
           dispatch(logout());
           navigate('/login')
        }


       // console.log('STUDENT HOME:',state);
// const checkPath = history.location.pathname === "/" ? "active" : "";
// const userspath = history.location.pathname === "/users" ? "active" : "";


  return (
  
    <div className="sidebar" data-background-color="white" data-active-color="danger">
        <ToastContainer/>
  
		{/* Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
		    Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger" */}
	

    	<div className="sidebar-wrapper">
            <div className="logo">
                <Link to="/" className="simple-text">
                    <img src='logo192.png' alt='logo' width='100' />
                </Link>
            </div>
           
            { user ?
                <div className="logo">
                    <span>Welcome</span>
                    <h3>{user.name}</h3>
                    <Link to='#' onClick={submitLogout}>Logout</Link>
                </div>
             :
             <div className="logo">
                <span>Welcome</span>
                <h3>Students</h3>
             </div>
             }
           
            {/* <ul className="nav">
                <li className={checkPath}>
                    <Link to="/">
                        <i className="ti-panel"></i>
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li className={userspath}>
                    <Link to="/users">
                        <i className="ti-user"></i>
                        <p>User Profile</p>
                    </Link>
                </li>
            </ul> */}
    	</div>
    </div>

  
  
    )
};
