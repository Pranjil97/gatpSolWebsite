import { useState } from 'react';
import './App.css';
import About from './Components/About';
import ContactUsPage from './Components/ContactUsPage';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import ServicePage from './Components/SecurityPage';
function App() {

  const [page, setPage] = useState(0)

  return (
    <div className="App">
      <Navbar page={page} setPage={setPage} />
      {page === 0 ? <Home /> : null}
      {page === 1 ? <About /> : null}
      {page === 2 ? <ServicePage /> : null}
      {page === 3 ? <ContactUsPage /> : null}
      <Footer />
    </div>
  );
}

export default App;
