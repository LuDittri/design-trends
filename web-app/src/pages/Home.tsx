import { useRef, useState, useEffect } from 'react';
import { TrendCard } from '../components/TrendCard';
import { Typewriter } from '../components/Typewriter';
import { ChevronDown } from 'lucide-react';
import { useData } from '../context/DataContext';

export function Home() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [weekDropdownOpen, setWeekDropdownOpen] = useState(false);
  const { posts, availableWeeks, selectedWeek, setSelectedWeek } = useData();

  // 1. Get Top 1 post from each category
  const categoriesToHighlight = ['UI/UX', 'Figma', 'Design Gráfico', 'Design Industrial'];
  const highlights: any[] = [];
  const highlightedIds = new Set<string>();

  categoriesToHighlight.forEach(catLabel => {
    const topPost = posts.find(p => p.category === catLabel);
    if (topPost) {
      highlights.push(topPost);
      highlightedIds.add(topPost.id);
    }
  });

  // 2. Get "Latest Curations" - all other posts sorted by date
  // We exclude the ones already shown in highlights to avoid duplication
  const latestCurations = posts
    .filter(p => !highlightedIds.has(p.id))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 8); // Limit to 8 posts max

  // Calculate reference date based on selected week number
  // Formula: Feb 2, 2026 + (selectedWeek - 1) * 7 days
  const referenceDate = selectedWeek
    ? (() => {
      const d = new Date('2026-02-02T00:00:00');
      d.setDate(d.getDate() + (selectedWeek - 1) * 7);
      return d.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      });
    })()
    : '';

  // Calculate relative week index (latest = highest number)
  const sortedWeeks = [...availableWeeks].sort((a, b) => a.week_number - b.week_number);

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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = () => setWeekDropdownOpen(false);
    if (weekDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [weekDropdownOpen]);

  return (
    <div className="min-h-screen pt-32 pb-8 px-6 md:px-12 max-w-[1920px] mx-auto bg-white dark:bg-black transition-colors duration-300">

      {/* Title Section */}
      <div className="mb-16 md:mb-24">
        <div className="flex flex-col md:flex-row justify-between items-end relative gap-12 md:gap-0">
          <div className="max-w-[700px]">
            <h1 className="text-8xl md:text-[128px] font-bold tracking-[-0.04em] text-black dark:text-white leading-[0.9]">
              Design<br />Trends
            </h1>
            <p className="mt-8 md:mt-10 text-lg md:text-xl text-gray-500 dark:text-gray-400 leading-[1.8] tracking-wide font-light max-w-[420px] lg:max-w-[480px]">
              <Typewriter text={"Toda segunda-feira, analisamos milhares de discussões em comunidades de design no Reddit e destacamos as 10 tendências mais relevantes por categoria."} />
            </p>
          </div>
          <div className="text-right pb-4 flex flex-col items-end md:absolute md:right-0 md:bottom-2">
            <div className="mb-1">
              <span className="text-[12px] font-medium text-gray-400 dark:text-gray-500 uppercase tracking-[0.05em] block text-right mb-1">EDIÇÃO ATUAL</span>
              <div className="relative inline-block">
                <button
                  onClick={(e) => { e.stopPropagation(); setWeekDropdownOpen(!weekDropdownOpen); }}
                  className="flex items-center gap-2 text-[30px] font-normal text-black dark:text-white leading-none hover:opacity-70 transition-opacity cursor-pointer"
                >
                  Semana {selectedWeek}
                  <ChevronDown size={20} className={`transition-transform duration-200 ${weekDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Dropdown */}
                {weekDropdownOpen && availableWeeks.length > 1 && (
                  <div className="absolute right-0 top-full mt-2 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg z-50 min-w-[180px] overflow-hidden">
                    {sortedWeeks.map((week) => {
                      // Calculate date based on week number: Feb 2, 2026 + (week-1)*7 days
                      const startDate = new Date('2026-02-02T00:00:00');
                      startDate.setDate(startDate.getDate() + (week.week_number - 1) * 7);
                      const weekDate = startDate.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short' });
                      return (
                        <button
                          key={week.week_number}
                          onClick={(e) => { e.stopPropagation(); setSelectedWeek(week.week_number); setWeekDropdownOpen(false); }}
                          className={`w-full text-left px-4 py-3 text-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center justify-between ${selectedWeek === week.week_number ? 'bg-gray-50 dark:bg-gray-800 font-medium' : ''}`}
                        >
                          <span className="text-black dark:text-white">Semana {week.week_number}</span>
                          <span className="text-gray-400 dark:text-gray-500 text-xs">{weekDate}</span>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
            {referenceDate && (
              <span className="text-[11px] font-normal text-gray-400 dark:text-gray-500 tracking-wide">
                {referenceDate}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Carousel Section (Highlights) */}
      <div className="space-y-6 mb-24">
        <h2 className="text-[48px] font-bold tracking-[-0.025em] leading-none text-black dark:text-white">Destaques</h2>

        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:snap-none"
        >
          {highlights.map((trend, index) => (
            <div key={trend.id} className="min-w-[85vw] md:min-w-0 snap-center">
              <TrendCard
                id={trend.id}
                title={trend.title}
                subtitle={trend.subtitle}
                category={trend.category}
                image={trend.image}

                numComments={trend.num_comments}
                score={trend.score}
                size="large"
                className="h-[400px] md:h-[500px]"
                priority={index < 2}
              />
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex justify-center gap-2 md:hidden">
          {highlights.map((_, index) => (
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
          {latestCurations.map((item) => (
            <TrendCard
              key={item.id}
              id={item.id}
              title={item.title}
              subtitle={item.subtitle}
              category={item.category}
              image={item.image}

              numComments={item.num_comments}
              score={item.score}
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
