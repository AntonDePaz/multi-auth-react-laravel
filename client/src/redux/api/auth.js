//import axios from 'axios';
//import { useSelector } from 'react-redux';
import axios from './axios';
//import { axiosPrivate } from "./axios";
//import useAxiosPrivate from "../hooks/useAxiosPrivate";
 
//const axiosPrivate = useAxiosPrivate();

 //axios.defaults.baseURL = 'http://localhost:8000/api';
//  axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;

//  axios.interceptors.request.use(function(config){
//     const token = localStorage.getItem('authtoken');
//     config.headers.Authorization = token ? `Bearer ${token}` : '';
//     return config;
// });









 axios.defaults.headers.post['Content-Type'] = 'application/json';
 axios.defaults.headers.post['Accept'] = 'application/json';

// //axios.defaults.withCredentials = true;

axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('authtoken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

// header('Access-Control-Allow-Origin', '*');
// header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//axios.defaults.withCredentials = true;

//const url = 'http://localhost:8000/users';

//const API = axios.create({ baseURL: 'http://localhost:5000' });

//export const fetchUsers = () => axios.get(url);

//export const fetchGuest = () => API.get('/guests');

// export const useAxiosPrivate = () => {

//     const auth = useSelector((state) => state.auth);

//     //const refresh = useRefreshToken();
//    // const { auth } = useAuth();
    
//     //useEffect(() => {

//         const requestIntercept = axiosPrivate.interceptors.request.use(
//             config => {
//                 console.log('000000000000:',auth);
//                 if (!config.headers['Authorization']) {
//                     config.headers['Authorization'] = `Bearer ${auth?.token}`;
//                 }
//                 return config;
//             }, (error) => Promise.reject(error)
//         );

//         const responseIntercept = axiosPrivate.interceptors.response.use(
//             response => response,
           
//             async (error) => {
//                 console.log('000000000000:',auth);
//                 const prevRequest = error?.config;
//                 if (error?.response?.status === 403 && !prevRequest?.sent) {
//                     prevRequest.sent = true;
//                    // const newAccessToken = await refresh();
//                     const newAccessToken = auth?.token;

//                     prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
//                     return axiosPrivate(prevRequest);
//                 }
//                 return Promise.reject(error);
//             }
            
//         );

//         return () => {
//             axiosPrivate.interceptors.request.eject(requestIntercept);
//             axiosPrivate.interceptors.response.eject(responseIntercept);
//         }
//    // }, [auth, refresh])

//    // return axiosPrivate;
// }

// export default useAxiosPrivate;


export const insert = (usersData) => axios.post( `/auth/register`, usersData);
export const login = (usersData) => axios.post( `/auth/login`, usersData);
export const logout = () => axios.post( `/auth/logout`);
export const checkauth = () => axios.get(`/admin/checkAuth`);
export const checkauthstudent = () => axios.get('/student/checkAuth');
export const checkauthstaff = () => axios.get('/staff/checkAuth');


export const check = () => axios.get('/auth/checkAuth');


//export const check = () => useAxiosPrivate.get('/auth/checkAuth' , {withCredentials: true} );



