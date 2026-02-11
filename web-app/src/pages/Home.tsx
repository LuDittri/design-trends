import { useRef, useState, useEffect } from 'react';
import { TrendCard } from '../components/TrendCard';

import { useData } from '../context/DataContext';

export function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { posts } = useData();

  // Use the first 3 posts for the "Destaques" carousel
  const trends = posts.slice(0, 3);

  // Use the next 4 posts for the "Últimas curadorias" section
  const curations = posts.slice(3, 7);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollLeft = scrollContainerRef.current.scrollLeft;
      const width = scrollContainerRef.current.offsetWidth;
      const index = Math.round(scrollLeft / width);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-8 px-6 md:px-12 max-w-[1920px] mx-auto bg-white dark:bg-black transition-colors duration-300">

      {/* Title Section */}
      <div className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end relative gap-12 md:gap-0">
          <div>
            <h1 className="text-8xl md:text-[128px] font-bold tracking-[-0.04em] text-black dark:text-white leading-[0.9]">
              Design<br />Trends
            </h1>
          </div>
          <div className="text-right pb-4 flex flex-col items-end md:absolute md:right-0 md:bottom-2">
            <div className="mb-2">
              <span className="text-[12px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-[0.05em] block text-right mb-1">EDIÇÃO ATUAL</span>
              <span className="text-[30px] font-normal text-black dark:text-white block leading-none">Semana 1</span>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="space-y-6 mb-24">
        <div className="flex items-center justify-between">
          <h2 className="text-[48px] font-bold tracking-[-0.025em] leading-none text-black dark:text-white">Destaques</h2>
          <div className="hidden md:flex gap-2">
            {/* Desktop Navigation could go here */}
          </div>
        </div>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-3 md:overflow-visible md:snap-none"
        >
          {trends.map((trend) => (
            <div key={trend.id} className="min-w-[85vw] md:min-w-0 snap-center">
              <TrendCard
                id={trend.id}
                title={trend.title}
                category={trend.category}
                image={trend.image}
                date={trend.date}
                size="large"
                className="h-[400px] md:h-[500px]"
              />
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 md:hidden">
          {trends.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${index === activeIndex ? 'bg-black dark:bg-white' : 'bg-gray-300 dark:bg-gray-700'
                }`}
            />
          ))}
        </div>
      </div>

      {/* Latest Curations Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-800 pt-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">Últimas curadorias</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">
          {curations.map((item) => (
            <TrendCard
              key={item.id}
              id={item.id}
              title={item.title}
              category={item.category}
              image={item.image}
              date={item.date}
              size="small"
              className="h-[320px]"
              hideArrow
            />
          ))}
        </div>

      </div>

    </div>
  );
}
