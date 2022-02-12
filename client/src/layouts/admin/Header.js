import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { logout } from '../../redux/actions/auth';

import hasToken from '../auth';

export const Header = () => {


    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [isLogin,setIsLogin] = useState(false);
    const state = useSelector((state) => state.auth);


    var lod = location.pathname;
    var parts = lod.split('/');
    var HeaderName = parts[parts.length - 1];
    
    useEffect(()=>{
        if(hasToken()){
            setIsLogin(hasToken())
        }else{
            setIsLogin(false) 
        }
        //setIsLogin(state.users)

    },[state])

    const submitLogout = () => {
       dispatch(logout())
      // navigate('admin/login')
    }

  return (
            <nav className="navbar navbar-default">
        { !isLogin.isLogin ? 'ADMIN LOGIN' : 
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar bar1"></span>
                        <span className="icon-bar bar2"></span>
                        <span className="icon-bar bar3"></span>
                    </button>
                    <Link className="navbar-brand" to="#" style={{ textTransform:'capitalize' } }>{HeaderName} Page</Link>
                </div>
               
                <div className="collapse navbar-collapse">
                   
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-user"></i>
                                    <p> &nbsp; {isLogin.name}</p>
                                    <b className="caret"></b>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="#" onClick={submitLogout}> <i className='ti-shift-left'></i> Logout</Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
             }
        </nav>
  )
};
