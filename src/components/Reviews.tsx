import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Star, Quote } from 'lucide-react';
import { reviews } from '../data/reviews';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function Reviews() {
  return (
    <section className="md:py-20 py-12 bg-primary text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="md:text-4xl text-2xl font-bold mb-4">What Parents Say About Us</h2>
          <div className="flex items-center justify-center space-x-2 text-accent mb-4">
            <Star size={20} fill="currentColor" />
            <span className="text-xl font-bold">4.8/5 Average Rating</span>
          </div>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          autoplay={{ delay: 5000 }}
          pagination={{ clickable: true }}
          className="pb-16"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 h-full flex flex-col">
                <div className="mb-6 text-accent">
                  <Quote size={40} fill="currentColor" className="opacity-50" />
                </div>
                <p className="text-gray-200 italic mb-8 flex-grow leading-relaxed">
                  "{review.text}"
                </p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={review.image} 
                    alt={review.name} 
                    className="w-12 h-12 rounded-full border-2 border-accent"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="font-bold text-white">{review.name}</h4>
                    <p className="text-xs text-accent font-medium">Parent of {review.childClass}</p>
                  </div>
                  <div className="ml-auto flex text-accent">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} size={14} fill="currentColor" />
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
