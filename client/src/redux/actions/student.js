//import { LOGINSUCCESS, LOGINERROR, LOGOUT } from '../constant';
import {GETCOURSE, GETSTUDENTS , SUCCESSINSERTSTUDENT ,ERRORINSERTSTUDENT } from '../constant';
import * as api from '../api/student';
import { useDispatch } from 'react-redux';




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

export const getCourse = () =>  async(dispatch) => {

    try {
        //console.log(staff);
        const { data } = await api.getcourse();
        //console.log('all Users:', users)
       // console.log('Response Course:', data)
        if(data.status === 200){
            console.log('COURSE ACTIONS: ',data);
          dispatch({ type: GETCOURSE, payload: data.course })
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

// export const getCourses = async () => {

//     try {
//         //console.log(staff);
//         const { data } = await api.getcourse();
//         //console.log('all Users:', users)
//         console.log('Response Course:', data)
//         if(data.status === 200){
//             //console.log('sucess: ',data.data);
//             return data;
//          // dispatch({ type: GETCOURSE, payload: data.course })
//         }
//         // else if(data.status === 400){
//         //    // console.log('error: ',data.errors);
//         //    dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
//         // }
//        // dispatch({ type: INSERT, payload: data })

//     } catch (error) {
//         console.log('error to Insert Staff: ',error.response);
//        // dispatch({ type: ERR, payload: error.response.data })
//     }
// }


 export const getStudents = () =>  async(dispatch) => {

    try {
        //console.log(staff);
        const { data } = await api.getstudents();
        //console.log('all Users:', users)
       // console.log('Response Students:', data)
        if(data.status === 200){
          console.log('STUDENTS ACTIONS: ',data);
          dispatch({ type: GETSTUDENTS, payload: data.students })
        }
        // else if(data.status === 400){
        //    // console.log('error: ',data.errors);
        //    dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
        // }
       // dispatch({ type: INSERT, payload: data })

    } catch (error) {
        console.log('error to GEt Students: ',error.response);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}



export const insertStudent =  async(student) =>  {
   
    try {
        const { data } = await api.insert(student);

      
     ////  if(data.status === 200){
      //  console.log('GODD');
        return data;
       //  dispatch({ type: SUCCESSINSERTSTUDENT, payload:data.response })
     //  }else if(data.status === 400){
      //  console.log('BAD');
      //  return data;
        // dispatch({ type: ERRORINSERTSTUDENT, payload:data.errors })
      // }

       // console.log('data st:',data)

    } catch (error) {
        console.log('error to Insert Student: ',error.response);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}




export const updateStudent =  async(student, id) =>  {
   
    try {
        const { data } = await api.update(student,id);
         return data;

    //    if(data.status === 200){
    //     console.log('GODD');
    //     return data;
    //    //  dispatch({ type: SUCCESSINSERTSTUDENT, payload:data.response })
    //    }else if(data.status === 400){
    //     console.log('BAD');
    //     return data;
    //     // dispatch({ type: ERRORINSERTSTUDENT, payload:data.errors })
    //    }

       // console.log('data st:',data)

    } catch (error) {
        console.log('error to Insert Student: ',error.response);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}



// export const updateStaff = async(staff , id) => {

//     try {
//        // console.log('staff edit:',staff);
//        // console.log('staff id:',id);
//         const { data } = await api.update(staff, id);

//          return data;
//         //console.log('all Users:', users)
//         // console.log('Response Staff:', data)
//         // if(data.status === 200){
//         //     //console.log('sucess: ',data.data);
//         //    //dispatch({ type: ADDSTAFF, payload: data.message })
//         // }else if(data.status === 400){
//         //    // console.log('error: ',data.errors);
//         //   // dispatch({ type: VALIDATE_INPUT_ERROR, payload: data.errors })
//         // }
//        // dispatch({ type: INSERT, payload: data })

//     } catch (error) {
//         console.log('error to Insert Staff: ',error.response);
//        // dispatch({ type: ERR, payload: error.response.data })
//     }
// }
export const delStudent = async(id) => {

    try {
        const { data } = await api.deletestudent(id);
         return data;
    } catch (error) {
        console.log('error to Delete Student: ',error.response);
    }
}



export const uploadCsv =  async(csvData) =>  {
   
    try {
        const  data  = await api.upladcsv(csvData);

      
     ////  if(data.status === 200){
        console.log('import DATA:',data);
        return data;
       //  dispatch({ type: SUCCESSINSERTSTUDENT, payload:data.response })
     //  }else if(data.status === 400){
      //  console.log('BAD');
      //  return data;
        // dispatch({ type: ERRORINSERTSTUDENT, payload:data.errors })
      // }

       // console.log('data st:',data)

    } catch (error) {
        console.log('error to Import Student: ',error.response);
       // dispatch({ type: ERR, payload: error.response.data })
    }
}


