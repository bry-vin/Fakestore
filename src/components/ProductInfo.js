import { useParams } from "react-router-dom";

function ProductInfo (){

    const {id} = useParams();
    
    
    return(
        <div>Product Info</div>
    );

}

export default ProductInfo;