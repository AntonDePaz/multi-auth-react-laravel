import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { insert , getStaff, clear, insertStaff } from '../../../../redux/actions/staff';


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

import useStyles from '../staff/styles';

//Notification
import { toast } from 'react-toastify';
import { MenuItem, Select } from '@mui/material';
import { updateStudent } from '../../../../redux/actions/student';
import { SUCCESSUPDATESTUDENT } from '../../../../redux/constant';




const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
  });

export const EditStudent = (props) => {

   
    const dispatch = useDispatch();
    const state = useSelector(state => state.students)
    const [data, setData] = useState({
            firstname : '',
            lastname : '',
            email : '',
            username : '',
            phone : '', 
            address : '',
            idnumber : '',
            course : 0
         })

    const [photo,setPhoto] = useState();
    const [viewImg,setViewImg] = useState();
    const [error, setError] = useState([]);
    const [course, setCourse] = useState([]);
    const [loading, setLoading] = useState(true);

       const { eopen, esetOpen, id } = props;
        const handleClose = () => {
            esetOpen(false);
        };

        useEffect(()=> {
            setCourse(state.course)
        });

        useEffect(()=>{
            if(state.students){
            const student = state.students.find(item => item.user.id === id);
            console.log('found:',student);
                        if(student){
                        setData({
                            firstname : student.user.firstname , 
                            lastname : student.user.lastname ,  
                            idnumber : student.id_number ,  
                            email : student.user.email ,  
                            username : student.user.username ,  
                            phone : student.phone ,  
                            address : student.address ,
                            course : student.course_id 
                            })
                    //     console.log('User ID:',staff.user.id);
                            
                  //  setData({ ...data , oldemail : student.email , oldusername: student.username })
        
                    setViewImg(`${process.env.REACT_APP_API_URL}/${student.photo}`)
                    
                    setPhoto()
                    setLoading(false)
                    }
            }
        },[id])



        // useEffect(()=> {  
        //     console.log('STUDENTS ANG NA UTRO');
        //     toast('Student Added Successfully');
        //     setError('')
        //     props.setOpen(!open);
        // },[state.students]);

        // useEffect(()=> {
                
        //     console.log('COURSE ANG NA UTRO');

        // },[state.course]);


        // useEffect(()=> {
        //     console.log('ERROR ANG NA UTRO');
        //     setError(state.errors)
        // },[state.errors]);


   

    const handleImg = (e) => {
        setViewImg(URL.createObjectURL(e.target.files[0]));
        setPhoto(e.target.files[0]);
    }
  
    const handleInput = (e) => {

        setData({...data , [e.target.name] : e.target.value })
    }
    const hadleSubmit = async  (e) => {
        e.preventDefault()

        console.log('DATA:',data)
        
        const formData = new FormData();
        formData.append('firstname' , data.firstname)
        formData.append('lastname' , data.lastname)
        formData.append('email' ,data.email)
        formData.append('username' ,data.username)
        formData.append('phone' ,data.phone)
        formData.append('address' ,data.address)
        formData.append('password' ,data.password)
        formData.append('course' ,data.course)
        formData.append('idnumber' ,data.idnumber)
        // formData.append('role' ,data.role)
       // formData.append('confirmpassword' ,data.confirmpassword)
        formData.append('photo', photo); //
       // dispatch(insert(formData));

       const response = await  updateStudent(formData, id);
        //  dispatch(insertStudent(formData));
       
       console.log('Response from Staff',response);
        if(response){
        if(response.status === 200){
            esetOpen(false);
            dispatch({ type: SUCCESSUPDATESTUDENT, payload:response.response })
           toast('Student Update Successfully');
            console.log('200:',response.response);
             setError('')
            
           
        }else if(response.status === 400){
            setError(response.errors)
        }
       }

       
       
    }
    
   // console.log('Course State:',state)
   // console.log('ADD Student STATE:',state)

  return (
    <>   { data && 

    <Dialog
        open={eopen}
        TransitionComponent={Transition}
        keepMounted
        onClose={()=> esetOpen(false)}
        aria-describedby="alert-dialog-slide-description"
         fullWidth='md'
        //  maxWidth='md'
    >
        <DialogTitle><h4>Edit Student</h4></DialogTitle>
        <DialogContent>
        <form onSubmit={hadleSubmit} encType="multipart/form-data">
                        <div className="row" style={{ marginTop : '5px' }}>
                            <div className="col-md-6">
                                <div className="form-group">
                               <input type='text' className='form-control  form-control-sm border-input' placeholder='Firtname' name='firstname'  onChange={handleInput} value={data.firstname} />

                                {/* <TextField
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
                                    /> */}
                                    <small className='text-danger'>{error ? error.firstname : ''}</small>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-group">
                               <input type='text' className='form-control  form-control-sm border-input' placeholder='Lastname' name='lastname'  onChange={handleInput} value={data.lastname} />

                                {/* <TextField
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
                                    /> */}
                                     <small className='text-danger'>{error ? error.lastname : ''}</small>
                                </div>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                               <input type='text' className='form-control  form-control-sm border-input' placeholder='Id Number' name='idnumber'  onChange={handleInput} value={data.idnumber} />

                                    {/* <TextField
                                     name='idnumber'
                                     onChange={handleInput}
                                     value={data.idnumber}
                                     error={error && error.idnumber ? true : false}
                                    variant="outlined"
                                //  className="form-control"
                                    fullWidth={true}
                                    size="small"
                                    label="ID Number"
                                // value="Phone Number"
                                inputProps={{style: {fontSize: 14}}} // font size of input text
                                InputLabelProps={{style: {fontSize: 14}}} // font size of input label
                                    /> */}
                                    <small className='text-danger'>{error ? error.idnumber : ''}</small>
                                </div>
                            </div>
                           
                            <div className="col-md-6">
                                <div className="form-group">
                               <input type='text' className='form-control  form-control-sm border-input' placeholder='Username' name='username'  onChange={handleInput} value={data.username} />

                                    {/* <TextField
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
                                    /> */}
                                     <small className='text-danger'>{error ? error.username : ''}</small>
                                </div>
                            </div>
                        </div>


                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                               <input type='email' className='form-control  form-control-sm border-input' placeholder='Email' name='email'  onChange={handleInput} value={data.email} />

                                    {/* <TextField
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
                                    /> */}
                                    <small className='text-danger'>{error ? error.email : ''}</small>
                                </div>
                            </div>
                            <div className='col-md-6'>
                            <div className="form-group">
                               <input type='text' className='form-control  form-control-sm border-input' placeholder='Phone' name='phone'  onChange={handleInput} value={data.phone} />

                            {/* <TextField
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
                                /> */}
                                 <small className='text-danger'>{error ? error.phone : ''}</small>
                        </div>
                            </div>
                        </div>
                        <div className="row">
                        <div className='col-md-6'>
                            <div className="form-group">
                                <select className='form-control form-control-sm border-input' name='course' value={data.course}  onChange={handleInput} >
                                { data.course === null || data.course === 0  ?  <option value={0} disabled selected>Select your option</option> : '' } 
                                    {
                                            course && 
                                            course.map((item,idx) => {
                                                return(
                                                    <option key={idx} value={item.id} >{item.description}</option>   
                                                )
                                            }
                                        ) 

                                    }

                                </select>


                                {/* <FormControl sx={{ m:1 , minWidth: 120}} > */}
                                {/* <FormControl fullWidth  >
                                    <InputLabel id='course'>Course</InputLabel>
                                    <Select
                                        labelId='course'
                                        value={data.course}
                                       // defaultValue={data.course}
                                        label="Course"
                                        name='course'
                                        onChange={handleInput}
                                    >
                                        {

                                            course && 
                                            course.map((item,idx) => {
                                                return(
                                                   
                                                 <MenuItem  key={idx} value={item.id}>{item.description}</MenuItem>
                                                 
                                                )
                                            }
                                            ) 
                                        
                                        }
                                        
                                    </Select> 
                                </FormControl>*/}
                                 <small className='text-danger'>{error ? error.course : ''}</small>
                                 </div>
                            </div>
                           
                            <div className="col-md-6">
                              <div className="form-group">
                               <input type='password' className='form-control  form-control-sm border-input' placeholder='Password' name='password'  onChange={handleInput} value={data.password} />
                                  
                                 {/* <TextField
                                 disabled
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
                                    /> */}
                                    <small className='text-danger'>{error ? error.password : ''}</small>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                               <label htmlFor="upload-photo">
                                    <input
                                       // style={{ display: 'none' }}
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
                                           // width='100px'
                                            //image={`http://localhost:8000/${item.photo}`}
                                            image={ viewImg ? viewImg : "../assets/img/faces/face-0.jpg"}
                                            alt="My Profile"
                                            style={{ borderRadius : '5px' , borderColor : 'red', width:'200px' }}
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
                                  rows = {6}
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
                            <button type='submit' className='btn btn-primary btn-sm btn-fill pull-right'><b> &nbsp; SAVE CHANGES  &nbsp;</b></button>

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


export default EditStudent