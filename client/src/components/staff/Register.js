import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

//redux
import { useSelector, useDispatch } from 'react-redux'
import { insert } from '../../redux/actions/auth'

//Notify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './Reg.css'

const Register = () => {
    const dispatch = useDispatch();
    const state = useSelector((state) => state.auth);
    const [users,setUsers] = useState({
        firstname : '',
        lastname : '',
        email : '',
        username : '',
        password : '',
        confirmpassword : '',
    });

    const [error, setError] = useState([]);

    const [photo,setPhoto] = useState();
    const [viewImg,setViewImg] = useState();


    useEffect(()=>{

     // console.log('err:',state.errors);
     // console.log('item:',state.items);
      if(state.errors.length < 1 || state.errors === undefined ){
        console.log('Items naa');
        console.log(''+state.items.message);
         toast(state.items.message);
      }else{
        setError(state.errors)
        console.log('Error naa');
      }

    },[state.errors,state.items])

   


    const handleInput = (e) => {
        setUsers({ ...users , [e.target.name] : e.target.value })
    }

    const handleImg = (e) => {
        setViewImg(URL.createObjectURL(e.target.files[0]));
        setPhoto(e.target.files[0]);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
      //  console.log(users);
      //  console.log(photo);

     
        const formData = new FormData();
        formData.append('firstname' , users.firstname)
        formData.append('lastname' , users.lastname)
        formData.append('email' ,users.email)
        formData.append('username' ,users.username)
        // formData.append('course' ,users.course)
        // formData.append('sex' ,users.sex)
        formData.append('password' ,users.password)
        formData.append('confirmpassword' ,users.confirmpassword)
       // formData.append('photo', photo); //filephoto

    

        dispatch(insert(formData));
       
    }


    return (
        
        <div className="content">
            <ToastContainer />
            <div className="container-fluid">
                <div className="row">
                <form onSubmit={handleSubmit} encType="multipart/form-data">
                    <div className="col-lg-4 col-md-5">
                        <div className="card card-user">
                            <div className="image">
                                <img src="assets/img/background.jpg" alt="..."/>
                            </div>
                            <div className="content">
                                <div className="author">
                                  <img className="avatar border-white" src={ viewImg ? viewImg : "assets/img/faces/face-0.jpg"} alt="..."/>
                                  {/* <h4 className="title">Chet Faker<br />
                                     <Link to="/"><small>@chetfaker</small></Link>
                                  </h4> */}
                                </div>
                                <span class="btn btn-primary btn-file btn-sm">
                                    Browse <input type="file" onChange={handleImg}/>
                                </span>
                                <p className="description text-center">
                                    Select your best photo
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-7">
                        <div className="card">
                            <div className="header">
                                <h4 className="title">Fill-Up Information</h4>
                            </div>
                            <div className="content">
                               
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Firstname</label>
                                                <input type="text" className="form-control form-control-sm border-input" name='firstname'  onChange={handleInput} value={users.firstname}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Lastname</label>
                                                <input type="text" className="form-control border-input" name='lastname'  onChange={handleInput} value={users.lastname}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Email</label>
                                                <input type="text" className="form-control border-input" name='email'  onChange={handleInput} value={users.email}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Username</label>
                                                <input type="text" className="form-control border-input" name='username'  onChange={handleInput} value={users.username}/>
                                            </div>
                                        </div>
                                    </div>

                                    {/* <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Course</label>
                                                <select class="form-select form-control border-input" name='course'  onChange={handleInput} value={users.course}>
                                                <option selected disabled>Select Course</option>
                                                <option value="BSINFO">BSINFO</option>
                                                <option value="BSCRIM">BSCRIM</option>
                                                <option value="BSIT">BSIT</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-md-6">   
                                             <div className="form-group">
                                                <label>Course</label>
                                                <select class="form-select form-control border-input" name='sex'  onChange={handleInput} value={users.sex}>
                                                    <option selected disabled>Select Gender</option>
                                                    <option value="Male">Male</option>
                                                    <option value="Female">Female</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div> */}

                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Password</label>
                                                <input type="password" className="form-control border-input" name='password'  onChange={handleInput} value={users.password}/>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <label>Confirm Password</label>
                                                <input type="text" className="form-control border-input" name='confirmpassword'  onChange={handleInput} value={users.confirmpassword}/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="text-center">
                                         <button type="submit" className="btn btn-info btn-fill btn-wd">Create Account</button>
                                    </div>
                                    <p>Already Account ?</p>
                                    <Link to='/login'><h6>Login</h6></Link>
                                    <div className="clearfix"></div>
                              
                            </div>
                        </div> 
                    </div>
                </form>

                </div>
            </div>
        </div>
    )
}

export default Register;
