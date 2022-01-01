import {useEffect, useState} from 'react';
import axios from "axios";

export const useApiProgress = (apiMethod, apiPath) => {
    const [pendingApiCall, setPendingApiCall] = useState(false);

    useEffect(() => {
        let requestInterceptor, responseInterceptor;

        const updateApiCallFor = (method, url, inProgress) => {
            if (url.startsWith(apiPath) && method === apiMethod) {
                setPendingApiCall(inProgress);
            }
        };
        const registerInterceptor = () => {
            requestInterceptor = axios.interceptors.request.use((request) => {
                const {url, method} = request;
                updateApiCallFor(method, url, true);
                return request;
            });
            responseInterceptor = axios.interceptors.response.use(
                (response) => {
                    const {url, method} = response.config;
                    updateApiCallFor(method, url, false);
                    return response;
                }, (error) => {
                    const {url, method} = error.config;
                    updateApiCallFor(method, url, false);
                    throw error;
                });
        };

        const unregisterInterceptor = () => {
            axios.interceptors.request.eject(requestInterceptor);
            axios.interceptors.response.eject(responseInterceptor);
        };
        registerInterceptor();

        return function unmount() {
            unregisterInterceptor();
        }
    }, [apiPath, apiMethod]);

    return pendingApiCall;
}



