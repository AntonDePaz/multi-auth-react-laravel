import axios from 'axios';
 

 //axios.defaults.baseURL = 'http://localhost:8000/api';
 axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;

 axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('authtoken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});
// axios.defaults.headers.post['Content-Type'] = 'application/json';
// axios.defaults.headers.post['Accept'] = 'application/json';

// //axios.defaults.withCredentials = true;

// axios.interceptors.request.use(function(config){
//     const token = localStorage.getItem('auth_token');
//     config.headers.Authorization = token ? `Bearer ${token}` : '';
//     return config;
// });

// header('Access-Control-Allow-Origin', '*');
// header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
// header('Access-Control-Allow-Headers', 'Content-Type, Authorization');

//axios.defaults.withCredentials = true;

//const url = 'http://localhost:8000/users';

//const API = axios.create({ baseURL: 'http://localhost:5000' });

//export const fetchUsers = () => axios.get(url);

//export const fetchGuest = () => API.get('/guests');


export const insert = (usersData) => axios.post( `/auth/register`, usersData);
export const login = (usersData) => axios.post( `/auth/login`, usersData);
export const logout = () => axios.post( `/auth/logout`);
export const checkauth = () => axios.get( `/admin/checkAuth`);

