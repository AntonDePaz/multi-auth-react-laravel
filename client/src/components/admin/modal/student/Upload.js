import React,{useState} from 'react';
// import { getStaff ,deleteStaff } from '../../../redux/actions/staff';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';


import Slide from '@mui/material/Slide';
import { delStudent, getStudents, uploadCsv } from '../../../../redux/actions/student';
import { DELETESTUDENT } from '../../../../redux/constant';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

 const Upload = (props) => {

  const dispatch = useDispatch()
  const { uopen , usetOpen } = props;
  const [csv , setCsv] = useState();
  const hadleSubmit = async(e) => {
      e.preventDefault()

      console.log(csv)
      const formData = new FormData();
      formData.append('students_csv' , csv);
      const response = await  uploadCsv(formData);
      console.log('RESPONSE:',response);
      if(response){
            if(response.status === 200){

                console.log('Success to import');
                dispatch(getStudents());
                usetOpen(false)
               // props.setOpen(false);
              //  dispatch({ type: SUCCESSINSERTSTUDENT, payload:response.response })
                 toast('Imported Successfully');
            // console.log('200:',response.response);
              
            }else if(response.status === 404){
               // setError(response.errors)
               console.log('Error to csv');
            }
       }


  }

  return (
    <Dialog
    open={uopen}
    TransitionComponent={Transition}
    // onClose={() => setDopen(false)}
    aria-labelledby="confirm-dialog"
    fullWidth='xs'
    maxWidth='xs'
    >
<form onSubmit={hadleSubmit} encType="multipart/form-data">
    <DialogTitle id="confirm-dialog"><b>Upload File Student</b></DialogTitle>
    <DialogContent>
      <center> 
        <h6>Upload Students File excel(CSV) format</h6>
        <label htmlFor="upload-photo">
            <input
               // style={{ display: 'none' }}
               accept='.csv'
                id="upload-photo"
               // name="csv_file"
                type="file"
                onChange={(e)=> setCsv(e.target.files[0])} 
            />
           <Button variant="text" color="secondary" component="span">
           <h6>Select Photo</h6>
            </Button>
            </label>
        </center>
    </DialogContent>
    <DialogActions>
       <Button
        variant="contained"
        type="submit"
      //  onClick={() => usetOpen(false)}
        color="primary"
        >
          UPLOAD NOW
        </Button>
        <Button
        variant="contained"
        onClick={() => usetOpen(false)}
        color="default"
        >
          CLOSE
        </Button>
    </DialogActions>
    </form>
    </Dialog>
    );
};


export default Upload;