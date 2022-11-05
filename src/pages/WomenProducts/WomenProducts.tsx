import { useEffect } from "react";
import { Loader, Products } from "../../components";
import useProducts from "../../hooks/useProducts";
import "./womenProducts.scss";
const WomenProducts = () => {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  return (
    <>
      <div className="container">
        {isFetching && <Loader />}
        <span className="categoryTitle">Women</span>
        <div className="main">
          <Products products={products} />
        </div>
      </div>
    </>
  );
};

export default WomenProducts;
