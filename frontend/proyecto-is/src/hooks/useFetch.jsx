import  { useEffect, useReducer, useRef } from 'react';
import { actions, initialState, reducer } from "../reducers/FetchReducer"
import { useContextReducer } from '../providers/Session.provider';

const useFetch = (url, cacheEnable) => {


   const [state, dispatch] = useReducer(reducer, initialState);

   const cache = useRef({});



   useEffect(() => {
      let cancelRequest = false;
      if (!url) return;

      const fetchData = async () => {
         dispatch({ type: actions.FETCHING });
         if (cacheEnable && cache.current[url]) {
            const data = cache.current[url];
            dispatch({ type: actions.FETCHED, payload: data });
         } else {
            try {
               const response = await fetch(url);
               const data = await response.json();
               if (cacheEnable) {
                  cache.current[url] = data;

               }
               if (cancelRequest) return;
               dispatch({ type: actions.FETCHED, payload: data });
            } catch (error) {
               if (cancelRequest) return;
               dispatch({ type: actions.FETCH_ERROR, payload: error.message });
            }
         }
      };

      fetchData();

      return function cleanup() {
         cancelRequest = true;
      };
   }, [url,cacheEnable]);

   return {state}
}

export default useFetch;
