import { motion } from 'motion/react';
import { teachers } from '../data/teachers';

export default function Teachers() {
  return (
    <section className="md:py-20 py-6 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold text-primary mb-4">Meet Our Trusted Teachers & Staff</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Our educators are the heart of Little Flower School, bringing expertise and passion to every classroom.</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 md:gap-12 gap-10">
          {teachers.map((teacher, index) => (
            <motion.div
              key={teacher.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="relative inline-block mb-6">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
                  <img 
                    src={teacher.image} 
                    alt={teacher.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-accent text-primary px-4 py-1 rounded-full text-xs font-bold shadow-md whitespace-nowrap">
                  {teacher.experience} Exp.
                </div>
              </div>
              <h3 className="text-xl font-bold text-primary mb-1">{teacher.name}</h3>
              <p className="text-accent font-bold text-sm mb-2">{teacher.role}</p>
              <p className="text-gray-500 text-sm italic">{teacher.qualification}</p>
              
              {teacher.message && (
                <div className="md:mt-4 md:p-4 bg-white rounded-2xl border border-gray-100 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xs text-gray-600 italic">"{teacher.message}"</p>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
