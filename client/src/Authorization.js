import React, {useEffect,useState} from "react";
import { useLocation, Navigate, useNavigate, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import hasToken from "./layouts/auth";
import { logout } from "./redux/actions/auth";
import useAxiosPrivate from "./redux/hooks/useAxiosPrivate";

const Authorization= ({ allowedRoles }) => {

   const authx = useSelector((state) => state.auth);
   
   const location = useLocation();
  // const navigate = useNavigate();
 //  const axiosPrivate = useAxiosPrivate();
  // console.log('Location:',location);
   const [auth, setAuth] = useState()
    const [loading,setLoading] = useState(true)


    // setTimeout(() => {
    //     logout();
    // }, 100);


  //   useEffect(() => {
  //     let isMounted = true;
  //     const controller = new AbortController();


  //     // if(authx?.users){
  //     //   isMounted && setAuth(authx.users)
  //     // }

  //    // setLoading(false)
  //     const getUsers = async () => {
       
  //         try {
  //             const response = await axiosPrivate.get('/admin/checkAuth');
  //             console.log('%%%%%%:',response.data);
  //             isMounted && setAuth(response.data);
  //         } catch (err) {
  //             console.error(err);
  //           //  navigate('/login', { state: { from: location }, replace: true });
  //         }
  //         setLoading(false)
  //     }
      
  //     getUsers();

  //     return () => {
       
  //         isMounted = false;
  //         controller.abort();
  //     }
  // }, [])


  
  //   useEffect(() => {
  //     let isMounted = true;
  //     const controller = new AbortController();

  //     const getUsers = async () => {
  //         try {
  //             const response = await axiosPrivate.get('/users', {
  //                 signal: controller.signal
  //             });
  //             console.log(response.data);
  //             isMounted && setUsers(response.data);
  //         } catch (err) {
  //             console.error(err);
  //             navigate('/login', { state: { from: location }, replace: true });
  //         }
  //     }

  //     getUsers();

  //     return () => {
  //         isMounted = false;
  //         controller.abort();
  //     }
  // }, [])


   useEffect(()=>{

    //     if(hasToken()){
    //         setAuth(hasToken())
    //     }else{
    //         setAuth(false) 
    //     }
       
    //    console.log('Authxxx:',authx);
    //   // if(authx.role){
    //     console.log('HasToken:',hasToken());
    //    // setAuth(hasToken())
       
     //  }
      // console.log('HasToken:',hasToken.role);
     //  console.log('IN AUTHO');
       setAuth(Number(localStorage.getItem('authtype')))
      // setAuth(authx)
       setLoading(false)
      // setAuth(hasToken())
      
   //  },[])
  },[location ,authx])


    
   if(loading){return <h4>Wait...</h4>}

   console.log('AUTH:=>',auth);
  //  console.log('Authorized:-'+auth+'-');
   

    return (
       // auth?.role?.find(roles => allowedRoles?.includes(roles))
       
       allowedRoles?.includes(auth)
            ? <Outlet />
            : location?.pathname === '/admin' 
                ? <Navigate to="admin/login" state={{ from: location }} replace />
                : location?.pathname === '/staff' 
                    ? <Navigate to="staff/login" state={{ from: location }} replace />
                    : <Navigate to="login" state={{ from: location }} replace />
    );
  }


export default Authorization;










//  /***Authorization***/
//  import React, { Component } from "react";
//  import { connect } from "react-redux";

// import { useHistory } from 'react-router-dom'

//  const Authorization = (WrappedComponent, allowedRoles) => {

//    const history = useHistory()
   
//  //const Authorization = (allowedRoles) => {
//    class WithAuthorization extends Component {
//      render() {
//        const userType  = this.props.userType;
//        if (allowedRoles.includes(userType)) {
//          return <WrappedComponent {...this.props} />;
//          //return <h1>You are In!</h1>;
//        } else {
//          if(allowedRoles.includes('guest')){
//            // history.push('/guest/login')
//         return <h1>GUests NII</h1>
//          // window.location.href = '/guest/login'
//          }else if(allowedRoles.includes('admin')){
//              return <h1>Admin NII</h1>
//          }else if(allowedRoles.includes('student')){
//            // history.push('/')
//           // window.location.href = '/'
//                 return <h1>Student NII</h1>
//          }else{
//          return <h1>You are not allowed to view this page! {allowedRoles} </h1>;
//          }
//        }
//      }
//    }
//    const mapStateToProps = state => ({ user: 'Users', userType: 'admin' })
//    return connect(mapStateToProps)(WithAuthorization);
//  };
//  export default Authorization;