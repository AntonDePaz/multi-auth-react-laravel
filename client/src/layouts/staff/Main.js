import React from 'react'
import { Route, Routes,Outlet } from 'react-router-dom'
import StaffRoute from '../../routes/path/StaffRoute';

import Home from "../../components/staff/Dashboard";
import Homes from "../../components/staff/Home2";

import { Footer } from './Footer';
import { Header } from './Header';
import { SideBar } from './SideBar';



const Dashboard = () => {
    return (
        <div class="wrapper">
           <SideBar/>
               <div class="main-panel">
                        <Header/>
                            <Outlet/>
                        <Footer/>
                 </div>
        </div>
    )
}


export default Dashboard;
