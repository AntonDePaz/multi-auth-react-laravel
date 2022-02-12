
import React from 'react';
// import { getStaff ,deleteStaff } from '../../../redux/actions/staff';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


import Slide from '@mui/material/Slide';
import { delStudent } from '../../../../redux/actions/student';
import { DELETESTUDENT } from '../../../../redux/constant';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

const DeleteModal = (props) => {

    const { dopen , dsetOpen , id } = props;
    const dispatch = useDispatch();

    const confirmDeleteStaff = async () => {
       
        const response = await delStudent(id);
        
        if(response.status === 200){
            dispatch({ type: DELETESTUDENT, id: id })
            toast.success('Student Succesfully Deleted')
            dsetOpen(false)
        }else if(response.status === 404){
            toast.error(response.errors.message)
            dsetOpen(false)
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
            <DialogTitle id="confirm-dialog"><b>Delete Student</b></DialogTitle>
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
                onClick={() => dsetOpen(false)}
                color="default"
                >
                  NO
                </Button>
            </DialogActions>
            </Dialog>
    )
};


export default DeleteModal;