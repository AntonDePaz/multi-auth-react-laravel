import { axiosPrivate } from "../api/axios";
import { useEffect } from "react";
import useRefreshToken from "./useRefreshToken";
//import useAuth from "./useAuth";

import { useDispatch, useSelector } from 'react-redux';


const useAxiosPrivate = () => {
    const refresh = useRefreshToken();
    //const { auth } = useAuth();

    const auth = useSelector((state) => state.auth);

    console.log('AXIOS PRIVATEd:',auth);

    useEffect(() => {



        const requestIntercept = axiosPrivate.interceptors.request.use(
            config => {
                
                const token = localStorage.getItem('authtoken');
              console.log('Request Inter:',auth);
                if (!config.headers['Authorization']) {
                   console.log('Request Inter222:',token)
                   config.headers.Authorization = token ? `Bearer ${token}` : '';
            //  config.headers['Authorization'] = `Bearer ${token}`;
                }
              //  console.log('Config:',config)
                return config;
            }, (error) => Promise.reject(error)
        );

        const responseIntercept = axiosPrivate.interceptors.response.use(
            response => response,
            async (error) => {
                console.log('Response Inter:');
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                    console.log('Response 403:');
                   const newAccessToken = await refresh();
                   // const newAccessToken = auth?.token;
                   // prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    prevRequest.headers.Authorization = newAccessToken ? `Bearer ${newAccessToken}` : '';
                    return axiosPrivate(prevRequest);
                }else  if (error?.response?.status === 401 && !prevRequest?.sent) {
                    prevRequest.sent = true;
                  
                    console.log('Response 401:');
                   const newAccessToken = await refresh();
                   console.log('Response 401:::',newAccessToken);
                   // const newAccessToken = auth?.token;
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosPrivate(prevRequest);
                }
                return Promise.reject(error);
            }
        );

        return () => {
            axiosPrivate.interceptors.request.eject(requestIntercept);
            axiosPrivate.interceptors.response.eject(responseIntercept);
        }
    }, [auth,refresh])

    return axiosPrivate;
}

export default useAxiosPrivate;