import React from 'react';
import { Link, useHistory } from 'react-router-dom'


export const SideBar = () => {

    const history = useHistory();

//     var isActive = this.context.router.route.location.pathname === this.props.to;
// var className = isActive ? 'active' : '';

//     <Link className={className} {...this.props}>
//         {this.props.children}
//     </Link>
// );

const checkPath = history.location.pathname === "/" ? "active" : "";
const userspath = history.location.pathname === "/users" ? "active" : "";


  return (
  
    <div className="sidebar" data-background-color="white" data-active-color="danger">

  
		{/* Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
		    Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger" */}
	

    	<div className="sidebar-wrapper">
            <div className="logo">
                <Link to="/" className="simple-text">
                    <img src='logo192.png' alt='logo' width='100' />
                </Link>
            </div>
            <div className="logo">
                <span>Welcome</span>
                 <h3>Guests</h3>
            </div>
           
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
