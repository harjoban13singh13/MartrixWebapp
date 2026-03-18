import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';

export default function ProjectCard({ project }) {
  const { title, description, thumbnail, tags, liveUrl, githubUrl } = project;

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
          style={{ opacity: 0.75 }}
          loading="lazy"
        />
        {/* Overlay links */}
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3"
          style={{ background: 'rgba(5,8,12,0.8)', backdropFilter: 'blur(4px)' }}
        >
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full text-xs font-medium text-white transition-all px-4 py-2"
              style={{
                background: 'rgba(79,142,255,0.15)',
                border: '1px solid rgba(79,142,255,0.35)',
              }}
            >
              <FiExternalLink /> Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full text-xs font-medium text-white transition-all px-4 py-2"
              style={{
                background: 'rgba(255,255,255,0.07)',
                border: '1px solid rgba(255,255,255,0.15)',
              }}
            >
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3
          className="font-display text-base font-semibold text-white mb-2 tracking-[-0.01em]"
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: 'rgba(255,255,255,0.38)' }}>
          {description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full px-3 py-0.5 text-[11px] font-medium"
              style={{
                border: '1px solid rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
