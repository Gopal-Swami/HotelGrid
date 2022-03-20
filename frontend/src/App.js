import NavigationBar from './components/NavigationBar';
import LandingPage from './screens/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterBar from './components/FooterBar';
import Signup from './screens/Signup';
import Login from './screens/Login';
import SearchResult from './screens/SearchResult';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/search-results" element={<SearchResult />} />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
