import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './Components/About';
import ContactUsPage from './Components/ContactUsPage';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import SecurityPage from './Components/SecurityPage';
// import { useState } from 'react';

function App() {

  // const [page, setPage] = useState(0)

  return (
    <div className="App">
      {/* <Navbar page={page} setPage={setPage} /> */}
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<SecurityPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      {/* {page === 0 ? <Home /> : null}
      {page === 1 ? <About /> : null}
      {page === 2 ? <ServicePage /> : null}
      {page === 3 ? <ContactUsPage /> : null}
      {page === 4 ? <Login /> : null} */}
      <Footer />
    </div>
  );
}

export default App;
