import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import CFS from './pages/CFS';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/recipe" element={<RecipePage />} />
        <Route path="/cfs" element={<CFS />} />
        
      </Routes>
    </Router>
  );
}

export default App;
