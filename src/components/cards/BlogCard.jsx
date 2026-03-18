import { motion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';

export default function BlogCard({ post }) {
  const { title, excerpt, category, publishedAt, thumbnail, readingTimeMinutes, externalUrl } = post;

  const formattedDate = new Date(publishedAt).toLocaleDateString('en-US', {
    year: 'numeric', month: 'short', day: 'numeric',
  });

  return (
    <motion.article
      whileHover={{ y: -5, scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group glass-card overflow-hidden flex flex-col transition-all duration-300"
      style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-48" style={{ background: 'rgba(255,255,255,0.03)' }}>
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          style={{ opacity: 0.65 }}
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span
            className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur-sm"
            style={{
              background: 'rgba(79,142,255,0.15)',
              border: '1px solid rgba(79,142,255,0.3)',
              color: '#4f8eff',
            }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-3 text-[11px] mb-3" style={{ color: 'rgba(255,255,255,0.28)' }}>
          <time dateTime={publishedAt}>{formattedDate}</time>
          <span>·</span>
          <span>{readingTimeMinutes} min read</span>
        </div>

        <h3
          className="font-display text-base font-semibold text-white mb-2 leading-snug tracking-[-0.01em]"
        >
          {title}
        </h3>
        <p
          className="text-sm leading-relaxed flex-1 mb-5"
          style={{ color: 'rgba(255,255,255,0.38)' }}
        >
          {excerpt}
        </p>

        <a
          href={externalUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-medium transition-colors duration-200 group/link"
          style={{ color: 'rgba(255,255,255,0.4)' }}
        >
          <span className="group-hover/link:text-[#4f8eff] transition-colors">Read More</span>
          <FiArrowRight className="transition-transform group-hover/link:translate-x-1 group-hover/link:text-[#4f8eff]" />
        </a>
      </div>
    </motion.article>
  );
}
