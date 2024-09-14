import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
      });
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product, index) => {
          return (
            <div className="card col-3" key={`${product.name}-${index}`}>
              <img src={product.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
