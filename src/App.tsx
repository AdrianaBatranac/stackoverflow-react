import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home/home';
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
