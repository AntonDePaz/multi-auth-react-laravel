import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { insert , getStaff, updateStaff } from '../../../../redux/actions/staff';


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

import LoadingButton from '@mui/lab/LoadingButton'

import useStyles from './styles';

import SaveIcon from '@mui/icons-material/Save'

//Notification
import { toast } from 'react-toastify';
import { EDITSTAFF } from '../../../../redux/constant';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export const EditStaff = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const { open ,setOpen, id } = props;
  const thisStaff = useSelector((state) => (state.staffs));
   // const [loading, setLoading] = useState(true);
    const [loadingBTN, setLoadingBTN] = useState(false);
   
    const [data, setData] = useState({
        firstname : '',
        lastname : '',
        email : '',
        username : '',
        phone : '', 
        address : '',
        })

    const [photo,setPhoto] = useState();
    const [viewImg,setViewImg] = useState();
    const [error, setError] = useState([]);
 
        const handleClose = () => {
            setOpen(false);
        };

        

    const handleImg = (e) => {
        e.persist()
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

     
       // formData.append('password' ,data.password)
        formData.append('role' ,data.role)
       // formData.append('confirmpassword' ,data.confirmpassword)
        formData.append('photo', photo); //
       // dispatch(insert(formData));

        const response = await  updateStaff(formData , id);
       
        console.log('Response from Staff',response);
        if(response){
        if(response.status === 200){
            setOpen(false);
            dispatch({ type: EDITSTAFF, payload:response.response })
            toast('Staff Updated!');
            setError('')
           
          //  dispatch(getStaff());
        }else if(response.status === 400){
            setError(response.errors)
        }
        
       }
       setLoadingBTN(false)
    }

    useEffect(()=>{
        if(thisStaff.staffs){
        const staff = thisStaff.staffs.find(item => item.user.id === id);
        console.log('found:',staff);
        if(staff){
        setData({
             firstname : staff.user.firstname , 
             lastname : staff.user.lastname ,  
             email : staff.user.email ,  
             username : staff.user.username ,  
             phone : staff.phone ,  
             address : staff.address ,  
             })
        console.log('User ID:',staff.user.id);
            
       // setData({ ...data , oldemail : found.email , oldusername: found.username })
       // setViewImg(found.photo)
        setViewImg(`${process.env.REACT_APP_API_URL}/${staff.photo}`)
       
       // setPhoto()
     //  setLoading(false)
        }
        }
    },[id,thisStaff.staffs])

    
  //  console.log('Olddata:', oldata);
  return (
    <>   { data ? 
        
    <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
          fullWidth={true}
        //  maxWidth='md'
    >
        <DialogTitle><h4>Edit Staff ( {id})</h4></DialogTitle>
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
                                    fullWidth
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
                                  //  fullWidth='sm'
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
                                   // fullWidth='sm'
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
                              //  fullWidth='sm'
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
                                     error={error && error.username ? true : false}
                                    variant="outlined"
                                  //  fullWidth='sm'
                                    size="small"
                                    label="Username"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    />
                                     <small className='text-danger'>{error ? error.username : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                              {/* <div className="form-group">
                                 <TextField
                                  name='password'
                                  onChange={handleInput}
                                  value={data.password}
                                    type='password'
                                    error={error && error.password ? true : false}
                                    variant="outlined"
                                    fullWidth='sm'
                                    size="small"
                                    label="Password"
                                     inputProps={{style: {fontSize: 14}}} // font size of input text
                                     InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    />
                                    <small className='text-danger'>{error ? error.password : ''}</small>
                                </div> */}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                               {/* <label htmlFor="upload-photo">
                                    <input
                                        // style={{ display: 'none' }}
                                        id="upload-photo"
                                        //name="upload-photo"
                                        type="file"
                                        onChange={handleImg}
                                    />
                                   
                                    <Button variant="text" component="span">
                                        <h6>Change Photo</h6>
                                    </Button>
                                </label> */}

                                        <input
                                        accept="image/*"
                                        className={classes.input}
                                        style={{ display: 'none' }}
                                        id="raised-button-file"
                                        multiple
                                        type="file"
                                        onChange={handleImg}
                                        />
                                        <label htmlFor="raised-button-file">
                                        <Button variant="secondary" component="span">
                                           <h6>Change Image</h6> 
                                        </Button>
                                        </label>
                            
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            //image={`http://localhost:8000/${item.photo}`}
                                            image={ viewImg ? viewImg : "../assets/img/faces/face-0.jpg"}
                                            alt="My Profile"
                                            style={{ borderRadius : '5px' , borderColor : 'red' }}
                                        />
                                          <small className='text-danger'>{error ? error.photo : ''}</small>
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
                                    fullWidth
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
                                <LoadingButton
                                    color='secondary'
                                    onClick={()=> setLoadingBTN(true)}
                                  // onClick={handleClose}
                                    loading={loadingBTN}
                                    loadingPosition='start'
                                    startIcon={<SaveIcon/>}
                                    variant='contained'
                                >
                                    Save
                                    </LoadingButton>

                            <button type='button' className='btn btn-danger btn-sm btn-fill  pull-right' onClick={handleClose}><b> &nbsp; CANCEL &nbsp;</b></button>
                            <button type='submit' className='btn btn-primary btn-sm btn-fill pull-right'><b> &nbsp; SAVE CHANGES  &nbsp;</b></button>

                        </div>
                     </form>
        </DialogContent>
        {/* <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
    </Dialog>
       : '' }
    </>
  
  )

};


export default EditStaff