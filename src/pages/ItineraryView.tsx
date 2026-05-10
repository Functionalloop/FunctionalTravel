import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { 
  List, Calendar as CalendarIcon, Search, ChevronDown, Filter, ArrowUpDown,
  MapPin, PlaneLanding, Bed, Building, ArrowDown, Mountain, Utensils,
  Clock, FileText
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ItineraryView() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-[#faf9f9]">
      <Header />
      
      <main className="flex-grow flex flex-col w-full max-w-7xl mx-auto px-4 md:px-16 py-20">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 w-full">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Itinerary: Tokyo Exploration</h1>
          
          <div className="flex bg-gray-100 p-1 rounded-lg self-center sm:self-auto shrink-0">
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-white text-[#65a30d] shadow-sm font-semibold text-sm">
              <List className="w-5 h-5" />
              List
            </button>
            <button className="flex items-center gap-2 px-4 py-1.5 rounded-md text-gray-500 hover:bg-black/5 transition-colors font-semibold text-sm">
              <CalendarIcon className="w-5 h-5" />
              Calendar
            </button>
            <Link to="/packing" className="flex items-center gap-2 px-4 py-1.5 rounded-md text-gray-500 hover:bg-black/5 transition-colors font-semibold text-sm">
              <List className="w-5 h-5" />
              Checklist
            </Link>
            <Link to="/notes" className="flex items-center gap-2 px-4 py-1.5 rounded-md text-gray-500 hover:bg-black/5 transition-colors font-semibold text-sm">
              <FileText className="w-5 h-5" />
              Notes
            </Link>
            <Link to="/timeline" className="flex items-center gap-2 px-4 py-1.5 rounded-md text-gray-500 hover:bg-black/5 transition-colors font-semibold text-sm">
              <CalendarIcon className="w-5 h-5" />
              Timeline
            </Link>
            <Link to="/invoice" className="flex items-center gap-2 px-4 py-1.5 rounded-md text-gray-500 hover:bg-black/5 transition-colors font-semibold text-sm">
              <List className="w-5 h-5" />
              Budget
            </Link>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
            <div className="relative w-full sm:w-[300px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
              <input 
                type="text" 
                placeholder="Search itinerary..." 
                className="w-full h-12 pl-10 pr-4 rounded-lg border border-gray-300 bg-white focus:border-[#65a30d] focus:ring-1 focus:ring-[#65a30d] text-base transition-colors outline-none placeholder:text-gray-500"
              />
            </div>
            <div className="flex items-center gap-4 w-full sm:w-auto shrink-0">
              <button className="h-12 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2 font-semibold text-sm">
                Group by
                <ChevronDown className="w-5 h-5" />
              </button>
              <button className="h-12 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2 font-semibold text-sm">
                Filter
                <Filter className="w-5 h-5" />
              </button>
              <button className="h-12 px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 hover:bg-gray-50 transition-colors flex items-center gap-2 font-semibold text-sm">
                Sort by...
                <ArrowUpDown className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Itinerary Content */}
        <div className="flex flex-col gap-8 w-full bg-gray-50/50 p-4 rounded-xl">
          <div className="flex items-center gap-4 py-4">
            <MapPin className="text-[#65a30d] w-6 h-6" />
            <h2 className="text-2xl font-semibold text-gray-900">Tokyo, Japan</h2>
          </div>

          {/* Column Headers */}
          <div className="hidden md:grid grid-cols-[100px_1fr_200px] gap-6 px-6 pb-2 border-b border-gray-200 text-sm font-semibold text-gray-500">
            <div>Day</div>
            <div>Physical Activity</div>
            <div className="text-right">Expense</div>
          </div>

          {/* Day 1 Block */}
          <div className="flex flex-col md:grid md:grid-cols-[100px_1fr_200px] gap-6 items-start mb-8">
            {/* Day Label */}
            <div className="w-full md:w-auto pt-2">
              <div className="inline-flex items-center justify-center bg-gray-200/50 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm border border-gray-300">
                <span>Day 01</span>
              </div>
            </div>
            
            {/* Activities List */}
            <div className="flex flex-col w-full gap-2 relative">
              {/* Activity Item 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                    <PlaneLanding className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-start w-full gap-2">
                      <h3 className="font-semibold text-lg leading-snug text-gray-900">Arrival & Airport Transfer</h3>
                      {/* Mobile Expense */}
                      <div className="md:hidden font-bold text-base text-[#4d7c0f] shrink-0">
                        $45.00
                      </div>
                    </div>
                    <p className="text-base text-gray-500 mt-1">Private transfer to downtown hotel.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="inline-flex px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">Transport</span>
                      <span className="inline-flex px-2 py-1 bg-gray-100/80 text-gray-500 text-xs font-semibold rounded flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 10:00 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Flow Arrow */}
              <div className="flex justify-center py-2 text-gray-300 hidden md:flex">
                <ArrowDown className="w-6 h-6" />
              </div>
              
              {/* Activity Item 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 text-gray-500">
                    <Bed className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-start w-full gap-2">
                      <h3 className="font-semibold text-lg leading-snug text-gray-900">Hotel Check-in</h3>
                      {/* Mobile Expense */}
                      <div className="md:hidden font-bold text-base text-[#4d7c0f] shrink-0">
                        $0.00
                      </div>
                    </div>
                    <p className="text-base text-gray-500 mt-1">Grand Plaza Hotel, City Center.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="inline-flex px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">Accommodation</span>
                      <span className="inline-flex px-2 py-1 bg-gray-100/80 text-gray-500 text-xs font-semibold rounded flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 1:00 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Flow Arrow */}
              <div className="flex justify-center py-2 text-gray-300 hidden md:flex">
                <ArrowDown className="w-6 h-6" />
              </div>
              
              {/* Activity Item 3 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 rounded-lg bg-[#ecfccb]/60 flex items-center justify-center shrink-0 text-[#65a30d]">
                    <Building className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-start w-full gap-2">
                      <h3 className="font-semibold text-lg leading-snug text-gray-900">City Museum Tour</h3>
                      {/* Mobile Expense */}
                      <div className="md:hidden font-bold text-base text-[#4d7c0f] shrink-0">
                        $25.00
                      </div>
                    </div>
                    <p className="text-base text-gray-500 mt-1">Guided walking tour of historical artifacts.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="inline-flex px-2 py-1 bg-[#ecfccb] text-[#4d7c0f] text-xs font-semibold rounded">Activity</span>
                      <span className="inline-flex px-2 py-1 bg-gray-100/80 text-gray-500 text-xs font-semibold rounded flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 3:30 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expenses Column (Desktop) */}
            <div className="hidden md:flex flex-col w-full gap-2 pt-0.5">
              {/* Expense 1 */}
              <div className="h-[80px] bg-white border border-gray-200 rounded-lg flex items-center justify-end px-4 shadow-sm">
                <span className="font-bold text-lg text-[#4d7c0f]">$45.00</span>
              </div>
              {/* Spacer for arrow */}
              <div className="h-10"></div>
              {/* Expense 2 */}
              <div className="h-[80px] bg-white border border-gray-200 rounded-lg flex items-center justify-end px-4 shadow-sm opacity-50">
                <span className="font-bold text-lg text-gray-500">$0.00</span>
              </div>
              {/* Spacer for arrow */}
              <div className="h-10"></div>
              {/* Expense 3 */}
              <div className="h-[80px] bg-white border border-gray-200 rounded-lg flex items-center justify-end px-4 shadow-sm">
                <span className="font-bold text-lg text-[#4d7c0f]">$25.00</span>
              </div>
            </div>
          </div>
          
          {/* Divider */}
          <hr className="border-gray-200 my-4 w-full" />
          
          {/* Day 2 Block */}
          <div className="flex flex-col md:grid md:grid-cols-[100px_1fr_200px] gap-6 items-start mb-8">
            {/* Day Label */}
            <div className="w-full md:w-auto pt-2">
              <div className="inline-flex items-center justify-center bg-gray-200/50 text-gray-900 px-4 py-2 rounded-full font-semibold text-sm border border-gray-300">
                <span>Day 02</span>
              </div>
            </div>
            
            {/* Activities List */}
            <div className="flex flex-col w-full gap-2 relative">
              {/* Activity Item 1 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 rounded-lg bg-[#ecfccb]/60 flex items-center justify-center shrink-0 text-[#65a30d]">
                    <Mountain className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-start w-full gap-2">
                      <h3 className="font-semibold text-lg leading-snug text-gray-900">Mountain Hiking Trail</h3>
                      {/* Mobile Expense */}
                      <div className="md:hidden font-bold text-base text-[#4d7c0f] shrink-0">
                        $15.00
                      </div>
                    </div>
                    <p className="text-base text-gray-500 mt-1">Guided half-day hike through the national park.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="inline-flex px-2 py-1 bg-[#ecfccb] text-[#4d7c0f] text-xs font-semibold rounded">Adventure</span>
                      <span className="inline-flex px-2 py-1 bg-gray-100/80 text-gray-500 text-xs font-semibold rounded flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 8:00 AM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Flow Arrow */}
              <div className="flex justify-center py-2 text-gray-300 hidden md:flex">
                <ArrowDown className="w-6 h-6" />
              </div>
              
              {/* Activity Item 2 */}
              <div className="bg-white border border-gray-200 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-start gap-4 w-full">
                  <div className="w-12 h-12 rounded-lg bg-gray-200 flex items-center justify-center shrink-0 text-gray-500">
                    <Utensils className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-start w-full gap-2">
                      <h3 className="font-semibold text-lg leading-snug text-gray-900">Lunch at Peak View</h3>
                      {/* Mobile Expense */}
                      <div className="md:hidden font-bold text-base text-[#4d7c0f] shrink-0">
                        $35.00
                      </div>
                    </div>
                    <p className="text-base text-gray-500 mt-1">Local cuisine with a scenic mountain view.</p>
                    <div className="flex gap-2 mt-2">
                      <span className="inline-flex px-2 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded">Dining</span>
                      <span className="inline-flex px-2 py-1 bg-gray-100/80 text-gray-500 text-xs font-semibold rounded flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> 1:30 PM
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Expenses Column (Desktop) */}
            <div className="hidden md:flex flex-col w-full gap-2 pt-0.5">
              {/* Expense 1 */}
              <div className="h-[80px] bg-white border border-gray-200 rounded-lg flex items-center justify-end px-4 shadow-sm">
                <span className="font-bold text-lg text-[#4d7c0f]">$15.00</span>
              </div>
              {/* Spacer for arrow */}
              <div className="h-10"></div>
              {/* Expense 2 */}
              <div className="h-[80px] bg-white border border-gray-200 rounded-lg flex items-center justify-end px-4 shadow-sm">
                <span className="font-bold text-lg text-[#4d7c0f]">$35.00</span>
              </div>
            </div>
          </div>

        </div>

      </main>
      
      <Footer />
    </div>
  );
}
