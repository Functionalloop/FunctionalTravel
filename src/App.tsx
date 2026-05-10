/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Login from './pages/Login';
import Home from './pages/Home';
import BuildItinerary from './pages/BuildItinerary';
import PlanTrip from './pages/PlanTrip';
import Profile from './pages/Profile';
import Itineraries from './pages/Itineraries';
import ActivitySearch from './pages/ActivitySearch';
import ItineraryView from './pages/ItineraryView';
import PackingChecklist from './pages/PackingChecklist';
import AdminDashboard from './pages/AdminDashboard';
import Notifications from './pages/Notifications';
import TripNotes from './pages/TripNotes';
import TripTimeline from './pages/TripTimeline';

import ExpenseInvoice from './pages/ExpenseInvoice';

import Community from './pages/Community';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/build-itinerary" element={<BuildItinerary />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/itineraries" element={<Itineraries />} />
          <Route path="/itinerary-view" element={<ItineraryView />} />
          <Route path="/search" element={<ActivitySearch />} />
          <Route path="/community" element={<Community />} />
          <Route path="/packing" element={<PackingChecklist />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/notes" element={<TripNotes />} />
          <Route path="/timeline" element={<TripTimeline />} />
          <Route path="/invoice" element={<ExpenseInvoice />} />
          {/* We will add other routes here as they are provided */}
        </Route>
      </Routes>
    </Router>
  );
}
