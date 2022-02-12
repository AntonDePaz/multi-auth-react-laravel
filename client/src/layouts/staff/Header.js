import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link,useNavigate } from 'react-router-dom'
import { logout } from '../../redux/actions/auth';
import hasToken from '../auth';


export const Header = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLogin,setIsLogin] = useState(false);
    const [name , setName] = useState('');
    const auth = useSelector((state) => state.auth);
   // const [loading, setLoading] = useState(true);

 
    useEffect(()=>{
        if(hasToken()){
            setIsLogin(hasToken())
        }else{
            setIsLogin(false) 
            setName('')
        }

    },[auth])

    // useEffect(()=>{
    //     if(!localStorage.getItem('authtoken')){
    //         setIsLogin(false)
    //     }else{
    //         setIsLogin(true)
    //         setName(localStorage.getItem('authname'))

    //     }
    //     // if(auth.isAuthStudent){
    //     //     // history.push('/')
    //     //     setIsLogin(hasToken())
    //     //     // setLoading(false)
    //     //     }
    //     //setLoading(false)
    // },[auth])

    const submitLogout = () => {
       // console.log('logout');

       dispatch(logout())
      // navigate('/login')
    }

    // if(loading){
    //     return <h2>Loading...</h2>
    // }


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
                       { !isLogin.isLogin ? (<>
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
                        </> ) : ( <>
                        <li className="dropdown">
                            <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                    <i className="ti-bell"></i>
                                    <p className="notification">5</p>
                                    <p>{isLogin.name}</p>
                                    <b className="caret"></b>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="#" onClick={submitLogout}>Logout</Link></li>
                            </ul>
                        </li>
                        </> ) }
                    </ul>

                </div>
            </div>
        </nav>
  )
};
