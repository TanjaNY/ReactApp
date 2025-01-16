import React from 'react';

const Header = ({ isLoading, imageUrl, onImageError }) => (
  <header className="App-header">
    <h1>Welcome to My Shop</h1>
    {isLoading ? (
      <p>Loading...</p>
    ) : (
      <img
        src={imageUrl}
        alt="Sample"
        onError={onImageError}
      />
    )}
    <p>
      Edit <code>src/App.js</code> and save to reload.
    </p>
  </header>
);

export default Header;
