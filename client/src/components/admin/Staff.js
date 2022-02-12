import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Addstaff from './modal/staff/addstaff';
import {CardMedia,Avatar} from '@mui/material'
import ButtonGroup from '@mui/material/ButtonGroup'

import EditStaff from './modal/staff/editstaff';


import Button from '@material-ui/core/Button';

import { toast } from 'react-toastify';
import DeleteModal from './modal/staff/DeleteModal';
import { Backdrop, CircularProgress } from '@mui/material';


const Staff = () => {

    //const dispatch = useDispatch()
    const navigate = useNavigate()
    const stateStaff = useSelector(state => state.staffs)
    const auth = useSelector((state) => state.auth);

    const [open, setOpen] = useState(false);
    const [eopen, esetOpen] = useState(false);
    const [dopen, setDopen] = useState(false);
    const [id, setId] = useState(0);
   
    const [staffs , setStaffs] = useState([])
  
    const [loading , setLoading] = useState(false);
   
    const handleOpenModal = () => {
        setOpen(!open)
    }

    const handleditStaff = (id) => {
        esetOpen(true)
        setId(id)
    }
    const handldeleteStaff = (id) => {
        setId(id)
        setDopen(true)
    
    }
    useEffect(()=> {
        setLoading(true)
        if(stateStaff.staffs){
            setLoading(false)
            console.log('REDUCER STAFF NAGBAG.O');
            setStaffs(stateStaff.staffs);
        }
    },[stateStaff.staffs]);


    var TableRow = '';
   if(loading){
       return  ( 
        <Backdrop 
            sx={{ color : '#fff' , zIndex : (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
            >
             <CircularProgress color='inherit' />
        </Backdrop>
       )
       
   } else{

         TableRow = 
          staffs.map((item , index) => { 
                return (
                    <tr key={index}>
                        <td>{++index}</td>
                        <td>
                        <Avatar 
                            alt='avatar'  
                            src={`${process.env.REACT_APP_API_URL}/${item.photo}`} 
                             sx={{ width: 50 , height : 50 }} 
                             >
                             {item.user.firstname.charAt(0)+""+item.user.lastname.charAt(0) } 
                        </Avatar> 
                        {/* <CardMedia
                            component="img"
                        // height="100"
                            image={`${process.env.REACT_APP_API_URL}/${item.photo}`}
                            alt="My Profile"
                            style={{ borderRadius : '5px', width: '80px' }}
                        /> */}
                        </td>
                        <td>{item.user.firstname+' '+item.user.lastname}</td>
                        <td>{item.user.email}</td>
                        <td>{item.phone}</td>
                        <td>{item.user.username}</td>
                        <td>{item.address}</td>
                        <td>
                            <ButtonGroup variant="text" aria-label="text button group" >
                                <Button color='primary' onClick={ () => handleditStaff(item.user.id)}><h6>EDIT</h6></Button>
                                <Button color="secondary" onClick={ () => handldeleteStaff(item.user.id)} ><h6>DELETE</h6></Button>
                            </ButtonGroup>
                        </td>
                    
                    </tr>
                )   
             });
    }

    return (
 

        <div className="content">
          
             <Addstaff open={open} setOpen={setOpen}  />
            <EditStaff open={eopen} setOpen={esetOpen} id={id} />
            <DeleteModal dopen={dopen} setDopen={setDopen} id={id} />
           
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                            <button className='btn btn-sm btn-default pull-left' onClick={handleOpenModal} >Add New</button>
                                <h4 className="title">Staff List</h4>
                            </div>
                            <div className="content">
                                <div className="content table-responsive">
                                    <table className="table table-striped text-center">
                                        <thead>
                                            <th>NO</th>
                                            <th>IMAGE</th>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Username</th>
                                            <th>Address</th>
                                            <th>Action</th>
                                        </thead>
                                        <tbody>
                                            {TableRow}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    )
}

export default Staff;
