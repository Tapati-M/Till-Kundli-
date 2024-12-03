import React from 'react'
import FAQ from '../components/FAQ'
// import AdKundli from '../components/AdKundli'

// import KundliHero from '../components/KundliHero'
import KundliNavbar from '../components/KundliNavbar'
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const KundliMatching = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <KundliNavbar />
    <FAQ />
  </div>
  )
}

export default KundliMatching