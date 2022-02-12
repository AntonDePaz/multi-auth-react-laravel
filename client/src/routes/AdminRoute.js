
import React, {useEffect, useState} from "react";
import axios from 'axios';
import { useDispatch, useSelector } from "react-redux";
import { Route,Routes, useNavigate } from "react-router-dom";
import Main from "../layouts/admin/Main";
import { checkall, checkauthorize } from "../redux/actions/auth";

import Authorization from '../Authorization';
import { Backdrop, CircularProgress } from '@mui/material';

import { getStaffs } from "../redux/actions/staff";
import { getCourse, getStudents } from "../redux/actions/student";



import AdminLayout from '../layouts/admin/Main';

import Dashboard from '../components/admin/Dashboard';

import Students from '../components/admin/Students';
import Staff from '../components/admin/Staff';

//const  AdminRoute = ({...rest}) => {
const  AdminRoute = () => {

    


    
    //  const navigate = useNavigate();
    //  const auth = useSelector(state => state.auth)
    //  const staff = useSelector(state => state.staffs)
    //  const student = useSelector(state => state.students)
   

    //  const auth = useSelector(state => state.auth)
    //  const staff = useSelector(state => state.staffs)
    //  const student = useSelector(state => state.students)



    
    // const [loading, setLoading] = useState(true);

    // axios.defaults.baseURL = 'http://localhost:8000/api';


    // axios.interceptors.request.use(function(config){
    //     const token = localStorage.getItem('authtoken');
    //     config.headers.Authorization = token ? `Bearer ${token}` : '';
    //     return config;
    // });



    //  axios.interceptors.response.use(undefined , function axiosRetryInterceptor(err){
    //     if(err.response.status === 401){
    //       //  swal('Unauthorized', err.response.data.message,'warning')
    //        // history.push('/login');
    //        setAuthenticated(false)
    //        navigate('/admin/login');
    //        console.log('40111111');
    //     }
    //     setloading(false)
    //     return Promise.reject(err);
    // });


// useEffect(()=>{
// console.log('AXION INTERCEPTORS:',auth);

//         //    useEffect(()=> {
// //       // console.log('Login State Change:',state.isAuthAdmin)
//        if(auth.isAuthAdmin){
//         navigate('/admin')
//         setAuthenticated(true)
//         setloading(false)
//        }
// //    },[state.isAuthAdmin]);

//  axios.interceptors.response.use(function (res){
//         return res; 
//     }, function  (error) {
        
//         if(error.response.status === 403){
//             setAuthenticated(false)
//           //  console.log('403');
//            // swal('Forbidden',error.response.data.message,'warning');
//            // history.push('/login');
//         }else if(error.response.status === 404) { ///page not found
//            // swal('Forbidden','Page Not Found','warning');
//             navigate('/page404');
//           // console.log('404');
          
//         }
//         else if(error.response.status === 401) { ///page not found
//            // swal('Forbidden','Page Not Found','warning');
//            // history.push('/page404');
//           // console.log('401');
//          // history.push('/admin/login');
//          setAuthenticated(false)
//         }
//        setloading(false)
//         return Promise.reject(error);
//     }
    
//     )
// },[auth]);




//   if(loading){
//        return  ( 

//         <h2>Loading...</h2>
//         // <Backdrop 
//         //     sx={{ color : '#fff' , zIndex : (theme) => theme.zIndex.drawer + 1 }}
//         //     open={loading}
//         //     >
//         //      <CircularProgress color='inherit' />
//         // </Backdrop>
//        )
       
//    }
    

//    console.log('MAIN ROOT ADMIN:');


//    console.log('REST:',rest);
   

    const dispatch = useDispatch();

    useEffect(()=>{
        console.log('Dispatch ang Admin Layouts MAIN');
       // dispatch(checkauthorize())
       // dispatch(checkall())
        dispatch(getStaffs());
        dispatch(getStudents());
        dispatch(getCourse())
    },[]);

    return (
        <Routes>
            <Route path='/' element={<AdminLayout/>} >
                <Route index element={<Dashboard/>} />
                <Route path='dashboard' element={<Dashboard/>} />
                <Route path='students' element={<Students/>} />
                <Route path='staff' element={<Staff/>} />
            </Route>
        </Routes>







    //   <Routes>
    //      {/* <Route {...rest} render={(props) => <Main {...props} /> } /> */}
    //      <Route {...rest} render={(props) => <Main {...props} /> } />
    //    </Routes>
       //  <Route path="login" element={<LoginStudent />} />

         
         
        // <Route {...rest}
        //     render={ ({props, location}) => (
        //         Authenticated ?
        //             ( <Main {...props} /> ) :
        //             navigate('/admin/login', { replace: true })
        //             //( <navigate to={ {pathname: '/admin/login', state: {from : location }  } } /> )
        //      ) 
             
             
        //     }   />
            

        //     render={ ({props, location}) => (
        //         Authenticated ?
        //             ( <Main {...props} /> ) :
        //             ( <Redirect to={ {pathname: '/admin/login', state: {from : location }  } } /> )
        //      ) 
             
        //     }   

        // />
    )


}

export default AdminRoute