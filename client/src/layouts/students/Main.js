import React from 'react'
import { Route, Routes,Outlet } from 'react-router-dom'
import Students from '../../components/admin/Students';
import StudentRoute from '../../routes/path/StudentRoute';

import { Footer } from './Footer';
import { Header } from './Header';
import { SideBar } from './SideBar';



const Main = () => {    
    return (
        <div class="wrapper">
           <SideBar/>
               <div class="main-panel">
                        <Header/>
                          <Outlet />
                        <Footer/>
                 </div>
        </div>
    )
}


export default Main;
