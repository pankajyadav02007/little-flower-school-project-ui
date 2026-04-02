import Events from '../components/Events';
import { motion } from 'motion/react';

export default function EventsPage() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-primary md:py-24 py-12 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/events-bg/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:text-5xl text-2xl md:text-6xl font-bold mb-6"
          >
            Events & Activities
          </motion.h1>
          <p className="md:text-xl text-gray-300 leading-relaxed">
            Celebrating talent, culture, and innovation at Little Flower School.
          </p>
        </div>
      </section>

      <Events />
    </div>
  );
}
