import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import BlogCard from '../cards/BlogCard';
import blogPosts from '../../data/blogPosts.json';

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  show:  { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

export default function Blog() {
  const latest = blogPosts.slice(0, 3);

  return (
    <SectionWrapper
      id="blog"
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 section-divider"
      style={{ background: 'rgba(5,8,12,0.6)' }}
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p
            className="text-[11px] font-medium uppercase tracking-[0.22em] mb-4"
            style={{ color: 'rgba(0,212,170,0.9)' }}
          >
            Insights
          </p>
          <h2
            className="font-display font-bold text-white"
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', letterSpacing: '-0.025em' }}
          >
            Fresh From the Blog
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-base" style={{ color: 'rgba(255,255,255,0.38)' }}>
            Thoughts on design, engineering, and building products people love.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {latest.map((post) => (
            <motion.div key={post.id} variants={itemVariants}>
              <BlogCard post={post} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
