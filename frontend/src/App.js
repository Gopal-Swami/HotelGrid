import NavigationBar from './components/NavigationBar';
import LandingPage from './screens/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterBar from './components/FooterBar';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
