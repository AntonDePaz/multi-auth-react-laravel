import axios from './axios';
//import './index'
 

 //axios.defaults.baseURL = 'http://localhost:8000/api';

//  axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;


axios.defaults.headers.post['Content-Type'] = 'application/json';
 axios.defaults.headers.post['Accept'] = 'application/json';

 axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('authtoken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const insert = (studentData) => axios.post( `/student/insert`, studentData);
//export const getcourse = () => axios.get( `/staff/get`, );
export const getcourse = () => axios.get(`/student/getcourse`);
export const getstudents = () => axios.get(`/students`);
export const update = (studentData, id) => axios.post(`/student/update/${id}`, studentData);
export const upladcsv = (csvData) => axios.post(`/student/uploadcsv`, csvData);
export const deletestudent = (id) => axios.delete( `/student/delete/${id}`);




