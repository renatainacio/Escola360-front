import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import { AuthProvider } from './contexts/AuthContext';
import { Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <div>
    // <AuthProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/painel-aluno" element={<Dashboard />} />
      </Routes>
    // </AuthProvider>
    </div>
  );
}

export default App;
