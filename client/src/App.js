import React, {useEffect,useState } from 'react';
import {BrowserRouter as Router, Route, Routes,useNavigate,useRoutes} from 'react-router-dom';

import './App.css';

import Admin from './routes/AdminRoute';
import Students from './routes/StudentRoute';
import Staff from './routes/StaffRoute';



import Login from './components/admin/Login';
import LoginStudent from './components/students/Login';
import LoginStaff from './components/staff/Login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Page404 from './components/Page404';
import Authorization from './Authorization';

import AdminRoute from './layouts/admin/Main';
import StudentsRoute from './layouts/students/Main';
import StaffRoute from './layouts/staff/Main';
import { checkall,checkauthorize } from './redux/actions/auth';
import { useDispatch } from 'react-redux';




const type = {
  'student': 4,
  'staff': 2,
  'admin': 3
}

function App() {


  
//    const dispatch = useDispatch();
//    const [loading ,setLoading] = useState(true)

//  // const staffroute = useRoutes(staff(true))


//  useEffect(()=>{
//   console.log('Dispatch APP JS');
//   dispatch(checkauthorize())
//   setLoading(false)
//   //dispatch(checkall())
// },[]);


//   const [action,setAction] = useState('1')
//   console.log('%%APP RENDER%%');

//   useEffect(()=>{
//    // console.log('CHECK AUTH APP');
//      dispatch(checkauthstudent());
//      dispatch(checkauthstaff())
//      dispatch(checkauthorize())
// },[]);


// useEffect(()=>{
//   console.log('Action:',action);
// },[action])

//if(loading){ return <h2>Wait Loading Main App...</h2> }

  return (
    <div className="App">
      <ToastContainer/>
                   {/* Note: put last line the path='/' */}
                 
        <Router>
            <Routes>

                 {/* <Route exact path='/admin/login' component={Login} />
                 <Route exact path='/auth/login' component={LoginStaff} />
                 <Route exact path='/login' component={LoginStudent} /> */}

                <Route path="login" element={<LoginStudent />} />
                <Route path="staff/login" element={<LoginStaff />} />
                <Route path="admin/login" element={<Login />} />


                 <Route element={<Authorization allowedRoles={[type.admin]} />}>
                    <Route path="admin/*" element={<Admin />} />
                 </Route>
                 <Route element={<Authorization allowedRoles={[type.staff]} />}>
                      <Route path="staff/*" element={<Staff/>} /> 
                  </Route>
                 <Route element={<Authorization allowedRoles={[type.student]} />}>
                    <Route path="/" element={<Students />} /> 
                 </Route>
                 <Route path='*' element={<Page404/>} />
               
            </Routes>
        </Router>
    </div>
  );
}

export default App;
