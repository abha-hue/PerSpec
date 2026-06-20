import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './screens/Home';
import Contact from './screens/Contact';
import Services from './screens/Services';
import Work from './screens/Work';
import './index.css';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/work" element={<Work />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
