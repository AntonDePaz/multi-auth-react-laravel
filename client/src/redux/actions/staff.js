//import { LOGINSUCCESS, LOGINERROR, LOGOUT } from '../constant';
import {GETSTAFF ,VALIDATE_INPUT_ERROR ,CLEAR } from '../constant';
import * as api from '../api/staff';




// export const insert = (staff) => async(dispatch) => {

//     try {
//         console.log(staff);
//         const { data } = await api.insert(staff);
//         //console.log('all Users:', users)
//          console.log('Response Staff:', data)
//         if(data.status === 200){
//             //console.log('sucess: ',data.data);
//            dispatch({ type: ADDSTAFF, payload: data.message })
//         }else if(data.status === 400){
//            // console.log('error: ',data.errors);
//            dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
//         }
//        // dispatch({ type: INSERT, payload: data })

//     } catch (error) {
//         console.log('error to Insert Staff: ',error.response);
//        // dispatch({ type: ERR, payload: error.response.data })
//     }
// }

export const getStaff = () => async(dispatch) => {

    try {
        //console.log(staff);
        const { data } = await api.getstaff();
        //console.log('all Users:', users)
        // console.log('Response Staff:', data)
        if(data.status === 200){
            //console.log('sucess: ',data.data);
           dispatch({ type: GETSTAFF, payload: data.staff })
        }
        // else if(data.status === 400){
        //    // console.log('error: ',data.errors);
        //    dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        // }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to Insert Staff: ',error.response);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}


export const insertStaff = async(staff) => {

    try {
        const { data } = await api.insert(staff);

        return data;
        //console.log('all Users:', users)
        // console.log('Response Staff:', data)
        // if(data.status === 200){
        //     //console.log('sucess: ',data.data);
        //    //dispatch({ type: ADDSTAFF, payload: data.message })
        // }else if(data.status === 400){
        //    // console.log('error: ',data.errors);
        //   // dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        // }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to Insert Staff: ',error.response);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}
export const updateStaff = async(staff , id) => {

    try {
       // console.log('staff edit:',staff);
       // console.log('staff id:',id);
        const { data } = await api.update(staff, id);

         return data;
        //console.log('all Users:', users)
        // console.log('Response Staff:', data)
        // if(data.status === 200){
        //     //console.log('sucess: ',data.data);
        //    //dispatch({ type: ADDSTAFF, payload: data.message })
        // }else if(data.status === 400){
        //    // console.log('error: ',data.errors);
        //   // dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        // }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to Insert Staff: ',error.response);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}
export const deleteStaff = async(id) => {

    try {
        const { data } = await api.delet(id);
         return data;
    } catch (error) {
        console.log('error to Delete Staff: ',error.response);
    }
}

 //export const clear = () => async() => {
export const clear = async() => {

    console.log('clear:');
    const res = 'suceess clear'
    return res;
    // dispatch({ type: CLEAR })

}


// export const logout = () => async(dispatch) => {

//     try {
//         console.log('logut niii');
//         const { data } = await api.logout();
//         //console.log('all Users:', users)
//         console.log('Response Logout:', data)
//         if(data.status === 200){
//             console.log('sucess logout: ',data.data);
//             dispatch({ type: LOGOUT, payload: data.data })
//         }else{
//             console.log('error to logout ');
//           //  dispatch({ type: ERROR, payload: data.errors })
//         }
//        // dispatch({ type: INSERT, payload: data })

//     } catch (error) {
//         console.log('error to logout',error);
//        // dispatch({ type: ERR, payload: error.response.data })
//     }

// }