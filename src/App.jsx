import './css/App.css';
import Favourite from './pages/Favourites';
import Home from './pages/Home';
import NavBar from './components/NavBar';
import { MovieProvider } from './contexts/MovieContext';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <MovieProvider>
      <Router>
        <NavBar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favourites" element={<Favourite />} />
          </Routes>
        </main>
      </Router>
    </MovieProvider>
  );
}

export default App;
