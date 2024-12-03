import './App.css';
import Navbar from './components/Navbar';
import Home from './Pages/Home';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Store from "./Pages/Store"; 
import Blog from './Pages/Blog';
import Horoscope from './Pages/Horoscope';
import ConsultAstrologer from './Pages/ConsultAstrologer';
import KundliMatching from './Pages/KundliMatching';
import Footer from './components/Footer';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import MatchForm from "./components/MatchForm";
import ResultPage from "./components/ResultPage";
import Love from './components/Love';
import Marriage from './components/Marriage';
import Career from './components/Career';
import Finance from './components/Finance';
import Child from './components/Child';
import Education from './components/Education';
import Health from './components/Health';
import KundliNavbar from './components/KundliNavbar';


function App() {
  return (
    <><Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> {/* Render Home only on the root path */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/consult-astrologer" element={<ConsultAstrologer />} />
        <Route path="/Kundli-matching" element={<KundliMatching />} />
        <Route path='/kundli-navbar' element={<KundliNavbar />} />
        <Route path='/kundli-matching/love' element={<Love />} />
        <Route path='/kundli-matching/marriage' element={<Marriage />} />
        <Route path='/kundli-matching/career' element={<Career />} />
        <Route path='/kundli-matching/finance' element={<Finance />} />
        <Route path='/kundli-matching/health' element={<Health />} />
        <Route path='/kundli-matching/education' element={<Education />} />
        <Route path='/kundli-matching/child' element={<Child />} />
        <Route path="/horoscope" element={<Horoscope />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/store" element={<Store />} />
        {/* <Route path="/products" element={<ProductsPage />} /> Assuming you have a ProductsPage */}
        {/* Main Culprit is the Above line for re rendering of home objects again in store , Home also should be
     like this */}
        <Route path="/match" element={<MatchForm />} />
        <Route path="/results" element={<ResultPage />} />

      </Routes>
    </Router>
    {/* <ReviewAstro />  */}
    <Footer /></>
  );
}

export default App;