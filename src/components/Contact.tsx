import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section className="md:py-20 py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div>
            <h2 className="md:text-4xl text-2xl font-bold text-primary mb-8 leading-tight">Get in Touch with Us</h2>
            <p className="text-gray-600 md:text-lg mb-12 leading-relaxed">
              Have questions about admissions, facilities, or anything else? Our team is here to help you. Visit our campus or reach out to us via phone or email.
            </p>

            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="md:w-14 w-7 h-7 md:h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary md:text-xl mb-1">Our Location</h4>
                  <p className="text-gray-600">Civil Lines, Sultanpur, Uttar Pradesh - 228001</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="md:w-14 w-7 h-7 md:h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary md:text-xl mb-1">Call Us</h4>
                  <p className="text-gray-600">+91 98765 43210</p>
                  <p className="text-gray-600">+91 98765 43211</p>
                </div>
              </div>
              <div className="flex items-start space-x-6">
                <div className="md:w-14 w-7 h-7 md:h-14 bg-primary/5 rounded-2xl flex items-center justify-center text-primary shrink-0">
                  <Mail size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-primary md:text-xl mb-1">Email Us</h4>
                  <p className="text-gray-600">info@littleflower.edu.in</p>
                  <p className="text-gray-600">admissions@littleflower.edu.in</p>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="mt-12 rounded-3xl overflow-hidden h-64 shadow-lg border border-gray-100">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57183.05663737299!2d82.04368945!3d26.26578055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39909cf6e9e4905b%3A0x63353e66050a4f5!2sSultanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1711800000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 p-10 rounded-[3rem] shadow-sm border border-gray-100"
          >
            <h3 className="md:text-2xl text-xl font-bold text-primary mb-8">Send us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe" 
                    className="w-full px-3 md:px-6 py-2 md:py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Mobile Number</label>
                  <input 
                    type="tel" 
                    placeholder="+91 XXXXX XXXXX" 
                    className="w-full px-3 md:px-6 py-2 md:py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Email Address</label>
                <input 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full px-3 md:px-6 py-2 md:py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Subject</label>
                <select className="w-full px-3 md:px-6 py-2 md:py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                  <option>Admission Inquiry</option>
                  <option>General Question</option>
                  <option>Feedback</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Your Message</label>
                <textarea 
                  rows={4} 
                  placeholder="How can we help you?" 
                  className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                ></textarea>
              </div>
              <button className="w-full bg-primary text-white md:py-5 py-2.5 rounded-2xl font-bold hover:bg-accent hover:text-primary transition-all flex items-center justify-center space-x-3 shadow-xl">
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
