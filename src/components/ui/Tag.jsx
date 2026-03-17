import clsx from 'clsx';

export default function Tag({ children, className = '' }) {
  return (
    <span
      className={clsx(
        'inline-block rounded-full px-3 py-1 text-xs font-semibold',
        'bg-white/80 border border-gray-200 text-gray-600',
        className
      )}
    >
      {children}
    </span>
  );
}
