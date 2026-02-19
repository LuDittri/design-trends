import { Routes, Route, HashRouter, useLocation } from 'react-router';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { useData } from './context/DataContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { lazy, Suspense } from 'react';
import { ScrollToTop } from './components/ScrollToTop';
import { ReadingModeProvider } from './context/ReadingModeContext';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'motion/react';
import { PageTransition } from './components/PageTransition';
import { DataProvider } from './context/DataContext';

// Lazy load pages for code splitting
const Home = lazy(() => import('./pages/Home').then(m => ({ default: m.Home })));
const Category = lazy(() => import('./pages/Category').then(m => ({ default: m.Category })));
const Post = lazy(() => import('./pages/Post').then(m => ({ default: m.Post })));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={
          <PageTransition>
            <Home />
          </PageTransition>
        } />
        <Route path="/category/:id" element={
          <PageTransition>
            <Category />
          </PageTransition>
        } />
        <Route path="/post/:id" element={
          <PageTransition>
            <Post />
          </PageTransition>
        } />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  const { error } = useData();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black p-6">
        <div className="max-w-md w-full bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 text-center">
          <h2 className="text-xl font-bold text-red-600 dark:text-red-400 mb-2">Erro de Conexão</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
          <div className="text-sm text-gray-500 dark:text-gray-400 text-left bg-white dark:bg-black/50 p-4 rounded border border-gray-100 dark:border-gray-800 font-mono">
            <p className="font-bold mb-2">Troubleshooting:</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Verifique sua conexão com a internet.</li>
              <li>Se você é o desenvolvedor, verifique se as variáveis de ambiente <code>VITE_SUPABASE_URL</code> e <code>VITE_SUPABASE_ANON_KEY</code> estão configuradas corretamente no Vercel/Netlify.</li>
            </ul>
          </div>
          <button
            onClick={() => window.location.reload()}
            className="mt-6 px-6 py-2 bg-red-600 hover:bg-red-700 text-white font-medium rounded-full transition-colors"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans antialiased text-black bg-white dark:bg-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
      <ScrollToTop />
      <Header />
      <main>
        <Suspense fallback={
          <div className="min-h-[60vh] flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-black dark:border-white border-t-transparent rounded-full animate-spin"></div>
          </div>
        }>
          <AnimatedRoutes />
        </Suspense>
      </main>
      <Footer />
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <ThemeProvider>
        <ReadingModeProvider>
          <DataProvider>
            <AppContent />
          </DataProvider>
        </ReadingModeProvider>
      </ThemeProvider>
    </HashRouter>
  );
}

export default App;
