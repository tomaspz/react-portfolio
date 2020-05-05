import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Shared/Navbar';
import Footer from './components/Shared/Footer';
import About from './containers/About';
import Portfolio from './containers/Portfolio';
import Contact from './containers/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <Route exact path="/" component={About} />
      <Route exact path="/about" component={About} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Footer />
    </Router>
  );
}

export default App;
