import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import Tag from '../ui/Tag';

export default function ProjectCard({ project }) {
  const { title, description, thumbnail, tags, liveUrl, githubUrl } = project;

  return (
    <motion.article
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="group flex flex-col rounded-2xl bg-white border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      {/* Thumbnail */}
      <div className="relative overflow-hidden h-52 bg-gray-100">
        <img
          src={thumbnail}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {/* Overlay links */}
        <div className="absolute inset-0 bg-gray-950/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <FiExternalLink /> Live
            </a>
          )}
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-gray-900 hover:bg-gray-100 transition-colors"
            >
              <FiGithub /> Code
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <h3 className="font-display text-lg font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{description}</p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
