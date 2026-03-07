import { Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';
import { getOperations, Operation } from '../data/operations';

export function Operations() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedYear, setSelectedYear] = useState<string>('All');
  const [operations, setOperations] = useState<Operation[]>([]);

  useEffect(() => {
    setOperations(getOperations());
  }, []);

  const getCategoryColor = (category: Operation['category']) => {
    switch (category) {
      case 'CTF':
        return 'text-[#00E5FF]';
      case 'Hackathon':
        return 'text-[#00FF9D]';
      case 'Research':
        return 'text-[#FF6B9D]';
    }
  };

  const categories = ['All', 'CTF', 'Hackathon', 'Research'];

  const filteredOperations = operations.filter(op => {
    const searchLower = searchTerm.toLowerCase();
    const matchesSearch = !searchTerm ||
      op.name.toLowerCase().includes(searchLower) ||
      op.outcome.toLowerCase().includes(searchLower) ||
      op.organizer?.toLowerCase().includes(searchLower) ||
      op.description?.toLowerCase().includes(searchLower) ||
      op.participants?.some(p => p.toLowerCase().includes(searchLower));

    const matchesCategory = selectedCategory === 'All' || op.category === selectedCategory;
    const matchesYear = selectedYear === 'All' || op.year === selectedYear;

    return matchesSearch && matchesCategory && matchesYear;
  });

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            className="font-['Space_Grotesk',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] text-[var(--accent)] mb-2 font-semibold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Operations
          </motion.h1>
          <motion.p 
            className="font-['Inter',sans-serif] text-[var(--text-secondary)] text-[13px] sm:text-[14px] mb-6 sm:mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
          >
            No trophies. No rankings obsession. Just focused work and documented outcomes.
          </motion.p>

          {/* Search and Filter */}
          <motion.div 
            className="mb-6 sm:mb-8 space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
              <input
                type="text"
                placeholder="Search operations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-[var(--bg-secondary)] border border-[var(--divider)] pl-11 pr-4 py-3 text-[13px] sm:text-[14px] font-['Inter',sans-serif] focus:outline-none focus:border-[var(--accent)] transition-colors"
              />
            </div>

            {/* Category Filter and Year Dropdown */}
            <div className="flex gap-4 flex-wrap items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-3 sm:px-4 py-2 text-[11px] sm:text-[12px] font-['JetBrains_Mono',monospace] border transition-colors ${
                      selectedCategory === category
                        ? 'border-[var(--accent)] text-[var(--accent)] bg-[var(--accent)]/10'
                        : 'border-[var(--divider)] hover:border-[var(--accent)]'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              {/* Year Dropdown */}
              <div className="flex items-center gap-2">
                <label htmlFor="year-select" className="text-[11px] sm:text-[12px] font-['JetBrains_Mono',monospace] text-[var(--text-secondary)]">
                  Year:
                </label>
                <select
                  id="year-select"
                  value={selectedYear}
                  onChange={(e) => setSelectedYear(e.target.value)}
                  className="bg-[var(--bg-secondary)] border border-[var(--divider)] px-3 py-2 text-[11px] sm:text-[12px] font-['JetBrains_Mono',monospace] focus:outline-none focus:border-[var(--accent)] transition-colors cursor-pointer hover:border-[var(--accent)]"
                >
                  <option value="All">All Years</option>
                  {Array.from(new Set(operations.filter(op => op.year).map(op => op.year!))).sort().reverse().map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>
          </motion.div>

          {/* Operations Grid — 2 per row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {filteredOperations.map((op, index) => (
              <motion.div
                key={op.id}
                className="border border-[var(--divider)] p-4 sm:p-5 hover:border-[var(--accent)] transition-all flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ x: 4 }}
              >
                {/* Category + date */}
                <div className="flex items-center gap-2 sm:gap-3 mb-2 flex-wrap">
                  <span className={`font-['JetBrains_Mono',monospace] text-[10px] sm:text-[11px] uppercase ${getCategoryColor(op.category)}`}>
                    [{op.category}]
                  </span>
                  <span className="font-['JetBrains_Mono',monospace] text-[10px] sm:text-[11px] text-[var(--text-secondary)]">
                    {op.date}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-['Space_Grotesk',sans-serif] text-[16px] sm:text-[18px] mb-3 font-semibold leading-snug">
                  {op.name}
                </h3>

                {/* Organizer */}
                {op.organizer && (
                  <p className="font-['Inter',sans-serif] text-[11px] sm:text-[12px] text-[var(--text-secondary)] mb-3">
                    <span className="font-['JetBrains_Mono',monospace] text-[10px] uppercase mr-1">Organizer:</span>
                    {op.organizer}
                  </p>
                )}

                {/* Outcome */}
                <div className="mb-3">
                  <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[var(--text-secondary)] uppercase mb-1">Outcome</p>
                  <p className="font-['Inter',sans-serif] text-[12px] sm:text-[13px] text-[var(--text-secondary)]">
                    {op.outcome}
                  </p>
                </div>

                {/* Description */}
                {op.description && (
                  <p className="font-['Inter',sans-serif] text-[11px] sm:text-[12px] text-[var(--text-secondary)] border-t border-[var(--divider)] pt-3 mt-auto">
                    {op.description}
                  </p>
                )}

                {/* Participants */}
                {op.participants && op.participants.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-[var(--divider)]">
                    <p className="font-['JetBrains_Mono',monospace] text-[10px] text-[var(--text-secondary)] uppercase mb-1">Participants</p>
                    <p className="font-['Inter',sans-serif] text-[11px] sm:text-[12px] text-[var(--text-secondary)]">
                      {op.participants.join(', ')}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          {filteredOperations.length === 0 && (
            <motion.div 
              className="text-center py-16 sm:py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <p className="font-['Inter',sans-serif] text-[14px] text-[var(--text-secondary)]">
                No operations found matching your criteria.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </PageTransition>
  );
}