import React, { useState } from 'react';
import { Header, Footer } from './components/Layout';
import { Dashboard } from './pages/Dashboard';
import { Curriculum } from './pages/Curriculum';
import { Archive } from './pages/Archive';
import { Trends } from './pages/Trends';
import { Members } from './pages/Members';
import { Page } from './types';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'dashboard':
        return <Dashboard />;
      case 'curriculum':
        return <Curriculum />;
      case 'archive':
        return <Archive />;
      case 'trends':
        return <Trends />;
      case 'members':
        return <Members />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-surface">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      
      <main className="flex-grow w-full max-w-7xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
