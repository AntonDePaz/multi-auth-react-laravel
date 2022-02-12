import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink, useNavigate , useLocation } from 'react-router-dom'


import hasToken from '../auth';


export const SideBar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const state = useSelector((state) => state.auth);
    const [isLogin,setIsLogin] = useState(false);

//     var isActive = this.context.router.route.location.pathname === this.props.to;
// var className = isActive ? 'active' : '';

//     <Link className={className} {...this.props}>
//         {this.props.children}
//     </Link>
// );

// useEffect(()=>{
//     setIsLogin(hasToken())
//     //console.log('HasToken:',hasToken());
// })




// useEffect(()=>{
//     if(hasToken()){
//         setIsLogin(hasToken())
//     }else{
//         setIsLogin(false) 
//     }
// },[state.isAuthAdmin])

    console.log('Location:',location);
    let activeStyle = {
        color : 'red',
        fontWeight : '800'
    };
   let activeClassname = 'underline'
    
  return (
  
    <div className="sidebar" data-background-color="white" data-active-color="danger">

  
		{/* Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
		Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger" */}
	

    	<div className="sidebar-wrapper">

            {/* {true ? <> */}

            <div className="logo">
                <Link to="dashboard" className="simple-text">
                    SIS MNHS
                </Link>
            </div>

            <ul className="nav">
                <li className={ location?.pathname === '/admin/dashboard' ? 'active' : location?.pathname === '/admin' ? 'active' : '' }>

                    <NavLink
                        to='dashboard'
                        style={({ isActive }) =>
                        isActive ? activeStyle : undefined
                    }
                   
                    >
                       <i className="ti-panel"></i>
                        <p>Dashboard</p>
                    </NavLink>

                    {/* <Link to="/admin">
                        <i className="ti-panel"></i>
                        <p>Dashboard</p>
                    </Link> */}
                </li>
                <li className={ location?.pathname === '/admin/students' ? 'active' : '' }>
                     <NavLink
                            to='students'
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        <i className="ti-user"></i>
                            <p>Students</p>
                        </NavLink>
                </li>
                <li className={ location?.pathname === '/admin/staff' ? 'active' : '' }>
                       <NavLink
                            to='staff'
                            style={({ isActive }) =>
                            isActive ? activeStyle : undefined
                        }
                        >
                        <i className="ti-github"></i>
                            <p>Staff</p>
                        </NavLink>
                </li>
            </ul>
            {/* </> 
            : 
            <>
             <div className="logo">
                <Link to="/admin" className="simple-text">
                    Admin Login
                </Link>
            </div>
                
            </> } */}
    	</div>
    </div>

  
  
    )
};
