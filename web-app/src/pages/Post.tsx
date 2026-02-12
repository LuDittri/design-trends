
import { useData } from '../context/DataContext';
import { Link, useParams } from 'react-router';
import { ArrowLeft, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ParallaxImage } from '../components/ParallaxImage';
import { useReadingMode } from '../context/ReadingModeContext';

import { Typewriter } from '../components/Typewriter';
import svgPaths from '../imports/svg-afacozdf1l';

// Reddit Icon Component
function IcBaselineReddit() {
  return (
    <div className="relative shrink-0 w-6 h-6">
      <svg className="block w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ic:baseline-reddit">
          <path d={svgPaths.p31acfe80} fill="currentColor" id="Vector" />
          <path d={svgPaths.p1d9dd780} fill="currentColor" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

export function Post() {
  const { id } = useParams();
  const { isReadingMode, toggleReadingMode } = useReadingMode();

  const { posts } = useData();

  // Find the post
  const postIndex = posts.findIndex(p => p.id === id);
  const post = posts[postIndex];
  const nextPost = posts[postIndex + 1];

  if (!post) return <div>Post not found</div>;

  return (
    <div className={`min-h-screen bg-white dark:bg-black transition-colors duration-300 ${isReadingMode ? 'py-20' : 'pt-32 pb-20'}`}>

      {/* Reading Mode Toggle - Fixed Bottom Right */}
      <button
        onClick={toggleReadingMode}
        className="fixed bottom-8 right-8 z-50 p-4 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-lg hover:scale-105 transition-transform"
        title={isReadingMode ? "Sair do modo leitura" : "Modo leitura"}
      >
        {isReadingMode ? <EyeOff className="w-6 h-6" /> : <Eye className="w-6 h-6" />}
      </button>

      <article className={`mx-auto px-6 md:px-12 transition-all duration-700 ${isReadingMode ? 'max-w-2xl' : 'max-w-4xl'}`}>

        {/* Editorial Header */}
        <div className={`text-center transition-all duration-500 ${isReadingMode ? 'mb-8' : 'mb-12'}`}>
          {!isReadingMode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              <span className="px-3 py-1 border border-gray-200 dark:border-white/20 rounded-full text-xs font-medium uppercase tracking-wider text-gray-500 dark:text-gray-400">
                {post.category}
              </span>
            </motion.div>
          )}

          <h1 className={`${isReadingMode ? 'text-4xl md:text-5xl' : 'text-5xl md:text-7xl'} font-bold tracking-tight mb-8 leading-tight transition-all duration-500 text-black dark:text-white`}>
            {post.title}
          </h1>

          {!isReadingMode && (
            <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-[1.8] tracking-wide font-light">
              <Typewriter text={post.subtitle} />
            </p>
          )}
        </div>

        {/* Hero Image - Hidden in Reading Mode */}
        <AnimatePresence>
          {!isReadingMode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative aspect-[16/9] mb-12 rounded-[40px] overflow-hidden shadow-sm group"
            >
              <ParallaxImage src={post.image} alt={post.title} className="w-full h-full" />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Content Layout */}
        <div className={`grid grid-cols-1 ${isReadingMode ? 'gap-0' : 'md:grid-cols-12 gap-12'}`}>

          {/* Sidebar / Meta - Hidden in Reading Mode */}
          {!isReadingMode && (
            <div className="md:col-span-3 space-y-8 sticky top-32 h-fit hidden md:block">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">Curadoria por</h4>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-black dark:bg-white rounded-full" />
                  <span className="font-medium text-black dark:text-white">Editorial Team</span>
                </div>
              </div>

              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500 mb-4">Tags</h4>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-gray-50 dark:bg-white/10 rounded-lg text-sm text-gray-600 dark:text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>


            </div>
          )}

          {/* Main Text */}
          <div className={`${isReadingMode ? 'w-full' : 'md:col-span-8 md:col-start-5'}`}>
            <p className={`text-2xl leading-relaxed font-medium mb-12 drop-cap ${isReadingMode ? 'font-serif text-gray-900 dark:text-gray-100' : 'text-black dark:text-white'}`}>
              {post.content.intro}
            </p>

            {/* Expandable Insight Block */}
            {!isReadingMode && (
              <div className="bg-gray-50 dark:bg-white/5 rounded-2xl p-8 mb-12">
                <h3 className="text-lg font-bold mb-2 text-black dark:text-white">
                  Por que isso importa
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed pt-2">
                  {post.content.whyItMatters}
                </p>
              </div>
            )}

            <div className={`space-y-6 text-lg leading-relaxed ${isReadingMode ? 'font-serif text-xl text-gray-900 dark:text-gray-100' : 'text-gray-800 dark:text-gray-300'}`}>
              {post.content.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>

            {/* Reddit Button - End of Content */}
            {!isReadingMode && (
              <div className="mt-12 flex justify-center">
                <a href={post.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-full shadow-[0px_10px_15px_0px_rgba(0,0,0,0.1),0px_4px_6px_0px_rgba(0,0,0,0.1)] hover:opacity-90 transition-opacity">
                  <IcBaselineReddit />
                  <span className="text-sm font-medium">Acessar artigo do reddit</span>
                </a>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        {!isReadingMode && (
          <div className="mt-12 pt-12 border-t border-gray-200 dark:border-white/10 flex justify-between items-center">
            <Link to="/" className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider hover:text-gray-600 dark:hover:text-gray-300 text-black dark:text-white transition-colors">
              <ArrowLeft className="w-4 h-4" /> Voltar para tendências
            </Link>

            {nextPost && (
              <Link to={`/post/${nextPost.id}`} className="group text-right">
                <span className="block text-xs text-gray-400 dark:text-gray-500 mb-1">Próxima tendência</span>
                <span className="text-xl font-bold flex items-center gap-2 group-hover:underline text-black dark:text-white">
                  {nextPost.title} <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            )}
          </div>
        )}

      </article>
    </div>
  );
}
