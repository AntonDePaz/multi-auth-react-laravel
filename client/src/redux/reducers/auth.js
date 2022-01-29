import { SUCCESSLOGIN , AUTHERROR ,LOGOUT,AUTHLOGIN ,VALIDATE_INPUT_ERROR } from '../constant'

const initState = {
    items: [],
    errors: [],
    isAuth: false
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (users = initState, action) => {
    switch (action.type) {
        
        case SUCCESSLOGIN:
           localStorage.setItem('authtoken', action?.payload.token);
           localStorage.setItem('authname', action?.payload.firstname+' '+action?.payload.lastname);
            return {
               // items: [...users.items, action.payload],
                items: action.payload,
                errors: [],
                isAuth : true
            }
            case AUTHLOGIN :
                return {
                    items: action.payload,
                    errors: [],
                    isAuth : true
                }
      
        case LOGOUT : 
             localStorage.clear();
            return {
                items: [],
                errors: [],
                isAuth : false
            }
            
        case VALIDATE_INPUT_ERROR:
                return {
                    items: [],
                    errors: action.payload,
                }
        case AUTHERROR:
            return {
                items: [],
                errors: action.payload,
                isAuth : false
            }
        default:
            return users;

    }
}