import { motion } from 'motion/react';
import { events } from '../data/events';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-primary mb-4">Events & Activities</h2>
            <p className="text-gray-600">Capturing the vibrant life and celebrations at Little Flower School. From cultural fests to scientific explorations.</p>
          </div>
          <Link to="/events" className="bg-primary text-white px-8 py-3 rounded-full font-bold hover:bg-accent hover:text-primary transition-all flex items-center space-x-2">
            <span>View All Events</span>
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative h-64 rounded-3xl overflow-hidden mb-6 shadow-md">
                <img 
                  src={event.image} 
                  alt={event.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary flex items-center space-x-2">
                  <Calendar size={12} className="text-accent" />
                  <span>{event.date}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">{event.title}</h3>
              <p className="text-gray-500 text-sm line-clamp-2 leading-relaxed">{event.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
