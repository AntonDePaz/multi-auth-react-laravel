import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import AddStudent from './modal/student/AddStudent';
import { useDispatch, useSelector } from 'react-redux';
//import { getCourse, getStudents } from '../../redux/actions/student';
import { Backdrop, CircularProgress,CardMedia,ButtonGroup } from '@mui/material';
import EditStudent from './modal/student/EditStudent';
import DeleteModal from './modal/student/DeleteModal';
//import hasToken from '../../layouts/auth';

 import TableData from './modal/student/TableData';
import Upload from './modal/student/Upload';
 // import MUITable from './modal/student/MuiTable';

// import MUIDataTable from "mui-datatables";
// import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

// import '@fortawesome/fontawesome-free/css/all.min.css';
// import'bootstrap-css-only/css/bootstrap.min.css'; 
// import 'mdbreact/dist/css/mdb.css';

//import { MDBDataTableV5 } from 'mdbreact';

const Students = () => {

    const [open, setOpen] = useState(false);
    const [eopen, esetOpen] = useState(false);
    const [dopen, dsetOpen] = useState(false);
    const [uopen, usetOpen] = useState(false);
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const states = useSelector(state => state.students)
    const auth = useSelector((state) => state.auth);

    const [students, setStudents] = useState([]);
    const [course, setCourse] = useState();
    const [loading,setLoading] = useState(true)
    const [id,setId] = useState(0);








    

 const handleditStaff = (id) => {
    setId(id)
    esetOpen(true)
}
const handldeleteStaff = (id) => {
    setId(id)
   dsetOpen(!dopen)
}

 useEffect(()=>{
     setLoading(true)  
    if(states.students){
        console.log('REDUCER STUDENT NAGBAG.O');
         setStudents(states.students);
         setCourse(states.course)
        setLoading(false)
    }
 },[states]);
      
    const btnaddStudent = () => {
      setOpen(true)
    }
  //var tabelRow = '';
    if(loading){
        return  ( 
         <Backdrop 
             sx={{ color : '#fff' , zIndex : (theme) => theme.zIndex.drawer + 1 }}
             open={loading} >
              <CircularProgress />
         </Backdrop>
        ) 
    }
    // else{
 
    //     tabelRow = 
    //      students.map((item , index) => { 
    //          return (
    //              <tr key={index}>
    //                  <td>{++index}</td>
    //                  {/* <td>
    //                  <CardMedia
    //                      component="img"
    //                    //  width="100px"
    //                      image={`${process.env.REACT_APP_API_URL}/${item.photo}`}
    //                      alt="My Profile"
    //                      style={{ borderRadius : '5px' , width : '80px' }}
    //                   />
    //                   </td> */}
    //                  <td>{item.id_number}</td>
    //                  <td>{item.user.firstname+' '+item.user.lastname}</td>
    //                  <td>{item.phone}</td>
    //                  <td>{item.user.username}</td>
    //                  <td>{item.user.email}</td>
    //                  <td>{item.course.description}</td>
    //                  <td>{item.address}</td>
    //                  <td>
 
    //                      <ButtonGroup variant="text" aria-label="text button group" >
    //                          <Button color='primary' onClick={ () => handleditStaff(item.user.id)}><h6>EDIT</h6></Button>
    //                          <Button color="secondary" onClick={ () => handldeleteStaff(item.user.id)} ><h6>DELETE</h6></Button>
    //                      </ButtonGroup>
    //                  </td>
                    
    //              </tr>
    //          )   
    //      });
    // }




    return ( 
        <div className="content">
            <AddStudent open={open} setOpen={setOpen} course={course} />
            <EditStudent eopen={eopen} esetOpen={esetOpen} id={id} />
            <DeleteModal dopen={dopen} dsetOpen={dsetOpen} id={id} />
            <Upload uopen={uopen} usetOpen={usetOpen}/>
        <div className="container-fluid">
            <div className="row">

                <div className="col-md-12">
                    <div className="card">
                        <div className="header">
                            <button className='btn btn-sm btn-default pull-left' onClick={btnaddStudent}>Add New</button>
                            <h4 className="title">Users List</h4>
                        </div>
                        <div className="content">
                          {/* < MUITable /> */}
                        {/* <MDBDataTableV5
                        hover
                        entriesOptions={[5, 20, 25]}
                        entries={5}
                        pagesAmount={4}
                        data={datatable}
                        pagingTop
                        searchTop
                        searchBottom={false}
                        barReverse
                        /> */}
                        {/* <MUIDataTable 
                        title={"Employee List"} 
                        data={data} 
                        columns={columns} 
                        options={options} 
                        /> */}
                        <TableData esetOpen={esetOpen} dsetOpen={dsetOpen} usetOpen={usetOpen} setId={setId} />
                            {/* <div class="content table-responsive">
                           
                                <table class="table table-striped" id="myTableStudnets">
                                    <thead>
                                        <th>ID</th>
                                         <th>Photo</th>
                                        <th>IDNumber</th>
                                        <th>Full Name</th>
                                        <th>Phone</th>
                                        <th>Username</th>
                                        <th>Email</th>
                                        <th>Course</th>
                                        <th>Address</th>
                                        <th>Action</th>
                                    </thead>
                                    <tbody> 
                                        {tabelRow}
                                    </tbody>
                                </table>

                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Students;
