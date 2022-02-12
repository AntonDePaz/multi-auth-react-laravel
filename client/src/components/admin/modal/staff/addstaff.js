import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { insert , getStaff, insertStaff } from '../../../../redux/actions/staff';


//DESIGN
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

import TextField from '@mui/material/TextField';
import CardMedia from '@mui/material/CardMedia'

import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Input from '@mui/material/Input';
import Box from '@mui/material/Box';

import useStyles from './styles';

//Notification
import { toast } from 'react-toastify';
import { ADDSTAFF } from '../../../../redux/constant';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const Addstaff = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
  //  const state = useSelector(state => state.staff)
    const [data, setData] = useState({
        firstname : '',
        lastname : '',
        email : '',
        username : '',
        phone : '', 
        password : '',
        address : '',
        role : 2,
    })
    const [photo,setPhoto] = useState();
    const [viewImg,setViewImg] = useState();
    const [error, setError] = useState([]);

       const { open } = props;
        const handleClose = () => {
            props.setOpen(!open);
        };

        // const Clear = async () => {
           
        //     const response = await clear();
        //     alert(response)
        //    // dispatch(clear())
        // }

    const handleImg = (e) => {
        setViewImg(URL.createObjectURL(e.target.files[0]));
        setPhoto(e.target.files[0]);
    }
  
    const handleInput = (e) => {

        setData({...data , [e.target.name] : e.target.value })
    }
    const hadleSubmit = async (e) => {
        e.preventDefault()
       
        const formData = new FormData();
        formData.append('firstname' , data.firstname)
        formData.append('lastname' , data.lastname)
        formData.append('email' ,data.email)
        formData.append('username' ,data.username)
        formData.append('phone' ,data.phone)
        formData.append('address' ,data.address)
        formData.append('password' ,data.password)
        formData.append('role' ,data.role)
       // formData.append('confirmpassword' ,data.confirmpassword)
        formData.append('photo', photo); //
       // dispatch(insert(formData));

        const  response = await  insertStaff(formData);
       
        console.log('Response from Staff',response);
        if(response){
        if(response.status === 200){
            dispatch({ type : ADDSTAFF , payload : response.response })
            toast(response.message);
            setError('')
            props.setOpen(false);
          //  dispatch(getStaff());
        }else if(response.status === 400){
            setError(response.errors)
        }
       }

       
       
    }
    // useEffect(()=>{
    //     props.setOpen(false);
    //     toast(success);
    // },[success])


    // useEffect(()=>{
    //     if(success){

    //     }
    //     props.setOpen(false);
    //     toast(success);
    // },[])

    // useEffect(()=>{

    //     if(state.items.length !== 0){
    //         console.log('state.items.message: ',state.items.message);
    //        // setSuccess(state.items.message);
    //          //toast(state.items.message);
    //         setError('')

    //     }
    //     else if(state.errors.length !== 0){
    //         setError(state.errors)
    //         console.log('Error naa');
    //     }
    //     // else {
    //     //     setError('')
    //     // }

    // },[state.errors,state.items]);
  
  //  console.log('State Staff:',state);
  return (
    <>   { data && 

    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
         fullWidth='md'
        //  maxWidth='md'
    >
        <DialogTitle><h4>Add Staff</h4></DialogTitle>
        <DialogContent>
        <form onSubmit={hadleSubmit} encType="multipart/form-data">
                        <div className="row" style={{ marginTop : '5px' }}>
                            <div className="col-md-6">
                                <div className="form-group">
                                <TextField
                                    name='firstname'
                                    onChange={handleInput}
                                    value={data.firstname}
                                    error={error && error.firstname ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Firstname"
                                // value="Phone Number"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    />
                                    <small className='text-danger'>{error ? error.firstname : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                                <TextField
                                    name='lastname'
                                    onChange={handleInput}
                                    value={data.lastname}
                                    error={error && error.lastname ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Lastname"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    />
                                     <small className='text-danger'>{error ? error.lastname : ''}</small>
                                </div>
                            </div>
                            </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField
                                     name='email'
                                     onChange={handleInput}
                                     value={data.email}
                                     error={error && error.email ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="Email"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    />
                                    <small className='text-danger'>{error ? error.email : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-6'>
                            <div className="form-group">
                            <TextField
                                name='phone'
                                onChange={handleInput}
                                value={data.phone}
                                error={error && error.phone ? true : false}
                                variant="outlined"
                                fullWidth={true}
                                size="small"
                                label="Phone"
                               inputProps={{style: {fontSize: 14}}} // font size of input text
                               InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                />
                                 <small className='text-danger'>{error ? error.phone : ''}</small>
                        </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <TextField
                                     name='username'
                                     onChange={handleInput}
                                     value={data.username}
                                     error={error && error.phone ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Username"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    />
                                     <small className='text-danger'>{error ? error.username : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                              <div className="form-group">
                                 <TextField
                                  name='password'
                                  onChange={handleInput}
                                  value={data.password}
                                    type='password'
                                    error={error && error.password ? true : false}
                                    variant="outlined"
                                    fullWidth={true}
                                    size="small"
                                    label="Password"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    />
                                    <small className='text-danger'>{error ? error.password : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                               <label htmlFor="upload-photo">
                                    <input
                                        style={{ display: 'none' }}
                                        id="upload-photo"
                                        //name="upload-photo"
                                        type="file"
                                        onChange={handleImg}
                                    />
                                   
                                    <Button variant="text" component="span">
                                        <h6>Select Photo</h6>
                                    </Button>
                                    </label>
                            
                                    {/* <Box 
                                    sx={{ p: 2, 
                                            border: '1px solid grey' ,
                                            width: '80%',
                                        // height: 300,
                                    
                                    }}> */}
                                         <CardMedia
                                            component="img"
                                          //  height="200"
                                            width='100px'
                                            //image={`http://localhost:8000/${item.photo}`}
                                            image={ viewImg ? viewImg : "../assets/img/faces/face-0.jpg"}
                                            alt="My Profile"
                                            style={{ borderRadius : '5px' , borderColor : 'red' }}
                                        />
                                        {/* <img
                                            width="160px"
                                            alt='Img'
                                            loading="lazy"
                                            src={ viewImg ? viewImg : "../assets/img/faces/face-0.jpg"}
                                        /> */}
                                          <small className='text-danger'>{error ? error.photo : ''}</small>
                                    {/* </Box> */}
                             </div>
                            </div>
                            <div className='col-md-6'>
                            <div className="form-group">
                                 <TextField
                                  name='address'
                                  onChange={handleInput}
                                  value={data.address}
                                    id="filled-multiline-flexible"
                                    label="Address"
                                    multiline
                                    error={error && error.address ? true : false}
                                  //  maxRows={4}
                                  rows = {4}
                                      fullWidth={true}
                                   // value={value}
                                  //  onChange={handleChange}
                                  inputProps={{style: {fontSize: 14}}}
                                  InputLabelProps={{style: {fontSize: 14}}} 
                                    variant="outlined"
                                    />
                                      <small className='text-danger'>{error ? error.address : ''}</small>
                                    </div>
                            </div>
                        </div>
                        <hr/>
                        <div className="row">
                         

                            <button type='button' className='btn btn-danger btn-sm btn-fill  pull-right' onClick={handleClose}><b> &nbsp; CANCEL &nbsp;</b></button>
                            {/* <button type='button' className='btn btn-danger btn-sm btn-fill  pull-right' onClick={Clear}><b> &nbsp; CLEAR &nbsp;</b></button> */}
                            <button type='submit' className='btn btn-primary btn-sm btn-fill pull-right'><b> &nbsp; SAVE  &nbsp;</b></button>

                        </div>
                     </form>
        </DialogContent>
        {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
    </Dialog>
}
    </>
  )

};


export default Addstaff