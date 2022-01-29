import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom'
import Addstaff from './modal/staff/addstaff';
import CardMedia from '@mui/material/CardMedia'

import { getStaff ,deleteStaff } from '../../redux/actions/staff';
import EditStaff from './modal/staff/editstaff';


import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

import { toast } from 'react-toastify';

const Staff = () => {

    const [open, setOpen] = useState(false);
    const [eopen, esetOpen] = useState(false);
    const [dopen, setDopen] = useState(false);
    const [id, setId] = useState();
    const dispatch = useDispatch()
    const state = useSelector(state => state.staff)

    const [staffs , setStaff] = useState()

    const [loading , setLoading] = useState(true);
   
    const handleOpenModal = () => {
        setOpen(!open)
    }

const handleditStaff = (id) => {
    console.log('id:',id)
    esetOpen(!open)
    setId(id)
}
const handldeleteStaff = (id) => {
    console.log('id:',id)
    setDopen(!dopen)
    setId(id)
   
}
const confirmDeleteStaff = async () => {
    console.log('delte id: ', id);
   
    const response = await deleteStaff(id);
    console.log('del:',response);
    if(response.status === 200){
        toast.success(response.message.message)
        setDopen(!dopen)
        dispatch(getStaff());
    }else if(response.status === 404){
        toast.error(response.errors.message)
        setDopen(!dopen)
    }else{
        alert('Something went wrong')
    }
}

    useEffect(()=> {
        if(state.items){
            setStaff(state.items);
            setLoading(false)
        }
    },[state.items]);

   if(loading){
       return <h3>Loading Product...</h3>
   }else{
      
        var data = 
        staffs.map((item , index) => { 
            return (
                <tr key={index}>
                    <td>{++index}</td>
                    <td>
                    <CardMedia
                        component="img"
                        height="100"
                        image={`${process.env.REACT_APP_API_URL}/${item.photo}`}
                        alt="My Profile"
                        style={{ borderRadius : '5px' }}
                     />
                     </td>
                    <td>{item.firstname+' '+item.lastname}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.username}</td>
                    <td>{item.address}</td>
                    <td>
                    <button type="button" className="btn btn-primary btn-sm" onClick={ () => handleditStaff(item.id)}  >Edit</button>
                    <button type="button" className="btn btn-danger btn-sm"  onClick={ () => handldeleteStaff(item.id)} >Delete</button>
                    </td>
                   
                </tr>
            )   
        });
    }
    
   
   // console.log('state:staff:',state);
   
      
    return (
 
        <div className="content">
            <Addstaff open={open} setOpen={setOpen}  />
            <EditStaff open={eopen} setOpen={esetOpen} id={id} />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                            <button className='btn btn-sm btn-default pull-left' onClick={handleOpenModal} >Add New</button>
                                <h4 className="title">Staff List</h4>
                            </div>
                            <div className="content">
                                <div className="content table-responsive table-full-width">
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
                                            {data}
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Dialog
                    open={dopen}
                    // onClose={() => setDopen(false)}
                    aria-labelledby="confirm-dialog"
                     fullWidth='xs'
                     maxWidth='xs'
                    >
                    <DialogTitle id="confirm-dialog"> <h5><b>Delete Staff</b></h5> </DialogTitle>
                    <DialogContent><h6>Are You Sure want to delete this record?</h6></DialogContent>
                    <DialogActions>
                        <Button
                        variant="contained"
                        onClick={() => setDopen(false)}
                        color="secondary"
                        >
                        NO
                        </Button>
                        <Button
                        variant="contained"
                        onClick={confirmDeleteStaff}
                        color="success"
                        >
                       YES
                        </Button>
                    </DialogActions>
                    </Dialog>



      </div>
    )
}

export default Staff;
