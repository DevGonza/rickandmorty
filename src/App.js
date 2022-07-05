import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './componentes/Footer/Footer';
import Navbar from './componentes/Navbar/Navbar';
import Capitulos from './pages/Capitulos/Capitulos';
import Home from './pages/Home/Home';
import Personajes from './pages/Persoanjes/Personajes';
import Procedencia from './pages/Procedencia/Procedencia';


function App() {
  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/personajes" element={<Personajes />} />
          <Route path="/capitulos" element={<Capitulos />} />
          <Route path="/procedencia" element={<Procedencia />} />
        </Routes>
        <Footer />
    </Router>    
  );
}

export default App;
