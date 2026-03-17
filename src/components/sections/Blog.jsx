import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GradientText from '../ui/GradientText';
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
      className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold uppercase tracking-widest text-brand-cyan mb-3">
            Insights
          </p>
          <h2 className="font-display text-4xl font-extrabold text-gray-900 sm:text-5xl">
            Fresh From the <GradientText>Blog</GradientText>
          </h2>
          <p className="mt-4 mx-auto max-w-xl text-lg text-gray-500">
            Thoughts on design, engineering, and building products people love.
          </p>
        </div>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
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
