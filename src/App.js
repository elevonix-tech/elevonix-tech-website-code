import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home';
import RequestQuote from './Pages/RequestQuote';
import NavbarTop from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <Router>
      <div>
        <NavbarTop/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/request-a-quote" element={<RequestQuote />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
