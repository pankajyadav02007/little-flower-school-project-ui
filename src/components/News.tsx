import { motion } from 'motion/react';
import { news } from '../data/news';
import { Bell, ChevronRight, Info } from 'lucide-react';

export default function News() {
  return (
    <section className="py-4 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Latest News */}
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <div className="w-10 md:w-12 h-10 md:h-12 bg-primary rounded-2xl flex items-center justify-center text-white">
                <Bell size={18} md:size={24} />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-primary">Latest News</h2>
            </div>
            
            <div className="space-y-6">
              {news.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-all flex items-start space-x-6 group cursor-pointer"
                >
                  <div className="bg-gray-100 p-2 md:p-4 rounded-2xl text-primary group-hover:bg-accent transition-colors">
                    <ChevronRight size={24} />
                  </div>
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="text-xs font-bold text-accent uppercase tracking-widest">{item.date}</span>
                      {item.isImportant && (
                        <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold uppercase">Important</span>
                      )}
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.content}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Important Notices */}
          <div className="bg-primary rounded-[3rem] p-6 md:p-12 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="relative z-10">
              <div className="flex items-center space-x-3 mb-10">
                <div className="w-8 md:w-12 h-8 md:h-12 bg-accent rounded-2xl flex items-center justify-center text-primary">
                  <Info size={24} />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold">Notice Board</h2>
              </div>

              <div className="space-y-8">
                <div className="border-b border-white/10 pb-6">
                  <h4 className="text-accent font-bold mb-2">Admission 2026-27</h4>
                  <p className="text-gray-300 text-sm">Online admission forms are now available on the admissions page. Last date to apply is April 15th.</p>
                </div>
                <div className="border-b border-white/10 pb-6">
                  <h4 className="text-accent font-bold mb-2">Exam Schedule</h4>
                  <p className="text-gray-300 text-sm">Final term examinations for Class 1 to 9 will commence from March 10th. Download the date sheet below.</p>
                </div>
                <div>
                  <h4 className="text-accent font-bold mb-2">Parent-Teacher Meeting</h4>
                  <p className="text-gray-300 text-sm">A general PTM is scheduled for Saturday, April 5th at 9:00 AM in the school auditorium.</p>
                </div>
              </div>

              <button className="mt-12 bg-white text-primary px-2 md:px-8 py-2 md:py-4 rounded-full font-bold hover:bg-accent transition-all w-full">
                Download All Notices (PDF)
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
