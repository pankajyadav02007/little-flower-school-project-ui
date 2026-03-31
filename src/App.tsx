import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Academics from './pages/Academics';
import Admissions from './pages/Admissions';
import Gallery from './pages/Gallery';
import ContactPage from './pages/ContactPage';
import Branches from './pages/Branches';
import Login from './pages/Login';
import FacilitiesPage from './pages/FacilitiesPage';
import EventsPage from './pages/EventsPage';
import ReviewsPage from './pages/ReviewsPage';
import NewsPage from './pages/NewsPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="academics" element={<Academics />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="branches" element={<Branches />} />
          <Route path="facilities" element={<FacilitiesPage />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="events" element={<EventsPage />} />
          <Route path="reviews" element={<ReviewsPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<Login />} />
          {/* Fallback for other routes */}
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </Router>
  );
}
