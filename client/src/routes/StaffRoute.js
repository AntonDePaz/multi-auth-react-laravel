


import Authorization from '../Authorization';
import axios from "axios";
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, useNavigate,Routes } from "react-router-dom";
import Main from "../layouts/staff/Main";

import { checkauthstaff, checkauthstudent } from "../redux/actions/auth";

import LoginStaff from '../components/staff/Login';


import StaffLayout from '../layouts/staff/Main';

import Dashboard from '../components/staff/Dashboard';


//function StaffRoute({...rest}) {
function StaffRoute() {


    const navigate = useNavigate();
    const dispatch = useDispatch();
    const auth = useSelector(state => state.auth)
     const [Authenticated, setAuthenticated] = useState(false);
     const [loading, setLoading] = useState(true);

     const [cstaff,setCstaff] = useState(0);


    
        // axios.interceptors.response.use(undefined , function axiosRetryInterceptor(err){
        //     if(err.response.status === 401){
        //        setAuthenticated(false)
        //        console.log('STAFF:401');
        //     }
        //     setLoading(false)
        //     return Promise.reject(err);
        // });
    
//   useEffect(()=>{
//       console.log("rest:",rest);
//     dispatch(checkauthstaff())

//   },[])



    // useEffect(()=>{
    //     console.log('AXIOs INTERCEPTORS STAFF:',auth);
        
    //            if(auth.isAuthStaff){
    //             setAuthenticated(true)
    //             setLoading(false)
    //            }
              
    //         //    }else if(auth.isAuthAdmin){
    //         //        history.push('/admin')
    //         //        setAuthenticated(true)
    //         //     }else if(auth.isAuthStudent){
    //         //         history.push('/')
    //         //         setAuthenticated(true)
    //         //     }
    //     //    },[state.isAuthAdmin]);
        
    //      axios.interceptors.response.use(function (res){
    //         console.log('RES:',res);
                
    //             if(res.data.status === 200){
    //                 setAuthenticated(true)
    //                 setLoading(false)
    //             }
    //             return res;
    //         }, function  (error) {
                
    //             if(error.response.status === 403){
    //                 setAuthenticated(false)
    //                 console.log('STAFF 403');
    //               //  setLoading(false)
    //             }else if(error.response.status === 404) { ///page not found
    //                 navigate('/page404');
    //               // console.log('404');
    //              // setLoading(false)
                  
    //             }
    //             else if(error.response.status === 401) { ///page not found
    //              console.log('STAFF 401');
    //              setAuthenticated(false)
    //             // setLoading(false)
    //             }
    //            setLoading(false)
    //             return Promise.reject(error);
    //         }
            
    //         )
    //     },[auth]);

    // if(loading){
    //     return <h3>Loading StafF...</h3>
    // }
    return (

        <Routes>
            <Route path='/' element={<StaffLayout/>} >
                <Route index element={<Dashboard/>} />
                <Route path='dashboard' element={<Dashboard/>} />
                {/* <Route path='students' element={<Students/>} />
                <Route path='staff' element={<Staff/>} /> */}
            </Route>
        </Routes>


    //     <Route {...rest}
    //     render={ ({props, location}) => (
    //         Authenticated ?
    //             ( <Main {...props} setCstaff={setCstaff} /> ) :
    //             navigate('/staff/login',{ state: {from : location } })
    //            // ( <Redirect to={ {pathname: '/staff/login', state: {from : location } }}  /> )
    //          //( <Redirect to={ {pathname: '/staff/login', statex: {from : location }   } }  /> )
    //      ) 
    //     }   

    // />
        // <Route {...rest} render={(props) => <Main {...props} />  } />
        //<Route {...rest}  render={(props) => {Authorization(<Main {...props} />,["guest"])}  } />
    )
}

export default StaffRoute;

