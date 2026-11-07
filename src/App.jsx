
import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Shop from './pages/Shop';
import Login from './pages/Login';
import Register from './pages/Register';
import Wallet from './pages/Wallet';
import Orders from './pages/Orders';
import Admin from './pages/Admin';
import ProductDetail from './pages/ProductDetail';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Snowfall from './components/Snowfall';

export default function App() {
  return (
    <div className="app-shell">
      <Snowfall />

      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
