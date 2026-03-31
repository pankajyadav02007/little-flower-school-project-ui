import Hero from '../components/Hero';
import WhyChooseUs from '../components/WhyChooseUs';
import Programs from '../components/Programs';
import Teachers from '../components/Teachers';
import Reviews from '../components/Reviews';
import Facilities from '../components/Facilities';
import Sports from '../components/Sports';
import Events from '../components/Events';
import News from '../components/News';
import GalleryPreview from '../components/GalleryPreview';
import AdmissionCTA from '../components/AdmissionCTA';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Hero />
      <WhyChooseUs />
      <News />
      <Programs />
      <Teachers />
      <Reviews />
      <Facilities />
      <Sports />
      <Events />
      <GalleryPreview />
      <AdmissionCTA />
      <Contact />
    </>
  );
}
