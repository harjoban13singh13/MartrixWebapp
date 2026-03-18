import clsx from 'clsx';

export default function GradientText({ children, className = '' }) {
  return (
    <span className={clsx('text-[#0099ff]', className)}>
      {children}
    </span>
  );
}
