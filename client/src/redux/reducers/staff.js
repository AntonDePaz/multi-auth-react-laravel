import {GETSTAFF ,VALIDATE_INPUT_ERROR ,CLEAR } from '../constant'
import { toast } from 'react-toastify';
const initState = {
    items: [],
    errors: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (staff = initState, action) => {
    switch (action.type) {
        
        case GETSTAFF:
            return {
               // items: [...users.items, action.payload],
                items: action.payload,
                errors: [],
            }
            // case UPDATE:
            //     // return guestsx.map((guest) => (guest._id === action.payload._id ? action.payload : guest));
            //     return {
            //         error: [],
            //         items: guestsx.items.map((guest) => (guest._id === action.payload._id ? action.payload : guest))
            //     }
            // case DELETE:
            //     //  return  guestsx.filter((guest) => guest._id !== action.payload  );

            //     return {
            //         error: [],
            //         items: guestsx.items.filter((guest) => guest._id !== action.payload)
            //     }
        //     case AUTHLOGIN :
        //         return {
        //             items: action.payload,
        //             errors: [],
        //             isAuth : true
        //         }
      
        // case LOGOUT : 
        //      localStorage.clear();
        //     return {
        //         items: [],
        //         errors: [],
        //         isAuth : false
        //     }
            
        case VALIDATE_INPUT_ERROR:
           console.log('aa:',action.payload)
            toast.error('Field Error',action.payload);
                return {
                    items: [],
                    errors: action.payload,
                }
        case CLEAR:
                    return {
                        items: [],
                        errors: [],
                    }
        // case AUTHERROR:
        //     return {
        //         items: [],
        //         errors: action.payload,
        //         isAuth : false
        //     }
        default:
            return staff;

    }
}