import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import hasToken from '../../layouts/auth';
import { Backdrop, CircularProgress,CardMedia,ButtonGroup } from '@mui/material';

const Home = () => {
    
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
//    // const [name , setName] = useState('');
//     const state = useSelector((state) => state.auth);
//    const [loading, setLoading] = useState(true);

    // useEffect(()=>{
    //     if(!localStorage.getItem('authtoken')){
    //        // setIsLogin(false)
    //        history.push('/login')
    //     }
        
    //     //setLoading(false)
    // },[state])












    

    // useEffect(()=>{
    //     console.log('HOME:',state.role);
    //     if(!hasToken()){
    //         //setIsLogin(hasToken())
    //        // history.push('/login')  
    //     }else {
    //         if(state.role === 3){
    //             history.push('/admin') 
    //        }else if(state.role === 1){
    //           history.push('/guest') 
    //        }
    //     }
        
    //     setLoading(false)
    //    },[state.isAuthAdmin])

    // if(loading){
    //     return (
    //         <Backdrop 
    //                 sx={{ color : '#fff' , zIndex : (theme) => theme.zIndex.drawer + 1 }}
    //                 open={loading} >
    //                 <CircularProgress />
    //         </Backdrop>
    //     )
    // }
    


    return (
        <div className="content">
            <div className="container-fluid">
                <div className='row'>
                    <h3>Students Dashboard</h3>
                </div>
            </div>
        </div>
    )
}

export default Home;
