import { motion } from 'motion/react';
import { PageTransition } from '../components/PageTransition';

export function About() {
  const principles = [
    'Practice over slides',
    'Curiosity before credentials',
    'Team over ego',
    'Documentation over memory',
  ];

  const domains = [
    'Web Security',
    'Digital Forensics',
    'Reverse Engineering',
    'AI Security',
    'OSINT',
    'Blockchain Security',
    'Cryptography',
    'Network Security',
  ];

  return (
    <PageTransition>
      <div className="min-h-screen pt-20 sm:pt-24 pb-16 sm:pb-20">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Why We Exist */}
          <section className="mb-20 sm:mb-24">
            <motion.h1 
              className="font-['Space_Grotesk',sans-serif] text-[32px] sm:text-[40px] lg:text-[48px] text-[var(--accent)] mb-6 sm:mb-8 font-semibold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Why We Exist
            </motion.h1>
            <motion.div 
              className="space-y-4 sm:space-y-5 text-[14px] sm:text-[15px] lg:text-[16px] leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <p>
                HackerTroupe is a small, focused collective of security researchers and engineers formed around one idea: security cannot be learned passively.
              </p>

              <p>
                We study systems by interacting with them directly identifying how they fail, why those failures exist, and what realistic exploitation and defense look like in practice.
              </p>

              <p>
                Our work is driven by research sprints, competitive problem-solving, and internal experiments. We document outcomes carefully so knowledge is preserved, reproducible, and useful beyond a single event or challenge.
              </p>

              <p>
                HackerTroupe exists to close the gap between theory and real-world security where understanding is earned through analysis, iteration, and disciplined execution.
              </p>
            </motion.div>

          </section>

          {/* Domains */}
          <section>
            <motion.h2 
              className="font-['Space_Grotesk',sans-serif] text-[28px] sm:text-[32px] lg:text-[36px] text-[var(--accent)] mb-6 sm:mb-8 font-semibold"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              Domains
              <p className="mb-6 text-[13px] sm:text-[14px] text-[var(--text-secondary)] max-w-[700px]">
                These domains represent areas of active exploration rather than strict specialization. 
                Members often operate across multiple domains depending on the problem space.
              </p>
            </motion.h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {domains.map((domain, index) => (
                <motion.div 
                  key={index}
                  className="border border-[var(--divider)] px-4 sm:px-5 py-3 font-['JetBrains_Mono',monospace] text-[12px] sm:text-[13px] hover:border-[var(--accent)] transition-colors cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ scale: 1.02 }}
                >
                  {domain}
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </PageTransition>
  );
}
