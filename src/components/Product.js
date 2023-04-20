import {Link} from "react-router-dom";

function Product({product}){
    return(    
        <>          
            
            <div className="three wide column">
                <Link to={`/product/${product.id}`} >             
                    <div className="ui card">
                        <div className="rounded image">
                            <img src={product.image} alt={product.title} />               
                        </div>
                        <div className="content">
                            <div className="header">{product.title}</div>
                            <div className="description">{product.description}</div>
                        </div>
                        <div className="extra content">
                            <div className="header">$ {product.price}</div>
                            <div className="meta">{product.category}</div>
                        </div>                
                    </div>
                </Link>     
            </div>
                                          
        </>
    )
}

export default Product;