import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Admin from './Pages/Admin';
import Navbar from './Componenets/Navbar/Navbar'
import Footer from './Componenets/Footer/Footer';

function App() {
  return (
    <div className="App text-blackml">

    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer/>
    </Router>
    </div>
  );
}

export default App;
