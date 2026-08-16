import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const InteractiveExplorer = ({ features, title, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="soft-section py-20">
      <div className="layout-container">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
          <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-2">
          <div className="space-y-3">
            {features.map((feature, index) => {
              const open = activeIndex === index;
              return (
                <div
                  key={feature.title}
                  className={`surface-card cursor-pointer p-5 transition-all ${open ? 'border-primary/45 bg-primary/[0.03]' : 'hover:border-primary/25'}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className={`rounded-lg p-2 ${open ? 'bg-primary text-white' : 'bg-surface-light text-slate-500'}`}>{feature.icon}</div>
                      <h3 className={`font-display text-lg font-bold ${open ? 'text-slate-900' : 'text-slate-700'}`}>{feature.title}</h3>
                    </div>
                    {open ? <ChevronUp size={18} className="text-slate-500" /> : <ChevronDown size={18} className="text-slate-500" />}
                  </div>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <p className="mt-3 text-sm leading-relaxed text-slate-600">{feature.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="sticky top-28">
            <div className="surface-card min-h-[370px] overflow-hidden p-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, x: 12 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -12 }}
                  transition={{ duration: 0.22 }}
                  className="h-full"
                >
                  {features[activeIndex].preview}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveExplorer;
