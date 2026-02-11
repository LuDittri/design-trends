import { Routes, Route, BrowserRouter, useLocation } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Category } from './pages/Category';
import { Post } from './pages/Post';
import { ScrollToTop } from './components/ScrollToTop';
import { ReadingModeProvider } from './context/ReadingModeContext';
import { ThemeProvider } from './context/ThemeContext';
import { AnimatePresence } from 'motion/react';
import { PageTransition } from './components/PageTransition';
import { DataProvider } from './context/DataContext';

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

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <ReadingModeProvider>
          <DataProvider>
            <div className="font-sans antialiased text-black bg-white dark:bg-black dark:text-white selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-300">
              <ScrollToTop />
              <Header />
              <main>
                <AnimatedRoutes />
              </main>
              <Footer />
            </div>
          </DataProvider>
        </ReadingModeProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
