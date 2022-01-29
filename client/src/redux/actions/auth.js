//import { LOGINSUCCESS, LOGINERROR, LOGOUT } from '../constant';
import { SUCCESSLOGIN, VALIDATE_INPUT_ERROR, AUTHLOGIN, AUTHERROR, LOGOUT } from '../constant';
import * as api from '../api/auth';



export const checkauthorize = () => async(dispatch) => {

   try {
       const { data } = await api.checkauth();
       console.log('Check Autorize: ',data)
       if(data.status === 200){
        dispatch({ type: AUTHLOGIN, payload: data })
       }
      // dispatch({ type: FETCH_ALL, payload: data })
    

    } catch (error) {
        console.log('error getAuth:',error.response)
        dispatch({ type: AUTHERROR, payload: error.response.data })
    }
}

export const login = (account) => async(dispatch) => {

    try {
        console.log('acc:',account);
        const { data } = await api.login(account);
        //console.log('all Users:', users)
        console.log('Response:', data)
        if(data.status === 200){
            console.log('sucess: ',data.data);
            dispatch({ type: SUCCESSLOGIN, payload: data.data })
        }else if(data.status === 400){
            console.log('error: ',data.errors);
            dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        }else if(data.status === 401){
            console.log('error: ',data.errors);
            dispatch({ type: AUTHERROR, payload: data.errors })
        }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to register',error);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}


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