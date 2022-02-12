//import { LOGINSUCCESS, LOGINERROR, LOGOUT } from '../constant';
import { SUCCESSLOGIN, VALIDATE_INPUT_ERROR, AUTHADMIN, AUTHERROR, LOGOUT,REFRESHAUTH } from '../constant';
import * as api from '../api/auth';
import useAxiosPrivate from "../hooks/useAxiosPrivate";

export const checkall = async()  => {

    try {
        // const response = await axiosPrivate.get('/users', {
        //     signal: controller.signal
        // });

        const data = await api.check();

       // return data;
         console.log('Check All:', data)
       
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to Check',error);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}



export const checkauthorize = () => async(dispatch) => {

   try {
       const { data } = await api.checkauth();
       ///const { data } = await api.check();
       console.log('Check Autorize : ',data)
       if(data.status === 200){
        dispatch({ type: REFRESHAUTH, payload: data.data })
       // dispatch({ type: AUTHADMIN, payload: data })
       }
    } catch (error) {
        console.log('error getAuth ALL:',error.response)
        // if(error.response.data.status === 403){
        //     window.location.href = '/login'
       // }
       // window.location.href = '/login'
       // dispatch({ type: AUTHERRORADMIN, payload: error.response.data })
    }
}

export const checkauthstudent = () => async(dispatch) => {

    try {
        const { data } = await api.checkauthstudent();
        console.log('Check Autorize Student: ',data)
        if(data.status === 200){
         dispatch({ type: AUTHADMIN, payload: data })
        }
     } catch (error) {
         console.log('error getAuth Student:',error.response)
     }
 }

 export const checkauthstaff = () => async(dispatch) => {

    try {
        const { data } = await api.checkauthstaff();
        console.log('Check Autorize Student: ',data)
        if(data.status === 200){
         dispatch({ type: AUTHADMIN, payload: data })
        }
     } catch (error) {
         console.log('error getAuth Student:',error.response)
     }
 }



export const login = async(account)  => {

    try {
        const { data } = await api.login(account);

        return data;
       // console.log('User LOGIN DATA:', data)
       
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to register',error);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}

// export const login = (account) => async(dispatch) => {

//     try {
//         console.log('acc:',account);
//         const { data } = await api.login(account);
//         //console.log('all Users:', users)
//         console.log('Response:', data)
//         if(data.status === 200){
//             console.log('sucess: ',data.data);
//             dispatch({ type: SUCCESSLOGIN, payload: data.data })
//         }else if(data.status === 400){
//             console.log('error: ',data.errors);
//             dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
//         }else if(data.status === 401){
//             console.log('error: ',data.errors);
//             dispatch({ type: AUTHERROR, payload: data.errors })
//         }
//        // dispatch({ type: INSERT, payload: data })

//     } catch (error) {
//         console.log('error to register',error);
//        // dispatch({ type: ERR, payload: error.response.data })
//     }
// }


export const insert = (users) => async(dispatch) => {

    try {

        const { data } = await api.insert(users);
        //console.log('all Users:', users)
       // console.log('Response:', data)
        if(data.status === 200){
            //console.log('sucess: ',data.data);
            dispatch({ type: SUCCESSLOGIN, payload: data.data })
        }else if(data.status === 400){
           // console.log('error: ',data.errors);
            dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to register',error);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}


export const logout = () => async(dispatch) => {

    try {
        console.log('logut niii');
        const { data } = await api.logout();
        //console.log('all Users:', users)
        console.log('Response Logout:', data)
        if(data.status === 200){
            console.log('sucess logout: ',data.data);
            dispatch({ type: LOGOUT, payload: data.data })
        }else{
            console.log('error to logout ');
          //  dispatch({ type: ERROR, payload: data.errors })
        }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to logout',error);
       // dispatch({ type: ERR, payload: error.response.data })
    }

}