import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import { Navbar } from "./components";
import { Cart, ProductDetail, WomenProducts } from "./pages";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<WomenProducts />} />
          <Route path="product/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
