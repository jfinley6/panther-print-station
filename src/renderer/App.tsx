import './styles/App.css';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../layout/Navbar';
import Home from '../renderer/pages/Home';
import Production from './pages/Production';

export default function App() {
  return (
    <Router>
      <div id="wrapper">
        <div className="left-section">
          <Navbar />
        </div>
        <div className="right-section">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/toe-tag" element={<Production />} />
            <Route path="/serial-number-tag" element={<Production />} /> /** This is a placeholder for the serial number tag page */
            <Route path="/part-tag" element={<Production />} /> /** This is a placeholder for the part tag page */
            <Route path="/crate-tag" element={<Production />} /> /** This is a placeholder for the crate tag page */
          </Routes>
        </div>
      </div>
    </Router>
  );
}
