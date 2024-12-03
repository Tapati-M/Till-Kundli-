import React from "react";
import FAQ from "../components/FAQ";

const Store = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Store</h1>
      <p className="text-lg">Browse our collection of amazing products!</p>
      <FAQ />
    </div>
  );
};

export default Store;
