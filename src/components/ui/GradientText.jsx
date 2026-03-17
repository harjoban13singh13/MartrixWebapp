import clsx from 'clsx';

export default function GradientText({ children, className = '' }) {
  return (
    <span
      className={clsx(
        'bg-gradient-brand bg-clip-text text-transparent',
        className
      )}
    >
      {children}
    </span>
  );
}
