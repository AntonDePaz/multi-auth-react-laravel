import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import './App.css';


import GuestRoute from './routes/GuestRoute';
import AdminRoute from './routes/AdminRoute';
import StudentRoute from './routes/StudentRoute';
import Login from './components/admin/Login';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <ToastContainer/>
        <Router>
            <Switch>
                  {/* Note: put last line the path='/' */}
                  {/* <Route exact path='/admin/login' component={Login} /> */}
                 <AdminRoute path='/admin' name="Admin"  />
                 <GuestRoute path='/guest' name="Guest"  />
                 <StudentRoute path='/' name="Student"  />

               
            </Switch>
        </Router>
    </div>
  );
}

export default App;
