// Install Bootstrap and React Router by running: npm install bootstrap react-router-dom
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbo from './Jumbo';
import Cart from './pages/Cart';
import ProductDescription from './pages/ProductDescription';
import NavBar from './pages/Navbar';
import LandingPage from './pages/LandingPage';
import Footer from './pages/Footer';

const ProductListingPage = () => {
  const [searchTerms, setSearchTerms] = useState({
    global: '',
    electronics: '',
    groceries: '',
    apparel: '',
    accessories: '',
  });

  const [products] = useState([
    { id: 1, name: 'Laptop', category: 'Electronics', price: 800 },
    { id: 2, name: 'Smartphone', category: 'Electronics', price: 400 },
    { id: 3, name: 'TV', category: 'Electronics', price: 600 },
    { id: 4, name: 'Rice', category: 'Groceries', price: 20 },
    { id: 5, name: 'Milk', category: 'Groceries', price: 3 },
    { id: 6, name: 'Bread', category: 'Groceries', price: 2 },
    { id: 7, name: 'Running Shoes', category: 'Apparel', price: 50 },
    { id: 8, name: 'T-shirt', category: 'Apparel', price: 15 },
    { id: 9, name: 'Backpack', category: 'Accessories', price: 30 },
  ]);

  const handleSearchChange = (value, category) => {
    setSearchTerms((prevSearchTerms) => ({ ...prevSearchTerms, [category]: value }));
  };

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Jumbo" element={<Jumbo />} />
          <Route
            path="/"
            element={<LandingPage onSearchChange={handleSearchChange} />}
          />
          <Route path="/Cart" element={<Cart />} />
          <Route
            path="/electronics"
            element={<CategoryPage products={products} category="Electronics" searchTerm={searchTerms.electronics} onSearchChange={(value) => handleSearchChange(value, 'electronics')} />}
          />
          <Route
            path="/groceries"
            element={<CategoryPage products={products} category="Groceries" searchTerm={searchTerms.groceries} onSearchChange={(value) => handleSearchChange(value, 'groceries')} />}
          />
          <Route
            path="/apparel"
            element={<CategoryPage products={products} category="Apparel" searchTerm={searchTerms.apparel} onSearchChange={(value) => handleSearchChange(value, 'apparel')} />}
          />
          <Route
            path="/accessories"
            element={<CategoryPage products={products} category="Accessories" searchTerm={searchTerms.accessories} onSearchChange={(value) => handleSearchChange(value, 'accessories')} />}
          />
          <Route
            path="/product/:productId"
            element={<ProductDescription products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

const customContainerStyle = {
  maxWidth: '800px',
  marginRight: 'auto',
  marginLeft: 'auto',
};


const CategoryPage = ({ products, category, searchTerm, onSearchChange }) => {
  const filteredProducts = products.filter(
    (product) =>
      product.category === category &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
    <NavBar/>
    <div  style={customContainerStyle} >
      <h3>{category} Products</h3>
      {/* Category-specific Search Bar */}
      <input
        type="text"
        placeholder={`Search ${category}...`}
        value={searchTerm}
        onChange={(event) => onSearchChange(event.target.value)}
        className="form-control mb-3"
      />
      <div style={customContainerStyle} className="row mt-3">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
          <Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>

            <div className="card">
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt={product.name}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <p className="card-text">Category: {product.category}</p>
                <button className="btn btn-primary">Add to Cart</button>
              </div>
            </div>
            </Link>
          </div>
          
        ))}
      </div>
    </div>
    <Footer/>
    </div>

  );
};

export default ProductListingPage;
