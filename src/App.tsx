import React, { useState } from 'react';

// Main landing page component with modern design and responsive layout
export default function App() {
  // State to manage form data
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [submitted, setSubmitted] = useState(false); // State to manage submission status

  // Function to handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission
    setSubmitted(true); // Update submitted state to true
    // Here, you would typically handle the form data (e.g., send it to an API)
  };

  return (
    // Main container with gradient background and full viewport height
    <div className="min-h-screen bg-gradient-to-br from-yellow-200 to-yellow-400">
      {/* Header section with navigation and branding */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            {/* Logo and brand name */}
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Banana Haven</h1>
            </div>
            {/* Navigation menu - hidden on mobile, visible on desktop */}
            <nav className="hidden md:flex space-x-8">
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Home</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
              <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main content area with centered layout */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          {/* Hero section with large heading and description */}
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Welcome to Banana Haven</h2>
          <p className="text-xl text-gray-600 mb-8">Discover everything you need to know about bananas!</p>
          
          {/* Updated form section for user input with vertical layout and narrower input fields */}
          <form className="mb-8" onSubmit={handleSubmit}> {/* Attach handleSubmit to form */}
            <div className="flex flex-col space-y-4 items-center">
              {/* Input for name with proper styling and reduced width */}
              <input type="text" placeholder="Name" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-80" aria-label="Name" required value={formData.name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, name: e.target.value })} />
              {/* Input for email with proper styling and reduced width */}
              <input type="email" placeholder="Email" className="border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-yellow-500 w-80" aria-label="Email" required value={formData.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFormData({ ...formData, email: e.target.value })} />
              {/* Submit button for form submission */}
              <button type="submit" className="bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors">Subscribe</button>
            </div>
          </form>
          {/* Display a checkmark message upon successful submission */}
          {submitted && <p className="mt-4 text-green-600 font-semibold">✔️ Thank you for subscribing!</p>}
        </div>
      </main>

      {/* Footer with copyright information */}
      <footer className="bg-gray-50 border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-600">© 2024 Banana Haven. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}