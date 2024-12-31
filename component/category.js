import React, { useEffect, useState } from "react";
import '../styles/category.css';

const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);
  return (
    <>
    <h1>Shop by Categories!</h1>
      {category.length > 0 ? (
          <div className="cat-main">
          {category.map((cat) => (
        <div className="cat-card">
              <div className="cat-title">{cat.name}</div>
        </div>
            ))}
    </div>
      ) : (
          <>
          <p>Loading..!</p>
        </>
      )}
      </>
  );
};

export default Category;
