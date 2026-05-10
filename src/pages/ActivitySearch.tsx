import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Search, ListFilter, SlidersHorizontal, ArrowUpDown, 
  MapPin, Star, Heart, Image as ImageIcon
} from 'lucide-react';

export default function ActivitySearch() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf9f9]">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 flex flex-col gap-10">
        
        {/* Search header area */}
        <section className="flex flex-col gap-6">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Activity Search</h1>
          
          <div className="flex flex-col md:flex-row gap-4 w-full">
            <div className="flex-grow relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input 
                type="text" 
                defaultValue="Paragliding" 
                className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-xl focus:border-[#65a30d] focus:ring-1 focus:ring-[#65a30d] outline-none transition-colors text-gray-900 font-medium"
              />
            </div>
            
            <div className="flex flex-wrap md:flex-nowrap gap-3">
              <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl hover:border-[#65a30d]/50 transition-colors text-gray-600 font-medium whitespace-nowrap shadow-sm">
                <ListFilter className="w-4 h-4" />
                Group by
              </button>
              <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl hover:border-[#65a30d]/50 transition-colors text-gray-600 font-medium whitespace-nowrap shadow-sm">
                <SlidersHorizontal className="w-4 h-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-5 py-3.5 bg-white border border-gray-200 rounded-xl hover:border-[#65a30d]/50 transition-colors text-gray-600 font-medium whitespace-nowrap shadow-sm">
                <ArrowUpDown className="w-4 h-4" />
                Sort by
              </button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <span className="text-gray-500 text-sm">Results for:</span>
            <span className="px-4 py-1.5 rounded-full border border-[#ecfccb] text-[#4d7c0f] bg-[#f7fee7] text-sm font-semibold">Paragliding</span>
            <span className="px-4 py-1.5 rounded-full border border-gray-200 text-gray-600 bg-white text-sm font-medium">Adventure</span>
          </div>
        </section>

        {/* Results List */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold text-gray-900">Results</h2>
          
          <div className="flex flex-col gap-6">
            
            {/* Activity Card 1 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row border border-gray-100 group">
              <div className="relative w-full md:w-[380px] h-[280px] md:h-auto flex-shrink-0 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1520208422220-d12a3c588e6c?auto=format&fit=crop&q=80" 
                  alt="Alpine Ridge Paragliding" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <button className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">Alpine Ridge Paragliding</h3>
                  <div className="flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded text-sm font-semibold text-gray-800 flex-shrink-0">
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    4.9 (128)
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-gray-500 text-[15px] font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  Interlaken, Switzerland
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Experience the thrill of soaring above the Swiss Alps. This tandem flight offers breathtaking panoramic views of the Jungfrau region and pristine alpine lakes. Perfect for beginners and...
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-[28px] font-bold text-[#65a30d] tracking-tight">
                    $185 <span className="text-gray-500 text-[15px] font-normal tracking-normal">/ person</span>
                  </div>
                  <button className="bg-[#65a30d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4d7c0f] transition-colors shadow-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 2 */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row border border-gray-100 group">
              <div className="relative w-full md:w-[380px] h-[280px] md:h-auto flex-shrink-0 overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1549479361-bd804b4d7ed4?auto=format&fit=crop&q=80" 
                  alt="Coastal Sunset Flight" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <button className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">Coastal Sunset Flight</h3>
                  <div className="flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded text-sm font-semibold text-gray-800 flex-shrink-0">
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    4.8 (84)
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-gray-500 text-[15px] font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  Oludeniz, Turkey
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  Glide over the famous Blue Lagoon during golden hour. Launch from Babadağ mountain and enjoy a serene descent over the turquoise waters and white sandy beaches below.
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-[28px] font-bold text-[#65a30d] tracking-tight">
                    $140 <span className="text-gray-500 text-[15px] font-normal tracking-normal">/ person</span>
                  </div>
                  <button className="bg-[#65a30d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#4d7c0f] transition-colors shadow-sm">
                    View Details
                  </button>
                </div>
              </div>
            </div>

            {/* Activity Card 3 (Placeholder Image) */}
            <div className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col md:flex-row border border-gray-100 group">
              <div className="relative w-full md:w-[380px] h-[280px] md:h-auto flex-shrink-0 bg-gray-100 flex items-center justify-center">
                <ImageIcon className="w-16 h-16 text-gray-300" />
                <button className="absolute top-4 right-4 bg-white/90 p-2.5 rounded-full text-gray-400 hover:text-red-500 transition-colors shadow-sm">
                  <Heart className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-2 gap-4">
                  <h3 className="text-2xl font-bold text-gray-900 leading-tight">Volcanic Crater Glide</h3>
                  <div className="flex items-center gap-1.5 bg-orange-50 px-2.5 py-1 rounded text-sm font-semibold text-gray-800 flex-shrink-0">
                    <Star className="w-4 h-4 text-orange-400 fill-orange-400" />
                    4.7 (56)
                  </div>
                </div>
                
                <div className="flex items-center gap-1.5 text-gray-500 text-[15px] font-medium mb-4">
                  <MapPin className="w-4 h-4" />
                  Maui, Hawaii
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  A unique opportunity to fly near the dormant Haleakalā volcano. Witness dramatic landscapes, unique flora, and sweeping views of the island from a bird's-eye perspective.
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                  <div className="text-[28px] font-bold text-[#65a30d] tracking-tight">
                    $210 <span className="text-gray-500 text-[15px] font-normal tracking-normal">/ person</span>
                  </div>
                  <button className="bg-white border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 hover:border-gray-300 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </div>

          </div>
          
          <div className="flex justify-center mt-8">
            <button className="bg-white border-2 border-gray-200 text-gray-700 font-semibold px-8 py-3.5 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-colors shadow-sm">
              Load More Results
            </button>
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
