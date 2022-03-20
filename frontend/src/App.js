import NavigationBar from './components/NavigationBar';
import LandingPage from './screens/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterBar from './components/FooterBar';
import Signup from './screens/Signup';
import Login from './screens/Login';
import SearchResult from './screens/SearchResult';
import HotelView from './screens/HotelView';
import Profile from './screens/Profile';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/search-results" element={<SearchResult />} />
        <Route path="/hotels/:id" element={<HotelView />} />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
