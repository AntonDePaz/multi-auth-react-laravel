import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate,useLocation } from 'react-router-dom'
import { login } from '../../redux/actions/auth';

import  hasToken  from '../../layouts/auth';
import { SUCCESSLOGIN } from '../../redux/constant';

//Notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Backdrop, CircularProgress,CardMedia,ButtonGroup } from '@mui/material';


const Login = () => {
      const dispatch = useDispatch();
      const location = useLocation();
      const from = location.state?.from?.pathname || "/"; //goto /admin else /
     const navigate = useNavigate();
     const auth = useSelector((state) => state.auth);
     const [error, setError] = useState([]);
    const [loading, setLoading] = useState(true)
    const [account, setAccount] = useState({
        username: '',
        password :'',
        role : 3
    });


    const inputChange = (e) => {
       setAccount({ ...account , [e.target.name] : e.target.value })
    }

   const submitLogin = async(e) => {
    e.preventDefault();



    try {


    const response = await login(account);
    //console.log('Responsess:', response)


        console.log('Location:',location);


        if(response.status === 200){
            toast(response.data.message);
            setError('')
            navigate(from, { replace: true });
        // navigate('/admin')
        // console.log('sucess: ',response.data);
            dispatch({ type: SUCCESSLOGIN, payload: response.data })
        }else if(response.status === 400){
            //console.log('error: ',response.errors);
            setError(response.errors)
        // dispatch({ type: VALIDATE_INPUT_ERROR, payload: response.errors })
        }else if(response.status === 401){
            setError(response.errors)
        //  console.log('error: ',response.errors);
            //dispatch({ type: AUTHERROR, payload: data.errors })
        }

   // console.log(account);
      //  dispatch(login(account));

    } catch (err) {
        if (!err?.response) {
            console.log('No Server Response',err);
        } else if (err.response?.status === 400) {
            console.log('Missing Username or Password');
        } else if (err.response?.status === 401) {
            console.log('Unauthorized');
        } else {
            console.log('Login Failed');
        }
    }
   }

//    useEffect(()=> {
//      if(hasToken()){
//           navigate('/admin')
//      }
//     // setLoading(false)
//  },[]);


    return (

        <div class="wrapper">
                     <nav className="navbar navbar-default">
                                <div className="container-fluid">
                                    <div className="navbar-header">
                                        <button type="button" className="navbar-toggle">
                                            <span className="sr-only">Toggle navigation</span>
                                            <span className="icon-bar bar1"></span>
                                            <span className="icon-bar bar2"></span>
                                            <span className="icon-bar bar3"></span>
                                        </button>
                                        <Link className="navbar-brand" to="#">Student Information System | ADMIN</Link>
                                    </div>
                                
                                    <div className="collapse navbar-collapse">
                                    
                            
                                    </div>
                                </div>
                               
                            </nav>
                            <div className="content">
                                <ToastContainer/>
                                <div className="container-fluid" >
                                    <div className="row">
                                        <div className="col-md-4 col-md-offset-4">
                                            <div className="card card-user">
                                                <div className="image">
                                                    <img src="../assets/img/background.jpg" alt="..."/>
                                                </div>
                                                <div className="content">
                                                    <div className="author">
                                                    <img className="avatar border-white" src="../assets/img/faces/face-2.jpg" alt="..."/>
                                                    <h4 className="title">ADMIN LOGIN</h4>
                                                    <br />
                                                    </div>
                                                    <form onSubmit={submitLogin}>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <input type="text" className="form-control form-control-sm border-input" name='username'  placeholder="Username" onChange={inputChange} value={account.username} />
                                                                    <span className='text-danger'>{error ? error.username : ''}</span>
                                                                </div>
                                                            </div>
                                                            </div>
                                                        <div className="row">
                                                            <div className="col-md-12">
                                                                <div className="form-group">
                                                                    <input type="password" className="form-control form-control-sm border-input" name='password'  placeholder="Password" onChange={inputChange} value={account.password} />
                                                                    <span className='text-danger'>{error ? error.password : ''}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className='text-danger'>{error ? error.message : ''}</p>
                                                        <div className="row">
                                                            <button type='submit' className='btn btn-primary btn-sm btn-fill btn-wd'><b> &nbsp; LOGIN &nbsp;</b></button>
                                                        </div>
                                                    </form>
                                                    <br/>
                                                </div> 
                                            </div>
                                        </div>
                                        {/* <div className="col-lg-8 col-md-7">
                                            <div className="card">
                                                <div className="header">
                                                    <h4 className="title">Annoucement</h4>
                                                </div>
                                                <div className="content">
                                                    <h4>Others Contents</h4>
                                                </div>
                                            </div>
                                        </div> */}


                                    </div>
                                </div>
                           </div>
        </div>
            
    )
}

export default Login;
