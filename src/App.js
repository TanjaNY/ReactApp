import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProductList from './ProductList';
import Cart from './Cart';
import './App.css';
import Header from './Header'; 

// Configuration for S3
const S3_CONFIG = {
  BUCKET_URL: 'https://your-bucket-name.s3.region.amazonaws.com',
  IMG_FOLDER: 'products',
};

// Example product data
const products = [
  {
    id: 1,
    name: "Product 1",
    price: 19.99,
    imagePath: `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMG_FOLDER}/product1.jpg`,
  },
  {
    id: 2,
    name: "Product 2",
    price: 29.99,
    imagePath: `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMG_FOLDER}/product2.jpg`,
  },
  // Add more products as needed
];

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [cart, setCart] = useState([]); // Move the cart state initialization inside the component

  // Image URL
  const imageUrl = `${S3_CONFIG.BUCKET_URL}/${S3_CONFIG.IMG_FOLDER}/sample.jpg`;

  // Error Handler for Images
  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/150';
    e.target.onerror = null;
  };

  // Add product to cart
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <Header 
        isLoading={isLoading} 
        imageUrl={imageUrl} 
        onImageError={handleImageError} 
      />
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
        </nav>
        <Routes>
          <Route 
            path="/" 
            element={<ProductList products={products} addToCart={addToCart} />} 
          />
          <Route path="/cart" element={<Cart cart={cart} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
