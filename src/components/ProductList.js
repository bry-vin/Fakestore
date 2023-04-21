import { useFetchProductsQuery } from "../store";
import ReactLoading from 'react-loading';
import Product from "./Product";



function ProductList(){
    const {data, isFetching, error} = useFetchProductsQuery();
    console.log(data);
    
    let content;
    if(isFetching){
        content = <ReactLoading  type="spin" color="#0000FF"/>
    }else if(error){
        content = <div>Error fetching products data</div>
    }else{
        content = data.map((product)=>{
           return (             
                <Product key={product.id} product={product}/>                           
           )
        })
    }

    return( 
            <div>         
                <h1>Product List</h1>               
                    <div className="ui relaxed centered grid"> 
                        {content}                                                                                      
                </div>           
                    
            </div>
                        
          
    )
}


export default ProductList;