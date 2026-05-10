import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  Globe, ChevronDown, Settings, Edit2,
  Footprints, Camera, Leaf, SlidersHorizontal, Check, 
  Calendar, History, Bookmark 
} from 'lucide-react';

export default function Profile() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf9f9]">
      <Header />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16 space-y-12">
        
        {/* User Profile Header */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <div className="relative w-32 h-32 md:w-40 md:h-40 flex-shrink-0">
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=256&q=80" 
              alt="Alex Wanderlust" 
              className="w-full h-full rounded-full object-cover border-4 border-white shadow-md"
            />
            <button className="absolute bottom-2 right-2 bg-[#65a30d] text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:bg-[#4d7c0f] hover:-translate-y-0.5 transition-all outline-none border-2 border-white">
              <Edit2 className="w-5 h-5" />
            </button>
          </div>
          
          <div className="flex-grow text-center md:text-left w-full">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Alex Wanderlust</h1>
                <p className="text-[15px] text-gray-600 mt-1.5">Adventure Enthusiast & Digital Nomad | Exploring 45 countries and counting.</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 self-center md:self-start">
                <button className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 h-11 px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <Globe className="w-5 h-5 text-gray-500" />
                  EN
                  <ChevronDown className="w-4 h-4 text-gray-500" />
                </button>
                <button className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 h-11 px-5 rounded-xl font-medium hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <Settings className="w-5 h-5 text-gray-500" />
                  Edit Profile
                </button>
              </div>
            </div>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-3 mt-6">
              <div className="bg-[#ecfccb] text-[#4d7c0f] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Footprints className="w-4 h-4" />
                Adventure
              </div>
              <div className="bg-[#ecfccb] text-[#4d7c0f] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Camera className="w-4 h-4" />
                Photography
              </div>
              <div className="bg-[#ecfccb] text-[#4d7c0f] px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                <Leaf className="w-4 h-4" />
                Eco-friendly
              </div>
            </div>
          </div>
        </section>

        {/* Travel Preferences */}
        <section className="bg-[#f3f4f6] p-8 rounded-2xl border border-gray-200">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <SlidersHorizontal className="w-6 h-6 text-[#65a30d]" />
              Travel Preferences
            </h2>
            <button className="text-[#65a30d] font-medium hover:underline text-sm">Edit Preferences</button>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {[
              { label: 'Sustainable Travel', active: true },
              { label: 'Luxury Stays', active: false },
              { label: 'Local Cuisine', active: true },
              { label: 'Solo Travel', active: false },
              { label: 'Off-the-beaten-path', active: true },
            ].map((pref) => (
              <button 
                key={pref.label}
                className={`px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 transition-colors ${
                  pref.active 
                    ? 'bg-[#4d7c0f] text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                {pref.active && <Check className="w-4 h-4" />}
                {pref.label}
              </button>
            ))}
          </div>
        </section>

        {/* Preplanned Trips */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <Calendar className="w-6 h-6 text-[#65a30d]" />
              Preplanned Trips
            </h2>
            <button className="text-[#65a30d] font-medium hover:underline text-sm">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Trip Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-gray-100">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1431274172761-fca41d930114?auto=format&fit=crop&q=80" 
                  alt="Paris Getaway" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                  In 14 days
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Paris Getaway</h3>
                <p className="text-gray-600 text-[15px] mb-6 line-clamp-2">A romantic weekend exploring art, culture, and culinary delights in the heart of France.</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="text-gray-500 text-sm font-medium flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Oct 15 - Oct 20
                  </div>
                  <button className="bg-[#65a30d] text-white h-10 px-5 rounded-lg text-sm font-semibold hover:bg-[#4d7c0f] hover:-translate-y-0.5 transition-all shadow-sm">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Trip Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-gray-100">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&q=80" 
                  alt="Kyoto Autumn" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                  In 2 months
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Kyoto Autumn</h3>
                <p className="text-gray-600 text-[15px] mb-6 line-clamp-2">Experiencing the stunning fall foliage, ancient temples, and traditional tea ceremonies.</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="text-gray-500 text-sm font-medium flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    Nov 05 - Nov 18
                  </div>
                  <button className="bg-[#65a30d] text-white h-10 px-5 rounded-lg text-sm font-semibold hover:bg-[#4d7c0f] hover:-translate-y-0.5 transition-all shadow-sm">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Trip Card 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-gray-100">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?auto=format&fit=crop&q=80" 
                  alt="Swiss Alps Hike" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-sm">
                  Draft
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Swiss Alps Hike</h3>
                <p className="text-gray-600 text-[15px] mb-6 line-clamp-2">Planning an intensive hiking expedition through the picturesque mountains of Switzerland.</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="text-gray-500 text-sm font-medium flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    TBD
                  </div>
                  <button className="bg-[#65a30d] text-white h-10 px-5 rounded-lg text-sm font-semibold hover:bg-[#4d7c0f] hover:-translate-y-0.5 transition-all shadow-sm">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Previous Trips */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <History className="w-6 h-6 text-[#65a30d]" />
              Previous Trips
            </h2>
            <button className="text-[#65a30d] font-medium hover:underline text-sm">View All</button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Past Trip Card 1 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-gray-100">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&q=80" 
                  alt="Santorini Escape" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">Santorini Escape</h3>
                <p className="text-gray-600 text-[15px] mb-6 line-clamp-2">A relaxing week enjoying the Mediterranean sun, fresh seafood, and stunning sunsets.</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="text-gray-500 text-sm font-medium flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    Completed
                  </div>
                  <button className="border border-gray-300 text-gray-700 h-10 px-5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>

            {/* Past Trip Card 2 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group flex flex-col h-full border border-gray-100">
              <div className="relative w-full aspect-[4/3] overflow-hidden bg-gray-100 grayscale-[20%] group-hover:grayscale-0 transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1518182170546-076616fdcd80?auto=format&fit=crop&q=80" 
                  alt="Costa Rica Eco-Tour" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1">Costa Rica Eco-Tour</h3>
                <p className="text-gray-600 text-[15px] mb-6 line-clamp-2">Zip-lining through cloud forests and discovering incredible wildlife biodiversity.</p>
                <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-50">
                  <div className="text-gray-500 text-sm font-medium flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    Completed
                  </div>
                  <button className="border border-gray-300 text-gray-700 h-10 px-5 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors">
                    View
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Saved Destinations */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2.5">
              <Bookmark className="w-6 h-6 text-[#65a30d]" />
              Saved Destinations
            </h2>
            <button className="text-[#65a30d] font-medium hover:underline text-sm">View All</button>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: 'Amalfi Coast, Italy', img: 'https://images.unsplash.com/photo-1533596954316-c98ec8524317?auto=format&fit=crop&q=80' },
              { title: 'Ubud, Bali', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&q=80' },
              { title: 'Reykjavik, Iceland', img: 'https://images.unsplash.com/photo-1476610182048-b716b8518aae?auto=format&fit=crop&q=80' },
              { title: 'Patagonia, Chile', img: 'https://images.unsplash.com/photo-1526392060635-9d60198d3de3?auto=format&fit=crop&q=80' }
            ].map((dest, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-square rounded-2xl overflow-hidden mb-3 bg-gray-100">
                  <img 
                    src={dest.img} 
                    alt={dest.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <button className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full text-[#65a30d] shadow-sm hover:bg-white transition-colors">
                    <Bookmark className="w-4 h-4 fill-current" />
                  </button>
                </div>
                <h4 className="font-semibold text-gray-900 text-[15px]">{dest.title}</h4>
              </div>
            ))}
          </div>
        </section>

      </main>
      
      <Footer />
    </div>
  );
}
