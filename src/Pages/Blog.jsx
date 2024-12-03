import React from 'react'
import FAQ from '../components/FAQ'
const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
    <h1 className="text-4xl font-bold mb-6">Welcome to the Blog</h1>
    <p className="text-lg">Browse Blog!</p>
    <FAQ />
  </div>
  )
}

export default Blog