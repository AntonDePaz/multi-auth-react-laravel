import { combineReducers } from 'redux';

import staff from './staff';
import auth from './auth';
//import error from './error'

export const reducers = combineReducers({ auth: auth , staff });