import {ADDSTAFF, DELETESTAFF, EDITSTAFF, GETSTAFF } from '../constant'

const initState = {
    staffs: [],
    errors: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        
        case GETSTAFF:
            return {
               // items: [...users.items, action.payload],
               staffs: action.payload,
                errors: [],
            }
        case ADDSTAFF:
            return {
                staffs: [...state.staffs, action.payload],
                errors: [],
            }
        case EDITSTAFF:
            return {
                staffs: state.staffs.map((item) => (item.id === action.payload.id ? action.payload : item)),
                errors: [],
            }
      case DELETESTAFF:
                return{
                    staffs: state.staffs.filter((item) => item.user_id !== action.id),
                    errors: [],
                }
        default:
            return state;

    }
}