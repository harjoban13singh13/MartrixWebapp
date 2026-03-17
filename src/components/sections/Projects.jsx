import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GradientText from '../ui/GradientText';
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
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-pink mb-3">
            Our Work
          </p>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Projects We're <GradientText>Proud Of</GradientText>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-lg text-gray-500">
            A selection of recent work spanning web apps, mobile, and brand design.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
