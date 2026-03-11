// @ts-ignore;
import React, { useState, useEffect, useCallback } from 'react';
// @ts-ignore;
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

export const EnhancedHeroCarousel = ({
  slides,
  autoPlay = true,
  interval = 5000
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState('next');
  const nextSlide = useCallback(() => {
    setDirection('next');
    setCurrentIndex(prev => (prev + 1) % slides.length);
  }, [slides.length]);
  const prevSlide = useCallback(() => {
    setDirection('prev');
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);
  const goToSlide = useCallback(index => {
    setDirection(index > currentIndex ? 'next' : 'prev');
    setCurrentIndex(index);
  }, [currentIndex]);
  useEffect(() => {
    if (autoPlay && !isPaused) {
      const timer = setInterval(nextSlide, interval);
      return () => clearInterval(timer);
    }
  }, [autoPlay, isPaused, interval, nextSlide]);
  return <div className="relative overflow-hidden" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      {/* Slides */}
      {slides.map((slide, index) => {
      const isActive = index === currentIndex;
      let slideClass = 'absolute inset-0 transition-all duration-700 ease-in-out';
      if (isActive) {
        slideClass += ' opacity-100 translate-x-0 z-20';
      } else {
        slideClass += ' opacity-0 z-0';
      }
      return <div key={index} className={slideClass}>
            {slide.content}
          </div>;
    })}

      {/* Controls Container */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex items-center space-x-4">
        {/* Previous Button */}
        <button onClick={prevSlide} className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20">
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>

        {/* Dots */}
        <div className="flex space-x-2">
          {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`relative rounded-full transition-all duration-300 ${index === currentIndex ? 'w-12 h-3 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] shadow-lg shadow-[#D4AF37]/50' : 'w-3 h-3 bg-white/40 hover:bg-white/70'}`}>
              {index === currentIndex && <span className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#C0C0C0] rounded-full animate-pulse" />}
            </button>)}
        </div>

        {/* Next Button */}
        <button onClick={nextSlide} className="w-12 h-12 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20">
          <ChevronRight className="w-6 h-6 text-white" />
        </button>

        {/* Play/Pause Button */}
        <button onClick={() => setIsPaused(!isPaused)} className="w-10 h-10 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20">
          {isPaused ? <Play className="w-5 h-5 text-white fill-current" /> : <Pause className="w-5 h-5 text-white fill-current" />}
        </button>
      </div>
    </div>;
};
export default EnhancedHeroCarousel;