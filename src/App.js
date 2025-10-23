import React from "react";
import "./App.css";

const App = () => {
  const products = [
    { id: "P001", name: "Wireless Headphones", price: "₹2,499", image: "https://static.wixstatic.com/media/6114d8_1ea5361de15e44d3b35e20f471e793e5~mv2.jpg/v1/fit/w_500,h_500,q_90/file.jpg" },
    { id: "P002", name: "Smart Watch", price: "₹3,199", image: "https://th.bing.com/th/id/R.cf6afd759bfe04a1f48350b07f58e485?rik=wtKB9NfeHe59wA&riu=http%3a%2f%2f5.imimg.com%2fdata5%2fSELLER%2fDefault%2f2023%2f2%2fQD%2fDP%2fKT%2f35510924%2fbip-u-1-1000x1000.png&ehk=XBZLGK74XLxQAwWY361uUvVId5lzi2phgQxIoVZ9uAk%3d&risl=&pid=ImgRaw&r=0" },
    { id: "P003", name: "Bluetooth Speaker", price: "₹1,899", image: "https://tse4.mm.bing.net/th/id/OIP.Yf7JwYrOXXJm_K9kNUpJmAHaHa?w=493&h=493&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { id: "P004", name: "Gaming Mouse", price: "₹1,299", image: "https://www.symbios.pk/image/cache/data/2/2_1380016900-500x500.jpg" },
  ];

  return (
    <div className="app">
      {/* Navbar */}
      <nav className="navbar">
        <h1 className="logo">🛍️ TrendyShop</h1>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <h2>Discover Modern Tech</h2>
        <p>Your one-stop destination for the latest gadgets & accessories.</p>
        <button>Shop Now</button>
      </section>

      {/* Product Section */}
      <section id="products" className="product-section">
        <h3>Our Products</h3>
        <div className="product-grid">
          {products.map((product) => (
            <div className="product-card" key={product.id}>
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p className="price">{product.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer id="contact">
        © 2025 TrendyShop. All rights reserved.
      </footer>
    </div>
  );
};

export default App;