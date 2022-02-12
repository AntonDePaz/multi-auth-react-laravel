import axios from '../api/axios';
import {useState} from 'react'

import { useDispatch, useSelector } from 'react-redux';


const useRefreshToken = () => {

    const authx = useSelector((state) => state.auth);
    const [ auth, setAuth ] = useState();


   // const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await axios.get('/auth/checkAuth');

        console.log('RES REFRSH:',response);
        // setAuth(prev => {
        //     console.log(JSON.stringify(prev));
        //     console.log(response.data.accessToken);
        //     return { ...prev, accessToken: response.data.accessToken }
        // });
        return response.data.token;
    }
    return refresh;
};

export default useRefreshToken;
