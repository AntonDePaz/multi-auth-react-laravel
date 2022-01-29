import axios from "axios";
import React, {useEffect, useState} from "react";
import { Redirect, Route, useHistory } from "react-router-dom";
import Main from "../layouts/students/Main";


const StudentRoute = ({...rest}) => {

    const history = useHistory();
     const [Authenticated, setAuthenticated] = useState(true);
     const [loading, setLoading] = useState(true);

     useEffect(()  => {

        if(!localStorage.getItem('authtoken')){
            
            history.push('/login')
        }
      // setLoading(false)
        // console.log('res123:');

        // try {
        //     axios.get(`http://localhost:8000/api/student/checkAuth`).then((response) => {

        //         console.log('res123:',response);
        //         // if(response.status === 200){
        //         //     setAuthenticated(true);
        //         // }
        //         // setLoading(false);
        //     });
        //     return () =>{
        //        // setAuthenticated(false)
        //     }    
        // } catch (error) {
        //     console.log('Error:',error)  
        // }

    }, [history]);


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
        <Route {...rest}
            render={ ({props, location}) => (
                Authenticated ?
                    ( <Main {...props} /> ) :
                    ( <Redirect to={ {pathname: '/login', state: {from : location }  } } /> )
             ) 
            }   

        />
    )


}

export default StudentRoute