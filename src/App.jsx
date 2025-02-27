import { Route, Routes } from "react-router-dom";
import "./App.css";
import Cart2 from "./compunent/Cart2";
import ProductDetail from "./compunent/ProductDetail";
import CartProvider from "./context/CartContext";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ShopPage from "./pages/ShopPage";

function App() {
  return (
    <>
      {/* <UserProvider> */}
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route path="/shop" element={<ShopPage />} />

          <Route path="/product/:productId" element={<ProductDetail />} />

          {/* <Route path="/cart" element={<Cart2 />} /> */}

          <Route path="/detail/:code" element={<DetailPage />} />

          <Route path="/cart" element={<CartPage />} />

          <Route path="/checkout" element={<CheckoutPage />} />

          <Route path="/login" element={<LoginPage />} />

          <Route path="/signup" element={<RegisterPage />} />

          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </CartProvider>
      {/* </UserProvider> */}
    </>
  );
}

export default App;
