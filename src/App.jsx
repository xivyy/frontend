import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { fetchProducts } from './services/api';

function App() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts()
      .then((data) => setProducts(data))
      .catch((err) => console.error('Błąd podczas ładowania produktów:', err));
  }, []);

  return (
    <div className="App">
      <Header />
      <Cart />
      <ProductList products={products} />
    </div>
  );
}

export default App;