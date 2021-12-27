import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Navigation from './components/shared/Navigation';

import Home from './components/pages/Home';
import About from './components/pages/About';
import Weather from './components/pages/Weather';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/weather" element={<Weather />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
