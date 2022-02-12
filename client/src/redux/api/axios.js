//  import axios from 'axios'

//  axios.defaults.baseURL = `${process.env.REACT_APP_API_URL}/api`;

//  axios.interceptors.request.use(function(config){
//     const token = localStorage.getItem('authtoken');
//     config.headers.Authorization = token ? `Bearer ${token}` : '';
//     return config;
// });



import axios from 'axios';


const BASE_URL = `${process.env.REACT_APP_API_URL}/api`;

export default axios.create({
    baseURL: BASE_URL
});

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});





// axios.interceptors.response.use(undefined , function axiosRetryInterceptor(err){
//    // const history = useHistory()
//     if(err.response.status === 401){
//        // window.location.href = '/admin/login'
//       //  swal('Unauthorized', err.response.data.message,'warning')
//        // history.push('/admin/login');
//        // dispatch({ type: LOGOUT, payload: data.data })

//      // console.log('HOY DILI PWEDE');
//     }
//     return Promise.reject(err);
// });


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


 //axios.defaults.baseURL = 'http://localhost:8000';
// const url = 'http://localhost:8000/guests';

// //const API = axios.create({ baseURL: 'http://localhost:5000' });

// //export const fetchGuest = () => axios.get(url);

// //export const fetchGuest = () => API.get('/guests');
// export const insert = (newData) => axios.post(url, newData);

// // export const insert = (newData) => axios.post(url, {
// //     newData,
// //     headers: {
// //         'Content-Type': 'application/json'
// //     }
// // });




// //export const update = (id, updateGuest) => axios.patch(`${url}/${id}`, updateGuest);
// //export const deleted = (id) => axios.delete(`${url}/${id}`);