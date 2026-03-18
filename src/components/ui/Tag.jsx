import clsx from 'clsx';

export default function Tag({ children, className = '' }) {
  return (
    <span
      className={clsx(
        'inline-block rounded-full border border-white/10 px-3 py-0.5 text-xs text-white/40',
        className
      )}
    >
      {children}
    </span>
  );
}
