import React from 'react';

import Layout from './components/layout/layout';
import Home from './pages/home/home';
<<<<<<< HEAD
import About from './pages/about/about';
import Details from './pages/details/details';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/details">Details</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/details" element={<Details />} /> {/* Add the route */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
=======

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default function App(){
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Layout>
        </Router>
    );
};
>>>>>>> 1e3b2f8bc7c30c04170118037cace28ff580ee37
