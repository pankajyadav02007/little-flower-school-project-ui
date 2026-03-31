import News from '../components/News';
import { motion } from 'motion/react';

export default function NewsPage() {
  return (
    <div className="pt-12">
      {/* Page Header */}
      <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://picsum.photos/seed/news-bg/1920/1080" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            News & Notices
          </motion.h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Stay updated with the latest announcements and news from our school.
          </p>
        </div>
      </section>

      <News />
    </div>
  );
}
