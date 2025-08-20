import { Routes, Route } from 'react-router-dom';
import InfoPage from './pages/InfoPage';
import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Routes>
      <Route path="/" element={<InfoPage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
