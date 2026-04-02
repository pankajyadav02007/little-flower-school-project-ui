import { motion } from 'motion/react';
import { Lock, Mail, User, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div className="min-h-screen  pb-12 bg-gray-50 flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100"
      >
        <div className="bg-primary p-10 text-white text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <h2 className="md:text-3xl text-2xl font-bold mb-2">Welcome Back</h2>
          <p className="text-gray-400 text-sm">Student & Parent Portal Login</p>
        </div>

        <div className="p-10">
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="text-sm font-bold text-primary ml-2">Admission Number / Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <User size={20} />
                </div>
                <input 
                  type="text" 
                  placeholder="LF-2024-001" 
                  className="w-full pl-12 pr-6 md:py-4 py-2 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between items-center ml-2">
                <label className="text-sm font-bold text-primary">Password</label>
                <a href="#" className="text-xs text-accent font-bold hover:underline">Forgot Password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <Lock size={20} />
                </div>
                <input 
                  type="password" 
                  placeholder="••••••••" 
                  className="w-full pl-12 pr-6 md:py-4 py-2 rounded-2xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                />
              </div>
            </div>

            <div className="flex items-center space-x-2 ml-2">
              <input type="checkbox" id="remember" className="w-4 h-4 rounded border-gray-300 text-primary focus:ring-primary" />
              <label htmlFor="remember" className="text-sm text-gray-600">Remember me</label>
            </div>

            <button className="w-full bg-primary text-white md:py-5 py-2.5 rounded-2xl font-bold hover:bg-accent hover:text-primary transition-all flex items-center justify-center space-x-3 shadow-xl group">
              <span>Login to Portal</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm">
              Don't have an account? <Link to="/contact" className="text-primary font-bold hover:underline">Contact Office</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
