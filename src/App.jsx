import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartProvider from "./context/CartContext";
import { UserProvider } from "./context/UserContext";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetail from "./compunent/ProductDetail";
import DetailPage from "./pages/DetailPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/detail/:code" element={<DetailPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="/*" element={<LoginPage />} />
        </Routes>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
