import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import { login } from '../../redux/actions/auth';

//Notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const state = useSelector((state) => state.auth);
    const [error, setError] = useState([]);

    const [account, setAccount] = useState({
        username: '',
        password :'',
        role : 0
    });


    const inputChange = (e) => {
       setAccount({ ...account , [e.target.name] : e.target.value })
    }

   const submitLogin = (e) => {
    e.preventDefault();

    console.log(account);
        dispatch(login(account));
   }

   useEffect(()=>{


   if(localStorage.getItem('authtoken')){
        history.push('/')
   }else{

   
        console.log('err:',state.errors);
        console.log('item:',state.items);
        //  if(state.errors.length < 1 || state.errors === undefined ){
        //    console.log('Items naa');
        //   // console.log(''+state.items.message);
        //     toast(state.items.message);
        //     setError('')
        //     // history.push('/');
        // }else{
        //    setError(state.errors)
        //    console.log('Error naa');
        //  }

        if(state.items.length !== 0){
            console.log('Items naa');
        // console.log(''+state.items.message);
            toast(state.items.message);
            setError('')
            history.push('/');
        }
        if(state.errors.length !== 0){
            setError(state.errors)
            console.log('Error naa');
        }
    }
    
   },[history, state.errors, state.items])


 



    return (
        <div className="content">
            <ToastContainer/>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4 col-md-5">
                        <div className="card card-user">
                            <div className="image">
                                <img src="assets/img/background.jpg" alt="..."/>
                            </div>
                            <div className="content">
                                <div className="author">
                                  <img className="avatar border-white" src="assets/img/faces/face-2.jpg" alt="..."/>
                                  <h4 className="title">MAIN CAMPUS<br />
                                       <p>Welcome</p>
                                  </h4>
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
                            </div>
                         
                           
                                <div className="row">
                                    <h6>Not Yet Account?</h6>
                                    <br/>
                                    <div>
                                      <Link to='/register'><h6>Create Account Here!</h6></Link>  
                                    </div>
                                    <br/>
                                </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Annoucement</h4>
                            </div>
                            <div className="content">
                                <h4>Others Contents</h4>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Login;
