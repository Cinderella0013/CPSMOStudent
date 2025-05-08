import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* เพิ่ม Route อื่น ๆ ได้ เช่น <Route path="/news/:id" /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;