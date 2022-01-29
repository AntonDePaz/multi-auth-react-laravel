import React from 'react'
import { Route, Switch } from 'react-router-dom'
import GuestRoute from '../../routes/path/GuestRoute';


import { Footer } from './Footer';
import { Header } from './Header';
import { SideBar } from './SideBar';



const Main = () => {
    return (
        <div class="wrapper">
           <SideBar/>
               <div class="main-panel">
                        <Header/>
                        <Switch>
                            {
                                GuestRoute.map((route, idx) => {
                                  
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
