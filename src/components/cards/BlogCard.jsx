import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import Tag from '../ui/Tag';

export default function BlogCard({ post }) {
  const { title, excerpt, category, publishedAt, thumbnail, readingTimeMinutes, externalUrl } = post;

  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'long', day: 'numeric',
  });

  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-48 bg-gray-100">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <Tag className="bg-white shadow-sm">{category}</Tag>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-xs text-gray-400 mb-3">
          <time dateTime={publishedAt}>{formattedDate}</time>
          <span>·</span>
          <span>{readingTimeMinutes} min read</span>
        </div>

        <h3 className="font-display text-lg font-bold text-gray-900 mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1 mb-5">{excerpt}</p>

        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-semibold text-brand-purple hover:gap-2 transition-all duration-200"
        >
          Read More <FiArrowRight className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </motion.article>
  );
}
