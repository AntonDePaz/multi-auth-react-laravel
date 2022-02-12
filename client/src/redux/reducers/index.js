import { combineReducers } from 'redux';

import staffs from './staff';
import auth from './auth';
import students from './student';
//import course from './course';
//import error from './error'

export const reducers = combineReducers({ auth: auth , staffs , students  });