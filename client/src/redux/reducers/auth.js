import { SUCCESSLOGIN , AUTHERROR ,LOGOUT,AUTHADMIN ,VALIDATE_INPUT_ERROR,REFRESHAUTH } from '../constant'

const initState = {
    users: [],
    errors: [],
    isAuthAdmin: false,
    isAuthStudent: false,
    role : null,
    // isAuthStudent : false,
     isAuthStaff : false,
 //role : []
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        
        case SUCCESSLOGIN:
         
                localStorage.setItem('authtoken', action?.payload.token);
                localStorage.setItem('authname', action?.payload.firstname+' '+action?.payload.lastname);
                localStorage.setItem('authtype', action.payload.role);
        
            return {
               // items: [...users.items, action.payload],
                users: action.payload,
                errors: [],
              //  isAuthStudent : action.payload.role === 0 ? true : false,
               // isAuthStaff : action.payload.role === 2 ? true : false,
               // isAuthAdmin : action.payload.role === 3 ? true : false,
                role : action.payload.role,
               
               // role : action.payload.role
            }
        case REFRESHAUTH:
         
                localStorage.setItem('authtoken', action?.payload.token);
                localStorage.setItem('authname', action?.payload.firstname+' '+action?.payload.lastname);
                localStorage.setItem('authtype', action.payload.role);
        
            return {
               // items: [...users.items, action.payload],
                users: action.payload,
                errors: [],
                // isAuthStudent : action.payload.role === 0 ? true : false,
                // isAuthStaff : action.payload.role === 2 ? true : false,
                // isAuthAdmin : action.payload.role === 3 ? true : false,
                role : action.payload.role,
               
               // role : action.payload.role
            }
        case AUTHADMIN :
            //    localStorage.setItem('authrole', action?.payload.role);
                return {
                    users: action.payload,
                    errors: [],
                   // isAuthStudent : action.payload.role === 0 ? true : false,
                  // isAuthStaff : action.payload.role === 2 ? true : false,
                   //isAuthAdmin : action.payload.role === 3 ? true : false,
                    role : action.payload.role,
                   // role : users.role
                }
      
        case LOGOUT : 
             localStorage.clear();
            return {
                users: [],
                errors: [],
                isAuthAdmin: false,
                isAuthStudent : false,
                isAuthStaff : false,
                role : 404
            }
            
        // case VALIDATE_INPUT_ERROR:
        //         return {
        //             items: [],
        //             errors: action.payload,
        //             isAuthAdmin : users.isAuthAdmin
        //         }
        // case AUTHERROR:
        //     return {
        //         items: [],
        //         errors: action.payload,
        //         isAuthAdmin : false
        //     }
        default:
            return state;

    }
}