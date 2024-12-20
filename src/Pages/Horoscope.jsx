import React from 'react'
import FAQ from '../components/FAQ'

const Horoscope = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <h1 className="text-4xl font-bold mb-6">Welcome to the Horoscope</h1>
    <p className="text-lg">Browse Horoscope!</p>
    <FAQ />
  </div>
  )
}

export default Horoscope