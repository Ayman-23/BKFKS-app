import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Home from './components/home.jsx';
// import About from './components/About.jsx';
import Classes from './components/classes.jsx';
import Instructors from './components/instructors.jsx';
// import Contact from './components/Contact.jsx';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="overlay">
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/classes" element={<Classes />} />
            <Route path="/instructors" element={<Instructors />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;
