import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom'
import { getStaff } from '../../redux/actions/staff';
import AdminRoute from '../../routes/path/AdminRoute';

import { Footer } from './Footer';
import { Header } from './Header';
import Addstudent from './modal/Addstudent';
import { SideBar } from './SideBar';



const Main = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getStaff());
    },[]);


    return (
        <div class="wrapper">
     {/* student modal */}
        <Addstudent/>
    {/* end student modal */}
           <SideBar/>
               <div class="main-panel">
                        <Header/>
                        <Switch>
                            {
                                AdminRoute.map((route, idx) => {
                                  
                                    return (
                                        route.component && (
                                        <Route
                                            key={idx}
                                            path={route.path}
                                            exact = {route.exact}
                                            name={route.name}
                                            render={(props)=> (
                                                <route.component {...props} />
                                            )}

                                        />
                                        )
                                    )
                                })
                            }
                        </Switch>
                    
                        <Footer/>
                 </div>
        </div>
    )
}


export default Main;
