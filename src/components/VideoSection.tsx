'use client'
import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface VideoItem {
  id: number;
  title: string;
  episode: string;
  videoUrl: string;
  thumbnail: string;
}

const VIDEOS: VideoItem[] = [
  {
    id: 1,
    title: "Road to 7 Figure Agency",
    episode: "Episode 4",
    videoUrl: "https://youtube.com/shorts/8PLQbeoQXMI?si=S-U2aMsQQuHRZtn2",
    thumbnail: "blob:https://www.youtube.com/829196f9-6b83-48d3-b426-52f39c20c250"
  },
  {
    id: 2,
    title: "Learning to Earning",
    episode: "EP - 5",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-light-dancing-alone-34446-large.mp4",
    thumbnail: "https://picsum.photos/seed/learning/400/600"
  },
  {
    id: 3,
    title: "Learning to Earning",
    episode: "EP - 6",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-running-on-the-beach-at-sunset-1240-large.mp4",
    thumbnail: "https://picsum.photos/seed/earning/400/600"
  },
  {
    id: 4,
    title: "Mastering Content",
    episode: "EP - 7",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-man-under-multicolored-lights-1237-large.mp4",
    thumbnail: "https://picsum.photos/seed/content/400/600"
  },
  {
    id: 5,
    title: "The Future of AI",
    episode: "EP - 8",
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-hands-typing-on-a-laptop-keyboard-4342-large.mp4",
    thumbnail: "https://picsum.photos/seed/future/400/600"
  }
];

export default function VideoSection() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % VIDEOS.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + VIDEOS.length) % VIDEOS.length);
  };

  const handleVideoEnd = () => {
    handleNext();
  };

  // Handle Mouse Wheel Scroll
  const handleWheel = (e: React.WheelEvent) => {
    if (isScrolling) return;
    
    const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
    
    if (Math.abs(delta) > 20) {
      setIsScrolling(true);
      if (delta > 0) {
        handleNext();
      } else {
        handlePrev();
      }
      setTimeout(() => setIsScrolling(false), 600);
    }
  };

  // Handle Touch Swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
    setTouchStart(null);
  };

  useEffect(() => {
    // Pause all videos and play only the current one
    videoRefs.current.forEach((video, index) => {
      if (video) {
        if (index === currentIndex) {
          video.currentTime = 0;
          video.play().catch(() => {
            // Autoplay might be blocked until user interaction
            // We keep it muted to increase autoplay success rate
            console.log("Autoplay blocked - requires user interaction");
          });
        } else {
          video.pause();
        }
      }
    });
  }, [currentIndex]);

  return (
    <div 
      className="md:py-24 min-h-screen bg-white flex flex-col items-center justify-center p-4 overflow-hidden select-none"
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Header Section */}
      <div className="text-center mb-12 space-y-4">
        <div className="inline-block px-4 py-1 rounded-full border border-slate-200 text-sm text-slate-600 font-medium">
          Social Presence
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-slate-800 tracking-tight">
          Trusted by 130k+ People
        </h1>
        <p className="text-slate-500 text-sm">Swipe or scroll to explore</p>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full max-w-6xl h-[500px] md:h-[600px] flex items-center justify-center">
        <div className="flex items-center justify-center gap-4 md:gap-8 w-full relative">
          {VIDEOS.map((video, index) => {
            // Calculate relative position to current index
            let position = index - currentIndex;
            
            // Handle wrapping for circular carousel
            if (position < -Math.floor(VIDEOS.length / 2)) position += VIDEOS.length;
            if (position > Math.floor(VIDEOS.length / 2)) position -= VIDEOS.length;

            const isActive = position === 0;
            const isVisible = Math.abs(position) <= 1;

            return (
              <motion.div
                key={video.id}
                initial={false}
                animate={{
                  scale: isActive ? 1 : 0.8,
                  x: position * (window.innerWidth < 768 ? 200 : 350),
                  opacity: isVisible ? 1 : 0,
                  zIndex: isActive ? 10 : 5,
                  filter: isActive ? "blur(0px)" : "blur(2px)",
                }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                className={`absolute rounded-3xl overflow-hidden shadow-2xl bg-slate-100 cursor-pointer transition-all duration-500 ${
                  isActive ? 'w-[280px] h-[450px] md:w-[380px] md:h-[580px]' : 'w-[220px] h-[350px] md:w-[300px] md:h-[480px] opacity-40'
                }`}
                onClick={() => !isActive && setCurrentIndex(index)}
              >
                <video
                  ref={(el) => (videoRefs.current[index] = el)}
                  src={video.videoUrl}
                  poster={video.thumbnail}
                  className="w-full h-full object-cover"
                  muted
                  playsInline
                  onEnded={handleVideoEnd}
                />
                
                {/* Overlay Content */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-between p-6 text-white pointer-events-none">
                  <div className="text-center mt-4">
                    <h3 className="text-2xl md:text-3xl font-black uppercase tracking-wider drop-shadow-lg">
                      {video.episode}
                    </h3>
                  </div>
                  
                  <div className="text-center mb-4 space-y-1">
                    <p className="text-sm md:text-base font-medium italic opacity-90">
                      {video.title.split(' ').slice(0, 2).join(' ')}
                    </p>
                    <h4 className="text-xl md:text-2xl font-bold leading-tight drop-shadow-md">
                      {video.title}
                    </h4>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-12 flex flex-col items-center gap-8">
        <div className="flex items-center gap-6">
          <button
            onClick={handlePrev}
            className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
          >
            <ChevronLeft className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
          </button>

          <div className="flex items-center gap-2">
            {VIDEOS.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'w-8 bg-slate-800' : 'w-2 bg-slate-200 hover:bg-slate-300'
                }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-3 rounded-full bg-slate-50 hover:bg-slate-100 border border-slate-200 transition-colors group"
          >
            <ChevronRight className="w-6 h-6 text-slate-400 group-hover:text-slate-600" />
          </button>
        </div>
      </div>
    </div>
  );
}
