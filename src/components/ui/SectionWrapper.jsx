import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function SectionWrapper({ children, id, className = '' }) {
  const { ref, inView } = useInView({ threshold: 0.12, triggerOnce: true });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
