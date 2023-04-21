import { useParams } from "react-router-dom";
import {useFetchProductQuery} from "../store"
import ReactLoading from 'react-loading';

function ProductInfo (){

    const {id} = useParams();
    
    const {data,isFetching, error} = useFetchProductQuery(id);
    
    let content;
    if(isFetching){
        content = <ReactLoading  type="spin" color="#0000FF"/>
    }else if(error){
        content = <div>Error fetching products data</div>
    }else{
        content = <div className="ui grid container">
                <div className="ui placeholder segment">
                <div className="ui two column stackable center aligned grid">
                    <div className="ui vertical divider"></div>
                    <div className="middle aligned row">
                        <div className="column lp">
                            <img className="ui fluid image" src={data.image} alt={data.title}/>
                        </div>
                        <div className="column rp"> 
                            <h1>{data.title}</h1>
                            <h2>
                                <div className="ui teal tag label">${data.price}</div>
                            </h2>
                            <h3 className="ui brown block header">{data.category}</h3>
                            <p>{data.description}</p>
                            <div className="ui vertical animated button" tabIndex="0">
                                <div className="hidden content">
                                    <i className="shop icon"></i>
                                </div>
                                <div className="visible content">Add to Cart</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
    

    

    return(
        <div>
            {content}
        </div>
        
    );

}

export default ProductInfo;