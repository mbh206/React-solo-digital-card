import React from 'react';
import './App.css';
import Header from './Header.js'
import Main from './Main.js'
import Footer from './Footer.js'
import Logo from './mark-with-food.jpg'


function App() {
  return (
    <div className="container">
      <img src={Logo} className="main-img" />
      <div className="main-content">
        <Header />
        <Main />
      </div>
      <Footer />
    </div>
  );
}

export default App;
