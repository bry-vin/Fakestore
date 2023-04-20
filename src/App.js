import {Routes, Route} from "react-router-dom";
import ProductList from "./components/ProductList";
import Header from "./components/Header";
import ProductInfo from "./components/ProductInfo";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="ui divider" />     
        <Routes>    
          <Route path= "/" element = {<ProductList />}/>
          <Route path="/product/:id" element =<ProductInfo />/>
        </Routes> 
    </div>
  
  );
}

export default App;
