import React, { useEffect, useState } from "react";
import '../styles/products.css';
import { useLocation } from "react-router-dom";

const Products = () => {
  const location = useLocation()
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchUserData = () => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
        setLoading(false);
      });
  };
  useEffect(() => {
    setLoading(true);
    fetchUserData();
  }, []);

  return (
    <div>
      {!loading && products.length > 0 ? (
        <div className={`product-main ${location.pathname === '/' || location.pathname === '/home' ? '' : 'mr-top'}`}>
          {products.map((product) => (
            <div className="product-card">
              <div className="product-off">
            <p>
              {product.discountPercentage.toFixed()} % Off
            </p>
        </div>
        <div className="product-img">
            <img src={product.images[0]} alt="images" />
        </div>
        <h2 className="product-title">{product.title}</h2>
        <p className="product-description">{product.description}</p>
        <div className="product-info">
          <span className="product-price">₹{product.price.toFixed(2)}</span>
          <span className="product-rating">Rating: {product.rating}</span>
        </div>
            </div>
            
          ))}
        </div>
      ) : (
        <>
          <img className="loading-img" src="https://assets.website-files.com/632496634e5210c242d6d6c0/635ae35b469f1361f690d577_loading.gif" alt='img' />
        </>
      )}
    </div>
  );
};

export default Products;
