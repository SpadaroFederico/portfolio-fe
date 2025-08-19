import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/NavBar.jsx'   // importa la navbar
import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Admin from './pages/Admin.jsx'
import ProtectedRoute from './components/ProtectedRoute.jsx'
import ParticlesBackground from "./components/ParticlesBackground";
import ProgettiPage from './pages/ProgettiPage.jsx';
import CertificatiPage from './pages/CertificatiPage.jsx';
import EsperienzePage from './pages/EsperienzePage.jsx';
import './index.css';

function App() {
  return (
    <Router>
      <ParticlesBackground />
      <Navbar />   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route path="/progetti" element={<ProgettiPage />} />
        <Route path="/certificati" element={<CertificatiPage />} />
        <Route path="/esperienze" element={<EsperienzePage />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </Router>
  )
}

export default App
