import { Link } from 'react-router';
import { useReadingMode } from '../context/ReadingModeContext';
import { Instagram, Linkedin, Layout } from 'lucide-react';
import { Logo } from './Logo';
import { FigmaIcon, DesignGraphicIcon, IndustrialDesignIcon } from './Icons';

export function Footer() {
  const { isReadingMode } = useReadingMode();

  if (isReadingMode) return null;

  return (
    <footer className="bg-gray-50 dark:bg-black pt-20 pb-10 mt-20 border-t border-transparent dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">

          <div className="md:col-span-6">
            <h2 className="mb-4 flex items-center gap-2">
              <Logo className="h-8 w-auto text-black dark:text-white fill-current" /> <span className="font-normal text-gray-400 dark:text-gray-600 text-2xl">|</span> <span className="text-2xl font-bold tracking-tight text-black dark:text-white">Design Trends</span>
            </h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-sm text-sm leading-relaxed">
              Artigos selecionados da interseção entre cultura, tecnologia e estética dentro do reddit.
            </p>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-bold text-sm mb-6 text-black dark:text-white">Categorias</h3>
            <ul className="space-y-4">
              <li>
                <Link to="/category/ui-ux" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Layout className="w-4 h-4" /> UI/UX
                </Link>
              </li>
              <li>
                <Link to="/category/figma" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm flex items-center gap-2">
                  <FigmaIcon className="w-4 h-4" /> Figma
                </Link>
              </li>
              <li>
                <Link to="/category/visual" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm flex items-center gap-2">
                  <DesignGraphicIcon className="w-4 h-4" /> Design gráfico
                </Link>
              </li>
              <li>
                <Link to="/category/industrial" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm flex items-center gap-2">
                  <IndustrialDesignIcon className="w-4 h-4" /> Design industrial
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="font-bold text-sm mb-6 text-black dark:text-white">Redes sociais</h3>
            <ul className="space-y-4">
              <li>
                <a href="https://www.instagram.com/ditrstudio/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Instagram className="w-4 h-4" /> Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/lucasdittrich/" target="_blank" rel="noopener noreferrer" className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors text-sm flex items-center gap-2">
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-200 dark:border-white/10 text-xs text-gray-400 dark:text-gray-500">
          <p>© 2026 Ditr studio. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span className="cursor-pointer hover:text-black dark:hover:text-white">Privacidade</span>
            <span className="cursor-pointer hover:text-black dark:hover:text-white">Termos</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
