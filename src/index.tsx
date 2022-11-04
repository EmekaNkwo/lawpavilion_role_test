import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import { ProductsProvider } from "./contexts/productContext/ProductProvider";
import { CartProvider } from "./contexts/cartContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <ProductsProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ProductsProvider>
  </React.StrictMode>
);
