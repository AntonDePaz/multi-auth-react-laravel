import {GETCOURSE, DELETESTUDENT, GETSTUDENTS,SUCCESSINSERTSTUDENT ,ERRORINSERTSTUDENT,SUCCESSUPDATESTUDENT } from '../constant'

const initState = {
    course: [],
    students:[],
    errors: [],
}

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initState, action) => {
    switch (action.type) {
        
        case GETCOURSE:
            return {
               // items: [...users.items, action.payload],
              //  items: [...items , action.payload  ]
                course: action.payload,
               // items: [...state.items, action.payload],
               students: state.students,
                errors: [],
            }
        case GETSTUDENTS:
            return {
               // items: [...state.items, action.payload],
                students: action.payload,
                course : state.course,
                errors: [],
            }
        case SUCCESSINSERTSTUDENT:
            return {
                students: [...state.students, action.payload],
                course : state.course,
                errors: [],
            }
        case SUCCESSUPDATESTUDENT:
            return {
               // students: [...state.students, action.payload],
               students: state.students.map((item) => (item.id === action.payload.id ? action.payload : item)),
                course : state.course,
                errors: [],
            } 
        case DELETESTUDENT:
            return{
                students: state.students.filter((item) => item.user_id !== action.id),
                course : state.course,
                errors: [],
            }
         case ERRORINSERTSTUDENT:
            return {
                students: state.students,
                course : state.course,
                errors: action.payload,
            }  
        default:
            return state;

    }
}