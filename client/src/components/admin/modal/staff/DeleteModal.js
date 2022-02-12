
import React from 'react';
import {deleteStaff } from '../../../../redux/actions/staff';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


import Slide from '@mui/material/Slide';
import { DELETESTAFF } from '../../../../redux/constant';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

const DeleteModal = (props) => {

    const { dopen , setDopen , id } = props;
    const dispatch = useDispatch();

    const confirmDeleteStaff = async () => {
        const response = await deleteStaff(id);
      //  console.log('del:',response);
        if(response.status === 200){
          dispatch({ type : DELETESTAFF , id : id })
            toast.success(response.message)
            setDopen(false)
          //  dispatch(getStaff());
        }else if(response.status === 404){
            toast.error(response.errors.message)
            setDopen(false)
        }else{
            alert('Something went wrong')
        }
    }

    //const {}

    return (
            <Dialog
            open={dopen}
            TransitionComponent={Transition}
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
                onClick={confirmDeleteStaff}
                color="secondary"
                >
                YES
                </Button>
                <Button
                variant="contained"
                onClick={() => setDopen(false)}
                color="defualt"
                >
                  NO
                </Button>
            </DialogActions>
            </Dialog>
    )
};


export default DeleteModal;