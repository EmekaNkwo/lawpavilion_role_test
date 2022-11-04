import { IProduct } from "../../models";
import Product from "./Product";

import "./products.scss";

interface IProps {
  products: IProduct[];
}

const Products = ({ products }: IProps) => {
  return (
    <div className="productsContainer">
      {products?.map((p) => (
        <Product product={p} key={p.sku} />
      ))}
    </div>
  );
};

export default Products;
