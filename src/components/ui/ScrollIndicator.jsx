import { motion } from 'framer-motion';

export default function ScrollIndicator() {
  return (
    <motion.div
      className="flex flex-col items-center gap-1.5 text-white/20"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
    >
      <span className="text-[10px] tracking-[0.2em] uppercase">Scroll</span>
      <svg width="16" height="24" viewBox="0 0 16 24" fill="none">
        <rect x="1" y="1" width="14" height="22" rx="7" stroke="currentColor" strokeWidth="1.5" />
        <motion.rect
          x="6.5" y="5" width="3" height="5" rx="1.5" fill="currentColor"
          animate={{ y: [0, 6, 0], opacity: [0.6, 0, 0.6] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        />
      </svg>
    </motion.div>
  );
}
