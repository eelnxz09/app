import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import ShoeLaundry from './components/ShoeLaundry';
import ShoeMaking from './components/ShoeMaking';
import ShoeRepair from './components/ShoeRepair';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shoe-laundry" element={<ShoeLaundry />} />
          <Route path="/shoe-making" element={<ShoeMaking />} />
          <Route path="/shoe-repair" element={<ShoeRepair />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;