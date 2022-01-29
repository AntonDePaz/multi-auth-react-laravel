import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Home = () => {
    
    const dispatch = useDispatch();
    const history = useHistory();
   // const [name , setName] = useState('');
    const state = useSelector((state) => state.auth);
   // const [loading, setLoading] = useState(true);

    useEffect(()=>{
        if(!localStorage.getItem('authtoken')){
           // setIsLogin(false)
           history.push('/login')
        }
        
        //setLoading(false)
    },[state])


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
