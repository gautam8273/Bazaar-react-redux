import './App.css';
import Home from './pages/Home';
import ViewProduct from './pages/ViewProduct';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header';
import ProductPageDetails from './pages/ProductPageDetails';
import Filter from './pages/Filter';
import MyCart from './components/MyCart';
import SellerForm from './pages/SellerForm';
import WishList from './components/WishList';
import ChangePassword from './components/ChangePassword';
import CheckOut from './pages/CheckOut';
import Profile from './components/Profile';
import ProfileEdit from './components/ProfileEdit';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product-listing-pages/:Title" element={<ViewProduct />} />
          <Route path="/product-details/:name/:id" element={<ProductPageDetails />} />
          <Route path="/category/:slug/:id" element={<Filter />} />
          <Route path="/my-cart" element={<MyCart />} />
          <Route path="/seller-regestration-form" element={<SellerForm />} />
          <Route path="/profile/wishList" element={<WishList />} />
          <Route path="/profile/change-password" element={<ChangePassword />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/edit" element={<ProfileEdit />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
