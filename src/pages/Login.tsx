import { ArrowRight } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen flex flex-col font-sans relative">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80')" }}
      >
        {/* Dark opacity overlay to match the design's dramatic look */}
        <div className="absolute inset-0 bg-[#061826]/70 mix-blend-multiply"></div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex items-center justify-center p-4 z-10">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">
          
          {/* Left Side - Dark Panel */}
          <div className="hidden md:flex md:w-1/2 bg-[#0d1627] p-12 flex-col justify-between">
            <div>
              <h1 className="text-4xl font-bold tracking-tight text-[#84cc16] mb-4">
                Traveloop
              </h1>
              <p className="text-lg text-slate-300 leading-snug pr-4">
                Your gateway to extraordinary adventures and seamless itineraries.
              </p>
            </div>
            
            {/* 300x300 Image Placeholder */}
            <div className="flex justify-center my-8">
              <div className="w-[300px] h-[300px] bg-[#e5e5e5] rounded flex items-center justify-center">
                <span className="text-gray-500 text-xl font-mono tracking-widest">300×300</span>
              </div>
            </div>

            <p className="text-sm text-slate-400 italic">
              "The journey of a thousand miles begins with a single step."
            </p>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <div className="max-w-sm mx-auto w-full">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h2>
                <p className="text-gray-600">Sign in to access your planned trips.</p>
              </div>

              <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Email or Username</label>
                  <input 
                    type="text" 
                    placeholder="Enter your email" 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input 
                    type="password" 
                    placeholder="Enter your password" 
                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-gray-900 focus:ring-2 focus:ring-[#84cc16] focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <label className="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-[#65a30d] focus:ring-[#65a30d]" />
                    <span className="text-gray-600">Remember me</span>
                  </label>
                  <a href="#" className="font-medium text-[#4d7c0f] hover:text-[#3f6212]">
                    Forgot Password?
                  </a>
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 px-4 bg-[#65a30d] hover:bg-[#4d7c0f] text-white rounded-lg font-medium transition-colors flex items-center justify-center group"
                >
                  Login to Traveloop
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>

              <p className="text-center text-sm text-gray-600 mt-6">
                Don't have an account?{' '}
                <Link to="/signup" className="font-medium text-[#4d7c0f] hover:text-[#3f6212]">
                  Create Account
                </Link>
              </p>

              <div className="mt-8 flex items-center mb-8">
                <div className="flex-grow h-px bg-gray-200"></div>
                <span className="px-4 text-sm text-gray-500">Or continue with</span>
                <div className="flex-grow h-px bg-gray-200"></div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <button type="button" className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                  Google
                </button>
                <button type="button" className="w-full py-2.5 px-4 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors flex items-center justify-center">
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <footer className="w-full bg-[#0B121A] text-gray-300 py-6 px-8 z-10 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-8">
            <span className="text-xl font-bold text-white tracking-tight">Traveloop</span>
            <div className="hidden md:flex space-x-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">About Us</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Sustainability</a>
              <a href="#" className="hover:text-white transition-colors">Contact Support</a>
            </div>
          </div>
          <div className="text-sm text-gray-500 text-center md:text-right">
            © 2024 Traveloop Adventure Platform. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
