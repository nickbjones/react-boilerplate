import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Navigation from './components/shared/Navigation';

import Home from './components/pages/Home';
import About from './components/pages/About';
import DogFacts from './components/pages/DogFacts';
import Models from './components/pages/Models/Models';
import Model from './components/pages/Models/Model';
import NewModel from './components/pages/Models/NewModel';

export default function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dog-facts" element={<DogFacts />} />
          <Route path="models" element={<Models />} />
          <Route path="models">
            <Route index element={<Models />} />
            <Route path=":id" element={<Model />} />
            <Route path="new" element={<NewModel />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}
