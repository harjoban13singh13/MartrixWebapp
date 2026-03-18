import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import ProjectCard from '../cards/ProjectCard';
import projects from '../../data/projects.json';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Projects() {
  return (
    <SectionWrapper
      id="projects"
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 section-divider"
      style={{ background: 'rgba(5,8,12,0.45)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
            style={{ color: 'rgba(124,92,252,0.9)' }}
          >
            Our Work
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}
          >
            Projects We&apos;re Proud Of
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base" style={{ color: 'rgba(255,255,255,0.38)' }}>
            A selection of recent work spanning web apps, mobile, and brand design.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
