// @ts-ignore;
import React, { useEffect, useState } from 'react';
// @ts-ignore;
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  return <>
      {isVisible && <button onClick={scrollToTop} className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-50 w-12 h-12 lg:w-14 lg:h-14 bg-[#D4AF37] text-[#0A1628] rounded-full shadow-lg hover:bg-[#C0C0C0] transition-all duration-300 transform hover:scale-110 flex items-center justify-center touch-manipulation animate-fade-in" aria-label="回到顶部">
          <ArrowUp className="w-5 h-5 lg:w-6 lg:h-6" />
        </button>}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>;
}