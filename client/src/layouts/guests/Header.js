import React from 'react';
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className='row text-center'>
                    <h3>Student Information System</h3>
                </div>
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    {/* <Link className="navbar-brand" to="/">User Profile</Link> */}
                </div>
                <div className="collapse navbar-collapse">
                    <ul className="nav navbar-nav navbar-right">
                        <li>
                            <Link to="/login" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="ti-download"></i>
                                <p> Login</p>
                            </Link>
                        </li>
                        <li>
                            <Link to="/register" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="ti-upload"></i>
                                <p> Register</p>
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link to="/" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-bell"></i>
                                    <p className="notification">5</p>
                                    <p>Notifications</p>
                                    <b className="caret"></b>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/">Notification 1</Link></li>
                                <li><Link to="/">Notification 2</Link></li>
                                
                            </ul>
                        </li>
                        <li>
                            <Link to="/">
                                <i className="ti-settings"></i>
                                <p>Settings</p>
                            </Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
  )
};
