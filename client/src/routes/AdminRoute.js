
import React, {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, Route, useHistory } from "react-router-dom";
import Main from "../layouts/admin/Main";
import { checkauthorize } from "../redux/actions/auth";


const  AdminRoute = ({...rest}) => {

    const history = useHistory();
    const dispatch = useDispatch();
     const [Authenticated, setAuthenticated] = useState(true);
     const state = useSelector(state => state.auth)
    // const [loading, setLoading] = useState(true);

    // axios.defaults.baseURL = 'http://localhost:8000/api';


    // axios.interceptors.request.use(function(config){
    //     const token = localStorage.getItem('authtoken');
    //     config.headers.Authorization = token ? `Bearer ${token}` : '';
    //     return config;
    // });



     useEffect(()  => {

        dispatch(checkauthorize());

        // try {
        //     axios.get(`http://localhost:8000/api/admin/checkAuth`).then((response) => {
        //         // if(response.status === 200){
        //         //     setAuthenticated(true);
        //         // }
        //         // setLoading(false);

        //         console.log('www:',response);
        //     });
        //     // return () =>{
        //     //     setAuthenticated(false)
        //     // }    
        // } catch (error) {
        //     console.log('Error:',error)  
        // }
        if(state.isAuth === false){
          //  history.push('/admin/login')
            setAuthenticated(false)
        }

    }, []);

   // console.log('state::',state);

    // axios.interceptors.response.use(undefined , function axiosRetryInterceptor(err){
    //     if(err.response.status === 401){
    //       //  swal('Unauthorized', err.response.data.message,'warning')
    //        // history.push('/login');

    //        console.log('403');
    //     }
    //     return Promise.reject(err);
    // });

    // axios.interceptors.response.use(function (res){
    //     return res; 
    // }, function  (error) {
    //     if(error.response.status === 403){

    //         console.log('403');
    //        // swal('Forbidden',error.response.data.message,'warning');
    //        /// history.push('/page403');
    //     }else if(error.response.status === 404) { ///page not found
    //        // swal('Forbidden','Page Not Found','warning');
    //        // history.push('/page404');
    //        console.log('404');

    //     }
    //     return Promise.reject(error);
    // }
    // )





    // if(loading){
    //     return <h2>Loading...</h2>
    // }

   
    return (

         <Route {...rest} render={(props) => <Main {...props} />  } />
         
        // <Route {...rest}
        //     // render={ ({props, location}) => (
        //     //     Authenticated ?
        //     //         ( <Main {...props} /> ) :
        //     //         ( <Redirect to={ {pathname: '/admin/login', state: {from : location }  } } /> )
        //     //  ) 
             
        //     // }   
            

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