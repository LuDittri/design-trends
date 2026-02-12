import { Link } from 'react-router';
import { Home, Layout, Sun, Moon, Menu, X } from 'lucide-react';
import { useReadingMode } from '../context/ReadingModeContext';
import { useTheme } from '../context/ThemeContext';
import { Logo } from './Logo';
import { FigmaIcon, DesignGraphicIcon, IndustrialDesignIcon } from './Icons';
import { useState, useEffect } from 'react';

export function Header() {
  const { isReadingMode } = useReadingMode();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  if (isReadingMode) return null;

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-black/95 backdrop-blur-sm transition-all duration-300 border-b border-transparent dark:border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between relative">
          {/* Logo */}
          <Link to="/" className="text-black dark:text-white flex items-center gap-1 hover:opacity-80 transition-opacity">
            <Logo className="h-8 w-auto fill-current" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link to="/" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wide">
              <Home className="w-3 h-3" /> Início
            </Link>
            <Link to="/category/ui-ux" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wide">
              <Layout className="w-3 h-3" /> UI/UX
            </Link>
            <Link to="/category/figma" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wide">
              <FigmaIcon className="w-3 h-3" /> Figma
            </Link>
            <Link to="/category/visual" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wide">
              <DesignGraphicIcon className="w-3 h-3" /> Design gráfico
            </Link>
            <Link to="/category/industrial" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors flex items-center gap-2 uppercase tracking-wide">
              <IndustrialDesignIcon className="w-3 h-3" /> Design industrial
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white transition-colors"
              aria-label="Alternar tema"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-white/10 text-black dark:text-white transition-colors"
              aria-label="Menu"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Full screen, simple CSS */}
      {isMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 40,
            display: 'flex',
            flexDirection: 'column',
          }}
          className="bg-white dark:bg-black"
        >
          {/* Spacer for header */}
          <div style={{ height: '5rem', flexShrink: 0 }} />

          {/* Navigation Links */}
          <nav
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '1.5rem',
              padding: '2rem 1.5rem',
            }}
          >
            {(() => {
              const linkStyle: React.CSSProperties = {
                fontSize: '1.125rem',
                fontWeight: 500,
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              };
              const iconStyle = { width: '1.25rem', height: '1.25rem' };
              const linkClass = "text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors";
              const close = () => setIsMenuOpen(false);

              return (
                <>
                  <Link to="/" onClick={close} className={linkClass} style={linkStyle}>
                    <Home style={iconStyle} /> Início
                  </Link>
                  <Link to="/category/ui-ux" onClick={close} className={linkClass} style={linkStyle}>
                    <Layout style={iconStyle} /> UI/UX
                  </Link>
                  <Link to="/category/figma" onClick={close} className={linkClass} style={linkStyle}>
                    <FigmaIcon style={iconStyle} /> Figma
                  </Link>
                  <Link to="/category/visual" onClick={close} className={linkClass} style={linkStyle}>
                    <DesignGraphicIcon style={iconStyle} /> Design gráfico
                  </Link>
                  <Link to="/category/industrial" onClick={close} className={linkClass} style={linkStyle}>
                    <IndustrialDesignIcon style={iconStyle} /> Design industrial
                  </Link>
                </>
              );
            })()}
          </nav>
        </div>
      )}
    </>
  );
}
