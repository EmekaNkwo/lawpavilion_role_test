import "./productDetail.scss";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import useProducts from "../../hooks/useProducts";

const ProductDetail = () => {
  const { id } = useParams();
  const { products, fetchProducts } = useProducts();

  //how to filter by id
  const product = products.find((product) => product.id === Number(id));

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div className="detailContainer">
      <div className="imgContainer">
        <div className="imageAngles">
          <img src={product?.avatar} alt={product?.title} />
          <img src={product?.avatar} alt={product?.title} />
          <img src={product?.avatar} alt={product?.title} />
        </div>
        <div className="imageMain">
          <img src={product?.avatar} alt="" />
        </div>
      </div>

      <div className="productInfo">
        <span className="productTitle">
          <b>{product?.title.split(" ")[0]}</b>
          {product?.title.split(" ").splice(1, product?.title.length).join(" ")}
        </span>
        <div className="productSizes">
          <b className="productLabels">SIZE:</b>
          <div className="selectors">
            {product?.availableSizes.map((size) => {
              return (
                <>
                  <label>
                    <input type="checkbox" />
                    <span className="checkmark">{size}</span>
                  </label>
                </>
              );
            })}
          </div>
        </div>
        <div className="productColors">
          <b className="productLabels">COLORS:</b>
          <div className="selectors">
            {product?.colors.map((color) => {
              return (
                <>
                  <label>
                    <input type="checkbox" />
                    <span
                      className="checkmark"
                      style={{ backgroundColor: `${color}` }}
                    ></span>
                  </label>
                </>
              );
            })}
          </div>
        </div>
        <div className="productPrice">
          <b className="productLabels">PRICE</b>
          <span>
            {product?.currencyFormat}
            {product?.price}
          </span>
        </div>
        <div className="cartButton">
          <button>ADD TO CART</button>
        </div>

        <span className="productdesc">
          Find stunning women's cocktail dresses and party dresses. Stand out in
          lace and metallic cocktail dresses and party dresses from all your
          favorite brands.
        </span>
      </div>
    </div>
  );
};

export default ProductDetail;
