import axios from './axios';
 

 //axios.defaults.baseURL = 'http://localhost:8000/api';
 axios.defaults.headers.post['Content-Type'] = 'application/json';
 axios.defaults.headers.post['Accept'] = 'application/json';

//axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;
 axios.interceptors.request.use(function(config){
    const token = localStorage.getItem('authtoken');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

export const insert = (staffData) => axios.post( `/staff/insert`, staffData);
export const getstaff = () => axios.get( `/staff/get`);
export const update = (staffData, id) => axios.post(`/staff/update/${id}`, staffData);
export const deletestaff = (id) => axios.delete( `/staff/delete/${id}`);




