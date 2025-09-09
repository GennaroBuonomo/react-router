import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import { Link } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then((resp) => {
      setProducts(resp.data)
    });
  }, []);

  return (
    <>
    <Header />
    <div className="container py-4">
       <div className="row g-4">
         <div className="col-12">
           <h1 className="text-center mb-4">Pagina Prodotti</h1>
         </div>
         {products.map(product => {
           return (
             <div className="col-md-4" key={product.id}>
               <div className="card mt-4">
                 <div className="card-header">
                   <h5 className="card-title">{product.title}</h5>
                   <div className="card-body">
                     <div className="card h-100">
                      <img src={product.image} alt={product.title} className="card-img" />
                     </div>
                     <p className="mt-3">- {product.category}</p>
                     <p className="fw-bold"><em>{product.price}&euro;</em></p>
                     <p>{product.description}</p>
                   </div>
                  <div className="d-flex justify-content-center ">
                    <Link to={`/products/${product.id}`}>Dettaglio</Link>
                  </div>
                 </div>
               </div>
             </div>
          )
        })}
      </div>
    </div>
    </>
  )
}

export default ProductsPage
