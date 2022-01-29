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

const checkPath = history.location.pathname === "/admin/" ? "active" : "";
const userspath = history.location.pathname === "/admin/userlist/" ? "active" : "";


  return (
  
    <div className="sidebar" data-background-color="white" data-active-color="danger">

  
		{/* Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black"
		Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger" */}
	

    	<div className="sidebar-wrapper">
            <div className="logo">
                <Link to="/admin" className="simple-text">
                    SIS MNHS
                </Link>
            </div>

            <ul className="nav">
                <li className={checkPath}>
                    <Link to="/admin">
                        <i className="ti-panel"></i>
                        <p>Dashboard</p>
                    </Link>
                </li>
                <li className={userspath}>
                    <Link to="/admin/students">
                        <i className="ti-user"></i>
                        <p>Students</p>
                    </Link>
                </li>
                <li className={userspath}>
                    <Link to="/admin/staff">
                        <i className="ti-github"></i>
                        <p>Staff</p>
                    </Link>
                </li>
            </ul>
    	</div>
    </div>

  
  
    )
};
