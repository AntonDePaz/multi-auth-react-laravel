import axios from "axios";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, Routes,  useNavigate } from "react-router-dom";
import Main from "../layouts/students/Main";
import { checkauthstudent } from "../redux/actions/auth";

import StudentLayout from '../layouts/students/Main';

import Dashboard from '../components/students/Dashboard';




// const StudentRoute = ({...rest}) => {
const StudentRoute = () => {

    // const navigate = useNavigate();
    // const dispatch = useDispatch();
    // const auth = useSelector(state => state.auth)
    //  const [Authenticated, setAuthenticated] = useState(false);
    //  const [loading, setLoading] = useState(true);


       


      

// // useEffect(()=>{
// //     console.log('MAIN STUDENT AUTH:',auth);
// //             if(auth.isAuthStudent){
// //                 //history.push('/')
// //                 setAuthenticated(true)
               
// //                }else{
// //                 setAuthenticated(false)
// //                }
// //                setLoading(false)
//         axios.interceptors.response.use(undefined , function axiosRetryInterceptor(err){
//             if(err.response.status === 401){
//               //  swal('Unauthorized', err.response.data.message,'warning')
//                // history.push('/login');
//                setAuthenticated(false)
//               // history.push('/login');
//                console.log('ST:401');
//             }
//             setLoading(false)
//             return Promise.reject(err);
//         });
    
//    // },[auth]);



//     useEffect(()=>{
//         console.log('AXIOs INTERCEPTORS STUDENTS:',auth);
        
//                 //    useEffect(()=> {
//         //       // console.log('Login State Change:',state.isAuthAdmin)
//                if(auth.isAuthStudent){
//                // history.push('/')
//                 setAuthenticated(true)
//                 setLoading(false)
//                }else if(auth.isAuthAdmin){
//                 navigate('/admin')
//                 }
//                    else{
//                 setAuthenticated(false)
//                }
//         //    },[state.isAuthAdmin]);
        
//          axios.interceptors.response.use(function (res){
//                 return res; 
//             }, function  (error) {
                
//                 if(error.response.status === 403){
//                     setAuthenticated(false)
//                     console.log('ST 403');
//                    // swal('Forbidden',error.response.data.message,'warning');
//                    // history.push('/login');
//                 }else if(error.response.status === 404) { ///page not found
//                    // swal('Forbidden','Page Not Found','warning');
//                    navigate('/page404');
//                   // console.log('404');
                  
//                 }
//                 else if(error.response.status === 401) { ///page not found
//                    // swal('Forbidden','Page Not Found','warning');
//                    // history.push('/page404');
//                   // console.log('401');
//                  // history.push('/admin/login');
//                  console.log('ST 401');
//                  setAuthenticated(false)
//                 }
//              //  setLoading(false)
//                 return Promise.reject(error);
//             }
            
//             )
//         },[auth]);
        

    // useEffect(()  => {

    //     if(!localStorage.getItem('authtoken')){
            
    //         history.push('/login')
    //     }
    //   // setLoading(false)
    //     // console.log('res123:');

    //     // try {
    //     //     axios.get(`http://localhost:8000/api/student/checkAuth`).then((response) => {

    //     //         console.log('res123:',response);
    //     //         // if(response.status === 200){
    //     //         //     setAuthenticated(true);
    //     //         // }
    //     //         // setLoading(false);
    //     //     });
    //     //     return () =>{
    //     //        // setAuthenticated(false)
    //     //     }    
    //     // } catch (error) {
    //     //     console.log('Error:',error)  
    //     // }

    // }, [history]);


    // axios.interceptors.response.use(undefined , function axiosRetryInterceptor(err){
    //     if(err.response.status === 401){
    //       //  swal('Unauthorized', err.response.data.message,'warning')
    //        // history.push('/login');
    //         console.log('err20:', err.response);
    //     }
    //     return Promise.reject(err);
    // });

    // axios.interceptors.response.use(function (res){
    //     return res; 
    // }, function  (error) {
    //     if(error.response.status === 403){
    //         swal('Forbidden',error.response.data.message,'warning');
    //         history.push('/page403');
    //     }else if(error.response.status === 404) { ///page not found
    //         swal('Forbidden','Page Not Found','warning');
    //         history.push('/page404');
    //     }
    //     return Promise.reject(error);
    // }
    
    // )

    
    
    // if(loading){
    //     return <h2>Loading...</h2>
    // }

   
    return (

    <Routes>
        <Route path='/' element={<StudentLayout/>} >
            <Route index element={<Dashboard/>} />
            <Route path='dashboard' element={<Dashboard/>} />
            {/* <Route path='students' element={<Students/>} />
            <Route path='staff' element={<Staff/>} /> */}
        </Route>
    </Routes>


        // <Route {...rest}
        //     render={ ({props, location}) => (
        //         Authenticated ?
        //             ( <Main {...props} /> ) :
        //             navigate('/login',{ state: {from : location } })
        //           //  ( <Redirect to={ {pathname: '/login', state: {from : location }  } } /> )
        //      ) 
        //     }   

        // />
    )


}

export default StudentRoute