import NavigationBar from './components/NavigationBar';
import LandingPage from './screens/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FooterBar from './components/FooterBar';
import Signup from './screens/Signup';
import Login from './screens/Login';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <FooterBar />
    </Router>
  );
}

export default App;
