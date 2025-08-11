import React from 'react';

// Main LandingPage component
const LandingPage = () => {
  return (
    <div className="bg-yellow-50 min-h-screen flex flex-col justify-between">
      {/* Header Section */}
      <header className="bg-yellow-300 p-5 shadow-md">
        <h1 className="text-3xl font-bold text-center text-gray-800">Welcome to Bananase</h1>
        <nav className="flex justify-center space-x-4 mt-4">
          <a href="#features" className="text-gray-700 hover:text-gray-900">Features</a>
          <a href="#about" className="text-gray-700 hover:text-gray-900">About</a>
          <a href="#contact" className="text-gray-700 hover:text-gray-900">Contact</a>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex flex-col items-center justify-center text-center p-10">
        <h2 className="text-4xl font-bold mb-4 text-gray-800">Discover the Power of Bananase</h2>
        <p className="text-lg text-gray-600 mb-6">A revolutionary way to enjoy bananas, packed with flavor and nutrients.</p>
        <button className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg transition duration-300 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-400">
          Get Started
        </button>
      </main>

      {/* Features Section */}
      <section id="features" className="bg-white py-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4">
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Nutritious</h3>
            <p className="text-gray-600">Packed with vitamins and minerals for a healthy boost.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Delicious</h3>
            <p className="text-gray-600">Enjoy the sweet and creamy taste of fresh bananas.</p>
          </div>
          <div className="bg-yellow-100 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold text-gray-800">Versatile</h3>
            <p className="text-gray-600">Perfect for smoothies, desserts, and snacks.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-10 bg-yellow-50">
        <h2 className="text-3xl font-bold text-center text-gray-800">About Bananase</h2>
        <p className="max-w-2xl mx-auto text-gray-600 text-center mt-4 px-4">
          Bananase is dedicated to bringing you the best banana products, ensuring quality and freshness in every bite.
        </p>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="bg-yellow-300 p-10 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
        <p className="text-gray-600 mt-4">Have questions? We're here to help!</p>
        <form className="mt-6">
          <input type="email" placeholder="Your Email" className="p-2 rounded border border-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-400" />
          <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg ml-2 transition duration-300 hover:bg-yellow-600">
            Subscribe
          </button>
        </form>
      </footer>
    </div>
  );
};

export default LandingPage;