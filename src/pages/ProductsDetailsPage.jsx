import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ProductsDetailsPage = () => {

  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`).then((resp) => {
      setProduct(resp.data);
    })
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <h1>Dettaglio Prodotto</h1>
        </div>
       <div className="col-6">
          <div className="card">
            <div className="card-header">{product.title}</div>
            <div className="card-body">
              <img src={product.image} alt={product.title} />
              <p>{product.category}</p>
              <p>{product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsDetailsPage
