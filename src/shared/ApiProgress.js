import {useEffect, useState} from 'react';
import axios from "axios";

export const useApiProgress = (apiPath) => {
    const [pendingApiCall, setPendingApiCall] = useState(false);

    useEffect(() => {
        let requestInterceptor, responseInterceptor ;

        const updateApiCallFor = (url, inProgress) => {
            if (url === apiPath) {
                setPendingApiCall(inProgress);
            }
        }
        const registerInterceptor = () => {
            requestInterceptor = axios.interceptors.request.use((request) => {
                console.log('running request interceptor', apiPath);
                updateApiCallFor(request.url, true);
                return request;
            });
            responseInterceptor = axios.interceptors.response.use((response) => {
                updateApiCallFor(response.config.url, false);
                return response;
            }, (error) => {
                updateApiCallFor(error.config.url, false);
                throw error;
            });
        };

        const unregisterInterceptor = () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
        registerInterceptor();

        return function unmount(){
            unregisterInterceptor();
        }
    });

    return pendingApiCall;
}



