import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

export default function ProductDetails() {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch("http://localhost:5173/products.json")
      .then((response) => response.json())
      .then((result) => {
        setProduct(
          result.data.find((prod) => prod.id === Number(params.productId))
        );
      });
  }, []);

  function updateSizeParams(size) {
    setSearchParams({ size, color: searchParams.get("color") });
  }

  function updateColorParams(color) {
    setSearchParams({ size: searchParams.get("size"), color });
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-6">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="col-6">
          <p>{product.name}</p>
          <div className="row mb-5">
            <h6>Colors</h6>
            {["Red", "Yellow", "Green", "Blue", "White"].map((color, index) => (
              <div key={`${color}-${index}`} className="col-2">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => updateColorParams(color)}
                >
                  {color}
                </button>
              </div>
            ))}
          </div>
          <div className="row">
            <h6>Sizes</h6>
            {["S", "M", "L", "XL", "XXL"].map((size, index) => (
              <div key={`${size}-${index}`} className="col-2">
                <button
                  type="button"
                  className="btn btn-outline-success"
                  onClick={() => updateSizeParams(size)}
                >
                  {size}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
