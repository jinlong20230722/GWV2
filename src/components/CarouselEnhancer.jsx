// @ts-ignore;
import React, { useState, useCallback, useRef, useEffect } from 'react';
// @ts-ignore;
import { ChevronLeft, ChevronRight, Pause, Play, Info, X } from 'lucide-react';

export const EnhancedCarousel = ({
  slides,
  autoPlay = true,
  interval = 5000,
  showIndicators = true,
  showControls = true,
  showPauseButton = true,
  onSlideChange
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const carouselRef = useRef(null);
  const autoPlayRef = useRef(null);
  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev + 1) % slides.length);
  }, [slides.length]);
  const prevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev - 1 + slides.length) % slides.length);
  }, [slides.length]);
  const goToSlide = useCallback(index => {
    setCurrentSlide(index);
  }, []);
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  // 键盘导航支持
  useEffect(() => {
    const handleKeyDown = e => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === ' ') {
        e.preventDefault();
        togglePause();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, togglePause]);

  // 自动播放
  useEffect(() => {
    if (autoPlay && !isPaused) {
      autoPlayRef.current = setInterval(nextSlide, interval);
    } else {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    }
    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [autoPlay, isPaused, interval, nextSlide]);

  // 通知父组件轮播变化
  useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentSlide);
    }
  }, [currentSlide, onSlideChange]);
  return <div ref={carouselRef} className="relative w-full overflow-hidden" aria-roledescription="carousel">
      {/* 幻灯片容器 */}
      <div className="flex transition-transform duration-500 ease-out" style={{
      transform: `translateX(-${currentSlide * 100}%)`
    }}>
        {slides.map((slide, index) => <div key={index} className="min-w-full flex-shrink-0" role="group" aria-roledescription="slide" aria-label={`${index + 1} / ${slides.length}`}>
            {slide.content}
          </div>)}
      </div>

      {/* 控制按钮 */}
      {showControls && <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prevSlide} className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110" aria-label="上一张">
            <ChevronLeft className="w-6 h-6 text-gray-800" />
          </button>

          <button onClick={nextSlide} className="w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110" aria-label="下一张">
            <ChevronRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>}

      {/* 暂停按钮 */}
      {showPauseButton && <div className="absolute top-4 right-4 z-10">
          <button onClick={togglePause} className="w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300" aria-label={isPaused ? '播放' : '暂停'}>
            {isPaused ? <Play className="w-5 h-5 text-gray-800" /> : <Pause className="w-5 h-5 text-gray-800" />}
          </button>
        </div>}

      {/* 指示器 */}
      {showIndicators && <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => <button key={index} onClick={() => goToSlide(index)} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#D4AF37] w-8 rounded' : 'bg-white/50 hover:bg-white/80'}`} aria-label={`跳转到第 ${index + 1} 张`} />)}
        </div>}

      {/* 帮助提示 */}
      <div className="absolute bottom-4 right-4">
        <button onClick={() => setShowTooltip(!showTooltip)} className="w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300" aria-label="轮播图帮助">
          <Info className="w-4 h-4 text-gray-800" />
        </button>

        {showTooltip && <div className="absolute bottom-12 right-0 bg-white rounded-lg shadow-xl p-4 min-w-[200px] z-20">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-bold text-gray-800">轮播图使用说明</h4>
              <button onClick={() => setShowTooltip(false)} className="text-gray-400 hover:text-gray-600">
                <X className="w-4 h-4" />
              </button>
            </div>
            <ul className="text-sm text-gray-600 space-y-1">
              <li>• 点击左右箭头切换</li>
              <li>• 按空格键暂停/播放</li>
              <li>• 使用键盘左右键切换</li>
              <li>• 点击指示器跳转到指定位置</li>
            </ul>
          </div>}
      </div>
    </div>;
};
export const BannerCarousel = ({
  banners
}) => {
  const slides = banners.map(banner => ({
    content: <div className="relative h-[300px] md:h-[500px] lg:h-[600px]">
        <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
          <div className="absolute bottom-8 left-8 right-8">
            <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
              {banner.title}
            </h3>
            {banner.description && <p className="text-gray-200 text-lg">{banner.description}</p>}
          </div>
        </div>
      </div>
  }));
  return <EnhancedCarousel slides={slides} />;
};
export const TestimonialCarousel = ({
  testimonials
}) => {
  const slides = testimonials.map(testimonial => ({
    content: <div className="p-8 bg-gradient-to-br from-[#2D3748] to-[#1a202c] rounded-3xl">
        <div className="flex items-center mb-4">
          {testimonial.avatar && <img src={testimonial.avatar} alt={testimonial.author} className="w-16 h-16 rounded-full mr-4" />}
          <div>
            <h4 className="text-white font-bold">{testimonial.author}</h4>
            <p className="text-[#D4AF37] text-sm">{testimonial.role}</p>
          </div>
        </div>
        <p className="text-gray-300 text-lg italic">
          "{testimonial.content}"
        </p>
        {testimonial.rating && <div className="flex mt-4">
            {[...Array(testimonial.rating)].map((_, i) => <span key={i} className="text-[#D4AF37]">★</span>)}
          </div>}
      </div>
  }));
  return <EnhancedCarousel slides={slides} interval={8000} />;
};