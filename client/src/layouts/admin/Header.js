import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import { logout } from '../../redux/actions/auth';

export const Header = () => {


    const dispatch = useDispatch();
    const [isLogin,setIsLogin] = useState(false);
    const [name , setName] = useState('');
    const state = useSelector((state) => state.auth);
   // const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(!localStorage.getItem('authtoken')){
            setIsLogin(false)
        }else{
            setIsLogin(true)
            setName(localStorage.getItem('authname'))

        }
        //setLoading(false)
    },[state.items])

    console.log('admin state:',state);
    const submitLogout = () => {
       dispatch(logout())
    }

    console.log('isLogin:',isLogin);
  return (
            <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    <Link className="navbar-brand" to="#">Admin Page</Link>
                </div>
                <div className="collapse navbar-collapse">
                    { !isLogin  ? '' : 
                    <ul className="nav navbar-nav navbar-right">

                        {/* <li>
                            <Link to="/admin" className="dropdown-toggle" data-toggle="dropdown">
                                <i className="ti-panel"></i>
                                <p>Stats</p>
                            </Link>
                        </li> */}
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-user"></i>
                                    <p> &nbsp; {name}</p>
                                    <b className="caret"></b>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="#" onClick={submitLogout}> <i className='ti-shift-left'></i> Logout</Link></li>
                                {/* <li><Link to="/">Notification 2</Link></li> */} 
                            </ul>
                        </li>
                        {/* <li>
                            <Link to="/">
                                <i className="ti-settings"></i>
                                <p>Settings</p>
                            </Link>
                        </li> */}
                    </ul>
                  }
                </div>
            </div>
        </nav>
  )
};
