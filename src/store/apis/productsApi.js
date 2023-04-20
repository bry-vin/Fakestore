import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const productsApi = createApi({
    reducerPath : "products",
    baseQuery : fetchBaseQuery({
        baseUrl : "https://fakestoreapi.com"
    }),
    endpoints(builder){
        return {
            fetchProducts : builder.query({
                query : ()=>{
                    return {
                        url:"/products",
                        method : "GET",                      
                    }
                }
            }),
            fetchProduct : builder.query({
                query : (id) =>{
                    return{
                        url: `/products/${id}`,
                        method : "GET"
                    }
                }
            })
        }
    }
});

export const {useFetchProductsQuery, usefetchProductQuery} = productsApi;
export {productsApi};
