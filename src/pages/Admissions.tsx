import { motion } from 'motion/react';
import { Download, CheckCircle, FileText, UserPlus, HelpCircle } from 'lucide-react';

export default function Admissions() {
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
            Join Our Family
          </motion.h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Admissions are now open for the academic session 2026-27. Secure your child's future today.
          </p>
        </div>
      </section>

      {/* Admission Process */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Admission Process</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Inquiry & Visit", desc: "Visit our campus or fill the online inquiry form to know more about the school." },
              { step: "02", title: "Registration", desc: "Purchase the prospectus and register your child for the admission process." },
              { step: "03", title: "Interaction", desc: "A friendly interaction with the child and parents to understand mutual goals." },
              { step: "04", title: "Confirmation", desc: "Submit required documents and pay the fees to confirm the admission." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 bg-gray-50 rounded-[2rem] border border-gray-100 text-center"
              >
                <div className="text-5xl font-bold text-primary/10 absolute top-4 right-8">{item.step}</div>
                <div className="w-16 h-16 bg-primary text-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <UserPlus size={32} />
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Required Documents & Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Documents */}
          <div>
            <h2 className="text-3xl font-bold text-primary mb-8">Required Documents</h2>
            <div className="space-y-4">
              {[
                "Birth Certificate (Original & Photocopy)",
                "Transfer Certificate (from previous school)",
                "Report Card of previous class",
                "4 Passport size photographs of the student",
                "2 Passport size photographs of parents",
                "Aadhar Card of student and parents",
                "Address Proof (Electricity bill/Voter ID)"
              ].map((doc, i) => (
                <div key={i} className="flex items-center space-x-4 bg-white p-4 rounded-2xl shadow-sm border border-gray-100">
                  <CheckCircle size={20} className="text-green-500 shrink-0" />
                  <span className="text-gray-700 font-medium">{doc}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-12 flex flex-wrap gap-4">
              <button className="bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-accent hover:text-primary transition-all flex items-center space-x-3 shadow-xl">
                <Download size={20} />
                <span>Download Admission Form</span>
              </button>
              <button className="bg-white text-primary border-2 border-primary px-8 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-all flex items-center space-x-3">
                <FileText size={20} />
                <span>View Fee Structure</span>
              </button>
            </div>
          </div>

          {/* Inquiry Form */}
          <div className="bg-white p-10 rounded-[3rem] shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center space-x-3">
              <HelpCircle size={28} className="text-accent" />
              <span>Admission Inquiry Form</span>
            </h3>
            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Student Name</label>
                <input type="text" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Applying for Class</label>
                  <select className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all">
                    <option>Nursery</option>
                    <option>KG</option>
                    <option>Class 1</option>
                    <option>Class 11 (Science)</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary">Parent Mobile</label>
                  <input type="tel" className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-primary">Message/Query</label>
                <textarea rows={3} className="w-full px-6 py-4 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"></textarea>
              </div>
              <button className="w-full bg-primary text-white py-5 rounded-2xl font-bold hover:bg-accent hover:text-primary transition-all shadow-xl">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
