import Contact from '../components/Contact';
import { motion } from 'motion/react';

export default function ContactPage() {
  return (
    <div className="pt-12">
      {/* Page Header */}
      <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://scontent.fvns6-2.fna.fbcdn.net/v/t1.6435-9/49019346_300245203954758_7991892140135284736_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=7b2446&_nc_ohc=Rrd2S6UY3eQQ7kNvwExXCJh&_nc_oc=AdpWrSb2toBvUhVwpWTI5p3_9uOeZuOUijlADbzdRabxOv3VndeqG_hjWxw2_kRxljIahhz-KVyqCMsU-0i3bfN2&_nc_zt=23&_nc_ht=scontent.fvns6-2.fna&_nc_gid=RFfY0wQTDxfcfQ5vlwlgiw&_nc_ss=7a3a8&oh=00_AfzII9KVqghILLoz4ciYg4nlvKeUUD9v78vJP4LGw1Laww&oe=69F2F42D" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Contact Us
          </motion.h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're here to answer your questions and welcome you to our campus.
          </p>
        </div>
      </section>

      <Contact />
    </div>
  );
}
