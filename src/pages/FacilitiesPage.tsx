import Facilities from '../components/Facilities';
import { motion } from 'motion/react';

export default function FacilitiesPage() {
  return (
    <div className="pt-12">
      {/* Page Header */}
      <section className="bg-primary py-24 text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src="https://scontent.fvns6-3.fna.fbcdn.net/v/t1.6435-9/46070555_281671279145484_4745958648994332672_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=O-tSnhZYJGcQ7kNvwHAnYdZ&_nc_oc=Adp4vVVdtKegYtCEgIdNla5nh9JLytqU2Ke5KfcexBprvIk2yePHYsFHfqiv-uipEnLHeYuDkrjf7Ysp359tjf3a&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=Ijz_yxTKrH2bYfzinEkXeA&_nc_ss=7a3a8&oh=00_AfxJqtqPJuvhKJN_2IE2xv6v1uDz0_ADEdNQcJ6JBjPmQg&oe=69F3142B" alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6"
          >
            Our Facilities
          </motion.h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            State-of-the-art infrastructure designed to provide a rich learning experience.
          </p>
        </div>
      </section>

      <Facilities />
      
      {/* Extra Section: Transport */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="rounded-[3rem] overflow-hidden shadow-2xl h-96">
            <img src="https://scontent.fvns6-3.fna.fbcdn.net/v/t1.6435-9/51791385_317693482209930_2290306592085639168_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7b2446&_nc_ohc=BBbyDkQPs1YQ7kNvwGDgrp_&_nc_oc=AdqzDvppJKI1DOjn69nI8z7ZYeW5dddbdSn7VbFNG1Zn9U8CU_aS9ksIg1F9ERg6O3Z4pS5cPywloyL-pCvkQs-4&_nc_zt=23&_nc_ht=scontent.fvns6-3.fna&_nc_gid=CtozkRYeczSREAdvgkFiSg&_nc_ss=7a3a8&oh=00_Afwo1icFVydLL91owJjV8idvTP-ZU7p5JyldaoqWtA8R0g&oe=69F324B1" alt="School Bus" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-primary mb-6">Safe & Reliable Transport</h2>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our school bus fleet covers all major routes in the city. Each bus is equipped with GPS tracking and a dedicated attendant to ensure the safety of our students.
            </p>
            <ul className="space-y-4">
              {["GPS Tracking", "Trained Drivers", "Female Attendants", "Regular Maintenance"].map((item, i) => (
                <li key={i} className="flex items-center space-x-3 font-bold text-primary">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
