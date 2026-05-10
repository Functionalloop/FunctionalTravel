import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Search, ListFilter, SlidersHorizontal, ArrowUpDown, 
  MoreVertical, Calendar, ArrowRight 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Itineraries() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf9f9]">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col gap-12">
        {/* Search and Filter Bar */}
        <section className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">My Trips</h1>
          
          <div className="flex flex-col md:flex-row gap-4 w-full bg-white/80 backdrop-blur-md p-4 rounded-2xl shadow-sm border border-gray-200/60">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search trips..." 
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:border-[#65a30d] focus:ring-1 focus:ring-[#65a30d] outline-none transition-colors text-gray-900 placeholder-gray-400"
              />
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#65a30d]/50 transition-colors text-gray-600 font-medium whitespace-nowrap">
                <ListFilter className="w-4 h-4" />
                Group by
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#65a30d]/50 transition-colors text-gray-600 font-medium whitespace-nowrap">
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-3 bg-white border border-gray-200 rounded-xl hover:border-[#65a30d]/50 transition-colors text-gray-600 font-medium whitespace-nowrap">
                <ArrowUpDown className="w-4 h-4" />
                Sort by
              </button>
            </div>
          </div>
        </section>

        {/* Ongoing */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-2 h-8 bg-[#65a30d] rounded-full"></span>
            Ongoing
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trip Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col border border-gray-100">
              <div className="relative h-60 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&q=80" 
                  alt="Parisian Autumn Escape" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-2 shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-[#65a30d] animate-pulse"></span> 
                  Active
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-bold text-gray-900 leading-tight">Parisian Autumn Escape</h3>
                  <button className="text-gray-400 hover:text-[#65a30d] transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mt-1">
                  <Calendar className="w-4 h-4" />
                  Oct 12 - Oct 20, 2024
                </div>
                
                <p className="text-[15px] text-gray-600 mt-2 line-clamp-2">
                  A luxurious culinary and cultural journey through the heart of Paris, featuring private museum tours and Seine dining.
                </p>
                
                <div className="mt-auto pt-6 flex items-center justify-between border-t border-gray-100">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-xs font-bold border-2 border-white">JD</div>
                    <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs font-bold border-2 border-white">SA</div>
                  </div>
                  <Link to="/itinerary-view" className="text-sm font-semibold text-[#65a30d] hover:text-[#4d7c0f] transition-colors flex items-center gap-1">
                    View Itinerary <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Up-coming */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold text-gray-900 flex items-center gap-3">
            <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
            Up-coming
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trip Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col border border-gray-100">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80" 
                  alt="Kyoto Sakura Season" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#4d7c0f] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  42 Days Away
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">Kyoto Sakura Season</h3>
                  <button className="text-gray-400 hover:text-[#65a30d] transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mt-1">
                  <Calendar className="w-4 h-4" />
                  Apr 05 - Apr 18, 2025
                </div>
                
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md font-semibold">Planning</span>
                  <button className="text-sm font-semibold text-gray-500 hover:text-[#65a30d] transition-colors">
                    Edit Trip
                  </button>
                </div>
              </div>
            </div>

            {/* Trip Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group flex flex-col border border-gray-100">
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&q=80" 
                  alt="Dubai Tech Summit" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-[#4d7c0f] text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                  3 Months Away
                </div>
              </div>
              
              <div className="p-6 flex flex-col gap-3 flex-grow">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-gray-900 leading-tight">Dubai Tech Summit</h3>
                  <button className="text-gray-400 hover:text-[#65a30d] transition-colors">
                    <MoreVertical className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="flex items-center gap-2 text-gray-500 text-sm font-medium mt-1">
                  <Calendar className="w-4 h-4" />
                  Jun 10 - Jun 15, 2025
                </div>
                
                <div className="mt-auto pt-6 flex items-center justify-between">
                  <span className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-md font-semibold">Booked</span>
                  <button className="text-sm font-semibold text-gray-500 hover:text-[#65a30d] transition-colors">
                    Edit Trip
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Completed */}
        <section className="flex flex-col gap-6 opacity-80">
          <h2 className="text-2xl font-semibold text-gray-500 flex items-center gap-3">
            <span className="w-2 h-8 bg-gray-300 rounded-full"></span>
            Completed
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Completed Card 1 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col grayscale-[0.3] hover:grayscale-0 transition-all duration-300">
              <div className="h-36 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1514282401047-d79a71a590e8?auto=format&fit=crop&q=80" 
                  alt="Maldives Retreat" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-base font-bold text-gray-900 truncate">Maldives Retreat</h3>
                <div className="text-xs text-gray-500 font-medium">Jan 2024</div>
                <button className="text-[#65a30d] text-xs font-bold mt-2 self-start hover:underline">
                  View Memories
                </button>
              </div>
            </div>

            {/* Completed Card 2 */}
            <div className="bg-white rounded-xl overflow-hidden border border-gray-200 flex flex-col grayscale-[0.3] hover:grayscale-0 transition-all duration-300">
              <div className="h-36 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&q=80" 
                  alt="NYC Weekend" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-4 flex flex-col gap-2">
                <h3 className="text-base font-bold text-gray-900 truncate">NYC Weekend</h3>
                <div className="text-xs text-gray-500 font-medium">Nov 2023</div>
                <button className="text-[#65a30d] text-xs font-bold mt-2 self-start hover:underline">
                  View Memories
                </button>
              </div>
            </div>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
