import {configureStore} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import {productsApi} from "./apis/productsApi";


export const store = configureStore({
    reducer: {
        [productsApi.reducerPath] : productsApi.reducer
    },
    middleware : (getDefaultMiddleware) =>{
            return getDefaultMiddleware()
                .concat(productsApi.middleware)
    }
});

setupListeners(store.dispatch);

export {useFetchProductsQuery, useFetchProductQuery} from "./apis/productsApi";