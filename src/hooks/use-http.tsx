import { useCallback, useState } from 'react';
//import { TaskCl } from '../store/ZCartContext';

export interface RequestConfigCl {
  method?: RequestInit["method"];
  url: string;//RequestInit["url"];
  headers?: HeadersInit;//RequestInit["headers"];
  body?:BodyInit;//RequestInit["body"];
}

const useHttp = (/*requestConfig:RequestConfigCl,*/ applyData: (data:any) => void) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  //const sendRequest = useCallback(async (requestConfig: RequestConfigCl, applyData: (data:TaskCl[]) => void) => {
  const sendRequest = useCallback(async (requestConfig: RequestConfigCl/*, applyData: (data:any) => void*/) => {
    setIsLoading(true);
    setError('');
    try {
      const response: Response = await fetch(
        requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : 'GET',
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });
      console.log(requestConfig);

      if (!response.ok) {
        throw new Error('Request failed!');
      }

      const data = await response.json();
      console.log(data);
      applyData(data);
    } catch (err) {
      const msg = (err as Error).message;
      setError(`Something went wrong!${msg}`);
    }
    setIsLoading(false);
  },[applyData]);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
