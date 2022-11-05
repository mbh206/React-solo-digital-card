import React from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'


function App() {
  return (
    <div className="container">
      <img src="./mark-with-food.jpg" className="main-img" />
      <div className="main-content">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
